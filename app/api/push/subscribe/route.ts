import { NextRequest, NextResponse } from "next/server";
import { getStore } from "@netlify/blobs";

export async function POST(request: NextRequest) {
  const subscription = await request.json();

  if (!subscription?.endpoint) {
    return NextResponse.json({ error: "Invalid subscription" }, { status: 400 });
  }

  const store = getStore("push-subscriptions");
  const key = Buffer.from(subscription.endpoint).toString("base64url");
  await store.setJSON(key, subscription);

  return NextResponse.json({ ok: true });
}

export async function DELETE(request: NextRequest) {
  const { endpoint } = await request.json();
  if (!endpoint) {
    return NextResponse.json({ error: "Missing endpoint" }, { status: 400 });
  }

  const store = getStore("push-subscriptions");
  const key = Buffer.from(endpoint).toString("base64url");
  await store.delete(key);

  return NextResponse.json({ ok: true });
}
