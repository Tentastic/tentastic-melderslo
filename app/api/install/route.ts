import { NextRequest, NextResponse } from "next/server";
import { getStore } from "@netlify/blobs";

export async function POST() {
  const store = getStore("app-installs");
  const key = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
  await store.setJSON(key, { installedAt: new Date().toISOString() });

  return NextResponse.json({ ok: true });
}

export async function GET(request: NextRequest) {
  const secret = request.headers.get("x-push-secret");
  if (secret !== process.env.PUSH_SEND_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const store = getStore("app-installs");
  const { blobs } = await store.list();

  return NextResponse.json({ installs: blobs.length });
}
