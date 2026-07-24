import type { Metadata } from "next";
import { news } from "@/lib/news";

export const metadata: Metadata = {
  title: "Nieuws — Tentastic Melderslo 2027",
};

export default function NieuwsPage() {
  return (
    <div className="flex flex-1 flex-col bg-black text-zinc-100">
      <section className="px-6 py-20">
        <h1 className="font-display mb-10 text-center text-4xl tracking-wide text-tentastic-orange">
          NIEUWS
        </h1>

        {news.length === 0 ? (
          <p className="text-center text-zinc-400">
            Nog geen updates. Hou deze pagina in de gaten voor het laatste
            nieuws over Tentastic Melderslo!
          </p>
        ) : (
          <div className="mx-auto flex max-w-2xl flex-col gap-4">
            {news.map((post) => (
              <article
                key={post.slug}
                className="rounded-lg border border-white/10 bg-white/5 px-6 py-5"
              >
                <p className="mb-1 text-xs tracking-wide text-zinc-500">
                  {post.date}
                </p>
                <h2 className="mb-2 text-lg font-medium text-tentastic-orange">
                  {post.title}
                </h2>
                <p className="whitespace-pre-line text-sm text-zinc-300">
                  {post.body}
                </p>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
