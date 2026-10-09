import Image from "next/image";
import { places } from "@/lib/portfolio-data";

function uniqueByTitle<T extends { title: string }>(items: readonly T[]) {
  const seen = new Set<string>();
  return items.filter((item) => (seen.has(item.title) ? false : (seen.add(item.title), true)));
}

const trailPlaces = uniqueByTitle(places);

export function PlacesTrail() {
  const items = [...trailPlaces, ...trailPlaces];
  return <section className="places-trail-section overflow-hidden border-y border-white/10 bg-orange-500/[0.03] py-8" aria-label="Places visited"><div className="mx-auto mb-6 flex max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-16"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">On the road</p><p className="mt-2 text-sm text-zinc-400">A trail of places visited across the journey so far.</p></div><a href="/places" className="text-sm text-orange-300 hover:text-white">View all places ↗</a></div><div className="marquee-track flex items-center">{items.map((place, index) => <div key={`${place.image}-${index}`} className="flex shrink-0 items-center"><div className="flex w-28 shrink-0 select-none flex-col items-center gap-3 text-center"><div className="h-20 w-20 overflow-hidden rounded-full border-2 border-orange-400/70 bg-zinc-900 shadow-[0_0_25px_rgba(255,69,0,0.2)]"><Image src={place.image} alt={place.title} width={80} height={80} loading="lazy" draggable={false} className="pointer-events-none h-full w-full object-cover" /></div><span className="line-clamp-2 text-xs font-medium leading-4 text-zinc-300">{place.title}</span></div><div className="mx-3 flex shrink-0 items-center gap-2" aria-hidden="true"><span className="h-1.5 w-1.5 rounded-full bg-orange-500/70" /><span className="h-1.5 w-1.5 rounded-full bg-orange-500/45" /><span className="h-1.5 w-1.5 rounded-full bg-orange-500/25" /></div></div>)}</div></section>;
}
