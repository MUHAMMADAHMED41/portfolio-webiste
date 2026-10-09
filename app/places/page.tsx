import { places } from "@/lib/portfolio-data";
import { PageIntro, PageShell } from "@/components/SiteChrome";
import { PlacesJourney } from "@/components/PlacesJourney";
import { TravelAyah } from "@/components/TravelAyah";

export default function PlacesPage() {
  return <PageShell><PageIntro kicker="05 / Travel log" title="Places along the way." description="I love travelling — chasing the next pin on the map, one trip at a time. Here's the journey so far, and there's a lot more world left to see." /><section className="overflow-hidden border-y border-white/10 bg-white/[0.02] py-5"><div className="marquee-track flex gap-3">{[...places, ...places].map((place, index) => <span key={`${place.image}-${index}`} className="whitespace-nowrap rounded-full border border-orange-500/20 px-4 py-2 font-mono text-[11px] text-orange-200/80">✦ {place.title}</span>)}</div></section><div className="py-20"><TravelAyah /><PlacesJourney /></div></PageShell>;
}
