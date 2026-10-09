"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { places } from "@/lib/portfolio-data";

function JourneyPin({ src, alt }: { src: string; alt: string }) {
  return <div className="relative h-14 w-14 -rotate-45 overflow-hidden rounded-[50%_50%_50%_0] border-[3px] border-orange-400 bg-zinc-900 shadow-[0_0_18px_rgba(255,69,0,0.35)]"><div className="absolute inset-[-30%] rotate-45"><Image src={src} alt={alt} fill draggable={false} className="pointer-events-none object-cover" /></div></div>;
}

function JourneyStop({ place, index }: { place: { title: string; image: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setVisible(true)), { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const isRight = index % 2 === 1;
  return <div ref={ref} className={`journey-stop flex ${isRight ? "md:justify-end" : "md:justify-start"} justify-center ${visible ? "is-visible" : ""}`}><div className="relative w-full max-w-sm md:w-[46%]"><div className={`absolute -top-6 z-10 left-6 ${isRight ? "md:-left-6 md:right-auto" : "md:-right-6 md:left-auto"}`}><JourneyPin src={place.image} alt={place.title} /></div><div className="glass overflow-hidden rounded-2xl border border-orange-500/20 pt-7"><div className="relative h-60 bg-zinc-950"><Image src={place.image} alt={place.title} fill sizes="(max-width: 768px) 90vw, 420px" className="object-contain p-4" /></div><div className="flex items-center justify-between border-t border-white/10 px-6 py-4"><h3 className="text-base font-semibold tracking-[-0.03em] text-zinc-100">{place.title}</h3><span className="font-mono text-xs text-orange-500">{String(index + 1).padStart(2, "0")}</span></div></div></div></div>;
}

export function PlacesJourney() {
  return <div className="journey-path relative mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:px-16"><div className="journey-line absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block" aria-hidden="true" /><div className="flex flex-col gap-14 md:gap-20">{places.map((place, index) => <JourneyStop key={`${place.image}-${index}`} place={place} index={index} />)}</div></div>;
}
