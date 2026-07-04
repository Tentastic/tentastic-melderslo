import { site } from "@/lib/site";

const AMENITIES = [
  { icon: "🎪", label: "Podium" },
  { icon: "🍹", label: "Bar" },
  { icon: "🍟", label: "Catering" },
  { icon: "🎫", label: "Muntenkassa" },
  { icon: "🧥", label: "Garderobe" },
  { icon: "⛑️", label: "EHBO" },
  { icon: "🚻", label: "Toiletten" },
  { icon: "🚲", label: "Fietsenstalling" },
];

export default function Amenities() {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5">
        {AMENITIES.map((item) => (
          <div
            key={item.label}
            className="flex flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-5 text-center"
          >
            <span className="text-3xl">{item.icon}</span>
            <span className="text-xs font-medium sm:text-sm">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-8 flex max-w-sm flex-col items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-6 text-center">
        <p className="text-lg font-medium">🅿️ Parkeren voor auto&apos;s</p>
        <p className="text-sm text-zinc-400">{site.parkingName}</p>
        <a
          href={site.parkingMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 rounded-full bg-tentastic-orange px-6 py-2 text-sm font-medium text-black transition-colors hover:bg-tentastic-red hover:text-white"
        >
          Route naar parkeren
        </a>
      </div>
    </div>
  );
}
