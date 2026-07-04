import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10 px-6 py-10 text-center text-sm text-zinc-500">
      <div className="mb-4 flex justify-center gap-6">
        <a
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-tentastic-orange"
        >
          Instagram
        </a>
        <a
          href={site.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-tentastic-orange"
        >
          Facebook
        </a>
      </div>
      <p>&copy; {site.edition} Tentastic Melderslo &mdash; KPJ Melderslo</p>
    </footer>
  );
}
