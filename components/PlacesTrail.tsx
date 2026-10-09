import Image from "next/image";
import { places } from "@/lib/portfolio-data";

function uniqueByTitle<T extends { title: string }>(items: readonly T[]) {
  const seen = new Set<string>();
  return items.filter((item) => (seen.has(item.title) ? false : (seen.add(item.title), true)));
}

const featuredPlaces = uniqueByTitle(places).slice(0, 7);

function TrailPin({ src, alt }: { src: string; alt: string }) {
  return <div className="relative h-16 w-16 shrink-0 -rotate-45 overflow-hidden rounded-[50%_50%_50%_0] border-[3px] border-orange-400/80 bg-zinc-900 shadow-[0_0_22px_rgba(255,69,0,0.3)]"><div className="absolute inset-[-30%] rotate-45"><Image src={src} alt={alt} fill loading="lazy" draggable={false} className="pointer-events-none object-cover" /></div></div>;
}

function TrailConnector() {
  return <div className="relative mx-1 hidden h-10 w-12 shrink-0 items-center justify-center text-orange-500/60 sm:flex" aria-hidden="true"><svg viewBox="0 0 64 24" className="absolute inset-0 h-full w-full" fill="none"><path d="M2 20 C 18 4, 46 22, 62 6" stroke="currentColor" strokeWidth="2" strokeDasharray="1 7" strokeLinecap="round" /></svg><svg viewBox="0 0 24 24" className="relative h-3.5 w-3.5 fill-orange-400"><path d="M12 2c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg></div>;
}

export function PlacesTrail() {
  return <section className="places-trail-section border-y border-white/10 bg-orange-500/[0.03] py-10" aria-label="Places visited"><div className="mx-auto mb-8 max-w-7xl px-6 sm:px-10 lg:px-16"><p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">On the road</p><p className="mt-2 max-w-xl text-sm text-zinc-400">I love travelling — and I&apos;ll see the whole world one day. A few stops from the journey so far.</p></div><div className="mx-auto flex max-w-7xl flex-wrap items-start justify-center gap-y-6 px-6 sm:px-10 lg:flex-nowrap lg:justify-between lg:px-16">{featuredPlaces.map((place, index) => <div key={place.image} className="flex shrink-0 items-start"><div className="flex w-20 shrink-0 select-none flex-col items-center gap-3 text-center sm:w-24"><TrailPin src={place.image} alt={place.title} /><span className="line-clamp-2 text-xs font-medium leading-4 text-zinc-300">{place.title}</span></div>{index < featuredPlaces.length - 1 && <TrailConnector />}</div>)}<a href="/places" className="group flex w-20 shrink-0 select-none flex-col items-center gap-3 text-center sm:w-24"><span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-dashed border-orange-400/60 text-orange-300 transition group-hover:border-orange-400 group-hover:bg-orange-500/10">↗</span><span className="text-xs font-semibold text-orange-300 group-hover:text-orange-200">View all places</span></a></div></section>;
}
