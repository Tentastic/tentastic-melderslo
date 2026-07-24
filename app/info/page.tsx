import type { Metadata } from "next";
import { about, faq, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Info & FAQ — Tentastic Melderslo 2027",
};

export default function InfoPage() {
  return (
    <div className="flex flex-1 flex-col bg-black text-zinc-100">
      {/* Over Tentastic */}
      <section className="px-6 py-20">
        <h1 className="font-display mb-10 text-center text-4xl tracking-wide text-tentastic-orange">
          OVER TENTASTIC
        </h1>
        <div className="mx-auto flex max-w-2xl flex-col gap-4 text-zinc-300">
          <p>{about.intro}</p>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 px-6 py-20">
        <h2 className="font-display mb-10 text-center text-4xl tracking-wide text-tentastic-orange">
          FAQ
        </h2>
        <div className="mx-auto flex max-w-2xl flex-col gap-3">
          {faq.map((item) => (
            <details
              key={item.question}
              className="group rounded-lg border border-white/10 bg-white/5 px-6 py-4"
            >
              <summary className="cursor-pointer list-none font-medium marker:hidden">
                <span className="flex items-center justify-between">
                  {item.question}
                  <span className="ml-4 text-tentastic-orange transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 text-sm text-zinc-400">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="border-t border-white/10 px-6 py-20">
        <h2 className="font-display mb-6 text-center text-4xl tracking-wide text-tentastic-orange">
          NOG VRAGEN?
        </h2>
        <div className="mx-auto max-w-2xl text-center text-zinc-300">
          <p className="mb-4">
            Staat je vraag er niet bij? Mail ons gerust.
          </p>
          <a
            href={`mailto:${site.contactEmail}`}
            className="font-medium text-tentastic-orange underline decoration-tentastic-orange underline-offset-4 hover:text-white"
          >
            {site.contactEmail}
          </a>
        </div>
      </section>
    </div>
  );
}
