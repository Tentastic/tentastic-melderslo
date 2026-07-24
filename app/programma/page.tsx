import type { Metadata } from "next";
import Amenities from "@/components/Amenities";
import { lineup } from "@/lib/site";

export const metadata: Metadata = {
  title: "Programma — Tentastic Melderslo 2027",
};

const previousActs = Array.from(new Set(lineup.map((act) => act.name)));

export default function ProgrammaPage() {
  return (
    <div className="flex flex-1 flex-col bg-black text-zinc-100">
      {/* Programma 2027, met sfeerbeelden (2025) als achtergrond */}
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
            PROGRAMMA 2027
          </h1>
          <div className="mx-auto max-w-xl rounded-lg border border-white/10 bg-black/40 px-6 py-12 text-center text-zinc-300 backdrop-blur-sm">
            <p>
              De line-up voor editie 2027 wordt binnenkort bekendgemaakt. Zet
              meldingen aan of volg ons op Instagram om als eerste te weten
              wie er staan.
            </p>
          </div>
        </div>
      </section>

      {/* Terugblik 2026 */}
      <section className="border-t border-white/10 px-6 py-20">
        <h2 className="font-display mb-3 text-center text-4xl tracking-wide text-tentastic-orange">
          TERUGBLIK 2026
        </h2>
        <p className="mx-auto max-w-xl text-center text-zinc-400">
          Editie 2026 was een topavond met {previousActs.join(", ")}.
        </p>
      </section>

      {/* Voorzieningen */}
      <section className="border-t border-white/10 px-6 py-20">
        <h2 className="font-display mb-3 text-center text-4xl tracking-wide text-tentastic-orange">
          VOORZIENINGEN
        </h2>
        <p className="mb-10 text-center text-sm text-zinc-400">
          Indicatief, gebaseerd op editie 2026 — kan wijzigen voor 2027.
        </p>
        <Amenities />
      </section>
    </div>
  );
}
