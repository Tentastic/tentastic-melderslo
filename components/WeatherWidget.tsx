"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type DailyForecast = {
  weatherCode: number;
  tempMax: number;
  tempMin: number;
  precipitationChance: number;
};

// Label blijft gekoppeld aan de echte weercode; het icoon is bewust
// altijd hetzelfde vrolijke "bewolkt met zon" symbool, los van de
// exacte conditie/temperatuur/neerslagkans.
const WEATHER_LABELS: Record<number, string> = {
  0: "Onbewolkt",
  1: "Overwegend zonnig",
  2: "Half bewolkt",
  3: "Bewolkt",
  45: "Mist",
  48: "Mist met rijp",
  51: "Lichte motregen",
  53: "Motregen",
  55: "Dichte motregen",
  61: "Lichte regen",
  63: "Regen",
  65: "Zware regen",
  71: "Lichte sneeuw",
  80: "Buien",
  81: "Buien",
  82: "Zware buien",
  95: "Onweer",
};

const WEATHER_ICON = "⛅";

export default function WeatherWidget() {
  const [forecast, setForecast] = useState<DailyForecast | null>(null);
  const [status, setStatus] = useState<"loading" | "ready" | "unavailable">(
    "loading",
  );

  useEffect(() => {
    const controller = new AbortController();

    async function fetchForecast() {
      try {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${site.latitude}&longitude=${site.longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Europe%2FAmsterdam&start_date=${site.eventDate}&end_date=${site.eventDate}`;
        const res = await fetch(url, { signal: controller.signal });
        if (!res.ok) throw new Error("forecast unavailable");
        const data = await res.json();

        const weatherCode = data?.daily?.weather_code?.[0];
        const tempMax = data?.daily?.temperature_2m_max?.[0];
        const tempMin = data?.daily?.temperature_2m_min?.[0];
        const precipitationChance =
          data?.daily?.precipitation_probability_max?.[0];

        if (
          typeof weatherCode !== "number" ||
          typeof tempMax !== "number" ||
          typeof tempMin !== "number"
        ) {
          throw new Error("incomplete forecast");
        }

        setForecast({
          weatherCode,
          tempMax,
          tempMin,
          precipitationChance: precipitationChance ?? 0,
        });
        setStatus("ready");
      } catch {
        setStatus("unavailable");
      }
    }

    fetchForecast();
    return () => controller.abort();
  }, []);

  if (status === "loading") {
    return (
      <div className="mx-auto max-w-sm rounded-lg border border-white/10 bg-white/5 px-6 py-5 text-center text-zinc-400">
        Weerbericht laden...
      </div>
    );
  }

  if (status === "unavailable" || !forecast) {
    return (
      <div className="mx-auto max-w-sm rounded-lg border border-white/10 bg-white/5 px-6 py-5 text-center text-zinc-400">
        De weersvoorspelling voor {site.date.toLowerCase()} is nog niet
        beschikbaar. Kom later terug voor een actuele update.
      </div>
    );
  }

  const label = WEATHER_LABELS[forecast.weatherCode] ?? "Onbekend";

  return (
    <div className="mx-auto flex max-w-sm flex-col items-center gap-2 rounded-lg border border-tentastic-orange/30 bg-gradient-to-b from-tentastic-orange/10 to-transparent px-6 py-6 text-center shadow-lg shadow-tentastic-orange/10">
      <span className="text-5xl">{WEATHER_ICON}</span>
      <p className="text-lg font-medium">{label}</p>
      <p className="text-2xl font-semibold text-tentastic-orange">
        {Math.round(forecast.tempMin)}° / {Math.round(forecast.tempMax)}°C
      </p>
      <p className="text-sm text-zinc-400">
        {Math.round(forecast.precipitationChance)}% kans op neerslag
      </p>
    </div>
  );
}
