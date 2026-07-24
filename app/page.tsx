import Link from "next/link";
import Countdown from "@/components/Countdown";
import EnableNotificationsButton from "@/components/EnableNotificationsButton";
import InstallAppButton from "@/components/InstallAppButton";
import WeatherWidget from "@/components/WeatherWidget";
import { site, about } from "@/lib/site";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-black text-zinc-100">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <h1 className="font-display text-gradient-tentastic text-6xl leading-none tracking-wide sm:text-8xl">
          TENTASTIC
        </h1>
        <p className="font-display text-2xl tracking-[0.3em] text-tentastic-orange sm:text-3xl">
          MELDERSLO
        </p>

        <p className="mt-4 max-w-md text-lg text-zinc-300">
          Bedankt voor een onvergetelijke editie 2026! De volgende editie is
          op {site.date.toLowerCase()}.
        </p>

        {site.ticketUrl ? (
          <a
            href={site.ticketUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 rounded-full bg-tentastic-orange px-10 py-4 font-display text-xl tracking-wide text-black transition-colors hover:bg-tentastic-red hover:text-white"
          >
            Tickets
          </a>
        ) : (
          <p className="mt-4 rounded-full border border-white/20 px-10 py-4 text-sm text-zinc-400">
            Tickets volgen later — hou Nieuws en Instagram in de gaten
          </p>
        )}

        <div className="flex flex-wrap items-center justify-center gap-3">
          <InstallAppButton />
          <EnableNotificationsButton />
        </div>
      </section>

      {/* Countdown */}
      <section className="border-t border-white/10 px-6 py-16">
        <Countdown />
      </section>

      {/* Over Tentastic teaser */}
      <section className="border-t border-white/10 px-6 py-20">
        <h2 className="font-display mb-6 text-center text-4xl tracking-wide text-tentastic-orange">
          OVER TENTASTIC
        </h2>
        <div className="mx-auto max-w-2xl text-center text-zinc-300">
          <p className="mb-4">{about.intro}</p>
          <Link
            href="/info"
            className="underline decoration-tentastic-orange underline-offset-4 hover:text-white"
          >
            Lees het hele verhaal
          </Link>
        </div>
      </section>

      {/* Weerbericht */}
      <section className="border-t border-white/10 px-6 py-20">
        <h2 className="font-display mb-10 text-center text-4xl tracking-wide text-tentastic-orange">
          WEERBERICHT
        </h2>
        <WeatherWidget />
      </section>
    </div>
  );
}
