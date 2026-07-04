"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type Remaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getRemaining(): Remaining | null {
  const diff = new Date(site.eventDateTime).getTime() - Date.now();
  if (diff <= 0) return null;

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Unit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-lg border border-tentastic-orange/30 bg-white/5 px-4 py-3 sm:px-6 sm:py-4">
      <span className="font-display text-3xl text-tentastic-orange sm:text-5xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-zinc-400 sm:text-xs">
        {label}
      </span>
    </div>
  );
}

export default function Countdown() {
  const [remaining, setRemaining] = useState<Remaining | null>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const tick = () => {
      const r = getRemaining();
      setRemaining(r);
      if (!r) setStarted(true);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  if (started) {
    return (
      <p className="text-center font-display text-2xl text-tentastic-orange">
        Tentastic Melderslo is begonnen! 🎉
      </p>
    );
  }

  if (!remaining) return null;

  return (
    <div className="flex justify-center gap-2 sm:gap-4">
      <Unit value={remaining.days} label="dagen" />
      <Unit value={remaining.hours} label="uur" />
      <Unit value={remaining.minutes} label="min" />
      <Unit value={remaining.seconds} label="sec" />
    </div>
  );
}
