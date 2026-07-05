import { NextRequest, NextResponse } from "next/server";
import { getStore } from "@netlify/blobs";
import webpush from "web-push";

webpush.setVapidDetails(
  process.env.VAPID_SUBJECT!,
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.VAPID_PRIVATE_KEY!,
);

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-push-secret");
  if (secret !== process.env.PUSH_SEND_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, body, url } = await request.json();
  if (!title || !body) {
    return NextResponse.json(
      { error: "title and body are required" },
      { status: 400 },
    );
  }

  const store = getStore("push-subscriptions");
  const { blobs } = await store.list();

  const payload = JSON.stringify({ title, body, url: url || "/nieuws" });

  let sent = 0;
  let removed = 0;

  await Promise.all(
    blobs.map(async ({ key }) => {
      const subscription = await store.get(key, { type: "json" });
      if (!subscription) return;

      try {
        await webpush.sendNotification(subscription, payload);
        sent += 1;
      } catch (err: unknown) {
        const statusCode = (err as { statusCode?: number })?.statusCode;
        if (statusCode === 404 || statusCode === 410) {
          await store.delete(key);
          removed += 1;
        }
      }
    }),
  );

  return NextResponse.json({ sent, removed, total: blobs.length });
}

export async function GET(request: NextRequest) {
  const secret = request.headers.get("x-push-secret");
  if (secret !== process.env.PUSH_SEND_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const store = getStore("push-subscriptions");
  const { blobs } = await store.list();

  return NextResponse.json({ subscribers: blobs.length });
}
