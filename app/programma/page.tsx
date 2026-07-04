import type { Metadata } from "next";
import Amenities from "@/components/Amenities";
import { lineup } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programma — Tentastic Melderslo 2026",
};

export default function ProgrammaPage() {
  return (
    <div className="flex flex-1 flex-col bg-black text-zinc-100">
      {/* Line-up met aftermovie als achtergrond */}
      <section className="relative overflow-hidden px-6 py-20">
        <video
          src="/aftermovie.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative">
          <h1 className="font-display mb-10 text-center text-4xl tracking-wide text-tentastic-orange">
            LINE-UP
          </h1>
          <ul className="mx-auto flex max-w-xl flex-col gap-4">
            {lineup.map((act, i) => (
              <li
                key={`${act.name}-${i}`}
                className="flex items-center justify-between rounded-lg border border-white/10 bg-black/40 px-6 py-4 backdrop-blur-sm"
              >
                <span className="text-lg font-medium">
                  {act.instagram ? (
                    <a
                      href={`https://www.instagram.com/${act.instagram}/`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-tentastic-orange"
                    >
                      {act.name}
                    </a>
                  ) : (
                    act.name
                  )}
                </span>
                <span className="font-mono text-sm text-zinc-400">
                  {act.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Voorzieningen */}
      <section className="border-t border-white/10 px-6 py-20">
        <h2 className="font-display mb-10 text-center text-4xl tracking-wide text-tentastic-orange">
          VOORZIENINGEN
        </h2>
        <Amenities />
      </section>
    </div>
  );
}
