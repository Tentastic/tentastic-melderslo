"use client";

import { useEffect, useState } from "react";

function urlBase64ToUint8Array(base64String: string) {
  const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, "+")
    .replace(/_/g, "/");
  const rawData = atob(base64);
  return Uint8Array.from([...rawData].map((c) => c.charCodeAt(0)));
}

type Status = "idle" | "loading" | "subscribed" | "denied" | "unsupported";

export default function EnableNotificationsButton() {
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (!("serviceWorker" in navigator) || !("PushManager" in window)) {
      setStatus("unsupported");
      return;
    }
    if (Notification.permission === "denied") setStatus("denied");
  }, []);

  const subscribe = async () => {
    setStatus("loading");
    try {
      const permission = await Notification.requestPermission();
      if (permission !== "granted") {
        setStatus("denied");
        return;
      }

      const registration = await navigator.serviceWorker.register("/sw.js");
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(
          process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
        ),
      });

      await fetch("/api/push/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(subscription),
      });

      setStatus("subscribed");
    } catch {
      setStatus("idle");
    }
  };

  if (status === "unsupported") return null;

  if (status === "subscribed") {
    return (
      <p className="text-sm text-zinc-400">🔔 Meldingen staan aan</p>
    );
  }

  if (status === "denied") {
    return (
      <p className="max-w-xs text-center text-xs text-zinc-500">
        Meldingen zijn geblokkeerd. Zet ze aan via je browserinstellingen om
        updates te ontvangen.
      </p>
    );
  }

  return (
    <button
      onClick={subscribe}
      disabled={status === "loading"}
      className="rounded-full border border-white/20 px-6 py-2 text-sm font-medium text-zinc-300 transition-colors hover:border-tentastic-orange hover:text-tentastic-orange disabled:opacity-50"
    >
      {status === "loading" ? "Bezig..." : "🔔 Meldingen aanzetten"}
    </button>
  );
}
