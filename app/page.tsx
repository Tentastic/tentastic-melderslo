import Image from "next/image";
import Link from "next/link";
import Countdown from "@/components/Countdown";
import InstallAppButton from "@/components/InstallAppButton";
import WeatherWidget from "@/components/WeatherWidget";
import { site, about } from "@/lib/site";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-black text-zinc-100">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-6 pb-10 text-center sm:pb-16">
        <Image
          src="/banner.png"
          alt="Tentastic Melderslo — La$$a, Young Dylan, Hitmaestro, Two Face — vrijdag 10 juli, 16+"
          width={2000}
          height={930}
          priority
          className="h-auto w-full"
        />

        <div className="mt-2 flex flex-col items-center gap-2 px-6 text-lg text-zinc-300">
          <p>{site.time}</p>
          <a
            href={site.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-tentastic-orange underline-offset-4 hover:text-white"
          >
            {site.location}
          </a>
        </div>

        <a
          href={site.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 rounded-full bg-tentastic-orange px-10 py-4 font-display text-xl tracking-wide text-black transition-colors hover:bg-tentastic-red hover:text-white"
        >
          Tickets
        </a>

        <InstallAppButton />
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
