import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/programma", label: "Programma" },
  { href: "/nieuws", label: "Nieuws" },
  { href: "/sponsoren", label: "Sponsoren" },
  { href: "/info", label: "Info" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-3">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Tentastic Melderslo"
            width={485}
            height={150}
            priority
            className="h-8 w-auto"
          />
        </Link>
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-display text-sm tracking-wide text-zinc-300 hover:text-tentastic-orange"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
