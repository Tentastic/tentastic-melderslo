import type { Metadata } from "next";
import Image from "next/image";
import {
  platinumSponsors,
  goldSponsors,
  sponsorPitch,
  sponsorTiers,
  sponsorContact,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Sponsoren — Tentastic Melderslo 2027",
};

export default function SponsorenPage() {
  return (
    <div className="flex flex-1 flex-col bg-black text-zinc-100">
      {/* Onze sponsoren */}
      <section className="px-6 py-20">
        <h1 className="font-display mb-3 text-center text-4xl tracking-wide text-tentastic-orange">
          ONZE SPONSOREN
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-center text-zinc-400">
          Dankzij deze sponsoren was editie 2026 een succes. De sponsoren
          voor 2027 worden hier binnenkort bekendgemaakt.
        </p>
        <p className="mb-12 text-center text-sm tracking-[0.2em] text-zinc-500">
          PLATINUM
        </p>
        <div className="mx-auto mb-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {platinumSponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center rounded-xl bg-white p-10 shadow-lg shadow-tentastic-orange/10"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={320}
                height={160}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>

        <p className="mb-12 text-center text-sm tracking-[0.2em] text-zinc-500">
          GOUD
        </p>
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {goldSponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="flex items-center justify-center rounded-lg bg-white p-4"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={140}
                height={70}
                className="h-auto w-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Word sponsor */}
      <section className="border-t border-white/10 px-6 py-20">
        <h2 className="font-display mb-6 text-center text-4xl tracking-wide text-tentastic-orange">
          WORD SPONSOR
        </h2>
        <div className="mx-auto mb-6 max-w-2xl text-zinc-300">
          <p>{sponsorPitch.intro}</p>
        </div>
        <ul className="mx-auto mb-16 flex max-w-2xl flex-col gap-2 text-zinc-300">
          {sponsorPitch.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span className="text-tentastic-orange">✓</span>
              {bullet}
            </li>
          ))}
        </ul>

        {/* Sponsorpakketten */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {sponsorTiers.map((tier) => (
            <div
              key={tier.name}
              className="flex flex-col gap-3 rounded-lg border border-white/10 bg-white/5 p-5"
            >
              <p className="font-display text-xl text-tentastic-orange">
                {tier.name.toUpperCase()}
              </p>
              <p className="text-sm font-medium text-zinc-200">
                {tier.price}
              </p>
              <ul className="flex flex-col gap-1 text-xs text-zinc-400">
                {tier.benefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Niet passend? */}
      <section className="border-t border-white/10 px-6 py-20">
        <h2 className="font-display mb-6 text-center text-4xl tracking-wide text-tentastic-orange">
          NIET PASSEND?
        </h2>
        <div className="mx-auto max-w-2xl text-center text-zinc-300">
          <p className="mb-8">{sponsorContact.intro}</p>
          <a
            href={`mailto:${sponsorContact.email}`}
            className="font-medium text-tentastic-orange underline decoration-tentastic-orange underline-offset-4 hover:text-white"
          >
            {sponsorContact.email}
          </a>
        </div>
      </section>
    </div>
  );
}
