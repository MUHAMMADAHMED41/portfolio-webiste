import Image from "next/image";
import { places } from "@/lib/portfolio-data";

function uniqueByTitle<T extends { title: string }>(items: readonly T[]) {
  const seen = new Set<string>();
  return items.filter((item) => (seen.has(item.title) ? false : (seen.add(item.title), true)));
}

const featuredPlaces = uniqueByTitle(places).slice(0, 7);

function shortLabel(title: string) {
  return title.split(",")[0].trim();
}

function TrailPin({ src, alt, index }: { src: string; alt: string; index: number }) {
  return <div className="relative h-20 w-20 shrink-0 sm:h-24 sm:w-24"><div className="absolute -top-1.5 -right-1.5 z-10 flex h-6 w-6 items-center justify-center rounded-full border border-orange-400/60 bg-zinc-950 font-mono text-[10px] font-semibold text-orange-400 shadow-[0_0_10px_rgba(0,0,0,0.5)]">{String(index + 1).padStart(2, "0")}</div><div className="h-full w-full -rotate-45 overflow-hidden rounded-[50%_50%_50%_0] border-[3px] border-orange-400/80 bg-zinc-900 shadow-[0_0_26px_rgba(255,69,0,0.3)]"><div className="absolute inset-[-30%] rotate-45"><Image src={src} alt={alt} fill loading="lazy" draggable={false} className="pointer-events-none object-cover" /></div></div></div>;
}

function TrailConnector() {
  return <div className="relative mx-0.5 flex h-10 w-10 shrink-0 items-center justify-center self-center text-orange-500/50 sm:w-14" aria-hidden="true"><svg viewBox="0 0 64 24" preserveAspectRatio="none" className="absolute inset-0 h-full w-full" fill="none"><path d="M2 12 C 20 2, 44 22, 62 12" stroke="currentColor" strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" /></svg></div>;
}

export function PlacesTrail() {
  return <section className="places-trail-section border-y border-white/10 bg-orange-500/[0.03] py-14" aria-label="Places visited">
    <div className="mx-auto mb-10 flex max-w-7xl flex-col gap-4 px-6 sm:flex-row sm:items-end sm:justify-between sm:px-10 lg:px-16">
      <div><p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">On the road</p><p className="mt-3 max-w-xl text-base text-zinc-400">I love travelling, and I&apos;ll see the whole world one day. A few stops from the journey so far.</p></div>
      <a href="/places" className="hidden shrink-0 items-center gap-2 rounded-full border border-orange-400/30 px-5 py-2.5 text-sm font-semibold text-orange-300 transition hover:border-orange-400 hover:bg-orange-500/10 hover:text-orange-200 sm:inline-flex">View all places <span aria-hidden="true">↗</span></a>
    </div>
    <div className="no-scrollbar mx-auto max-w-7xl overflow-x-auto px-6 sm:px-10 lg:px-16">
      <div className="flex w-max items-start gap-0 sm:w-full sm:justify-between">
        {featuredPlaces.map((place, index) => <div key={place.image} className="flex shrink-0 items-start">
          <div className="flex w-24 shrink-0 select-none flex-col items-center gap-3 text-center sm:w-28">
            <TrailPin src={place.image} alt={place.title} index={index} />
            <span className="flex h-10 items-center justify-center text-sm font-semibold leading-5 text-zinc-200">{shortLabel(place.title)}</span>
          </div>
          {index < featuredPlaces.length - 1 && <TrailConnector />}
        </div>)}
      </div>
    </div>
    <a href="/places" className="mx-6 mt-8 flex items-center justify-center gap-2 rounded-full border border-orange-400/30 px-5 py-3 text-sm font-semibold text-orange-300 transition hover:border-orange-400 hover:bg-orange-500/10 hover:text-orange-200 sm:hidden">View all places <span aria-hidden="true">↗</span></a>
  </section>;
}
