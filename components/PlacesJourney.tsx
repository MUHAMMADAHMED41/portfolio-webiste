"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { places } from "@/lib/portfolio-data";

type Point = { x: number; y: number };

function smoothPath(points: Point[]) {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y} `;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;
    const cp1x = p1.x + (p2.x - p0.x) / 6;
    const cp1y = p1.y + (p2.y - p0.y) / 6;
    const cp2x = p2.x - (p3.x - p1.x) / 6;
    const cp2y = p2.y - (p3.y - p1.y) / 6;
    d += `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y} `;
  }
  return d;
}

function JourneyPin({ src, alt, pinRef }: { src: string; alt: string; pinRef: (el: HTMLDivElement | null) => void }) {
  return <div ref={pinRef} className="relative h-14 w-14 -rotate-45 overflow-hidden rounded-[50%_50%_50%_0] border-[3px] border-orange-400 bg-zinc-900 shadow-[0_0_18px_rgba(255,69,0,0.35)]"><div className="absolute inset-[-30%] rotate-45"><Image src={src} alt={alt} fill draggable={false} className="pointer-events-none object-cover" /></div></div>;
}

function JourneyStop({ place, index, registerPin }: { place: { title: string; image: string }; index: number; registerPin: (index: number, el: HTMLDivElement | null) => void }) {
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
  return <div ref={ref} className={`journey-stop flex ${isRight ? "md:justify-end" : "md:justify-start"} justify-center ${visible ? "is-visible" : ""}`}><div className="relative w-full max-w-sm md:w-[46%]"><div className={`absolute -top-6 z-10 left-6 ${isRight ? "md:-left-6 md:right-auto" : "md:-right-6 md:left-auto"}`}><JourneyPin src={place.image} alt={place.title} pinRef={(el) => registerPin(index, el)} /></div><div className="glass overflow-hidden rounded-2xl border border-orange-500/20 pt-7"><div className="relative h-60 bg-zinc-950"><Image src={place.image} alt={place.title} fill sizes="(max-width: 768px) 90vw, 420px" className="object-contain p-4" /></div><div className="flex items-center justify-between border-t border-white/10 px-6 py-4"><h3 className="text-base font-semibold tracking-[-0.03em] text-zinc-100">{place.title}</h3><span className="font-mono text-xs text-orange-500">{String(index + 1).padStart(2, "0")}</span></div></div></div></div>;
}

export function PlacesJourney() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinEls = useRef<(HTMLDivElement | null)[]>([]);
  const [path, setPath] = useState<{ width: number; height: number; d: string } | null>(null);

  const registerPin = useCallback((index: number, el: HTMLDivElement | null) => {
    pinEls.current[index] = el;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const containerRect = container.getBoundingClientRect();
      const points: Point[] = pinEls.current
        .map((el) => {
          if (!el) return null;
          const r = el.getBoundingClientRect();
          return { x: r.left + r.width / 2 - containerRect.left, y: r.top + r.height / 2 - containerRect.top };
        })
        .filter((p): p is Point => p !== null);
      if (points.length < 2) return;
      setPath({ width: containerRect.width, height: container.scrollHeight, d: smoothPath(points) });
    };

    measure();
    const frame = requestAnimationFrame(measure);
    const resizeObserver = new ResizeObserver(() => measure());
    resizeObserver.observe(container);
    window.addEventListener("resize", measure);
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return <div ref={containerRef} className="journey-path relative mx-auto max-w-5xl px-6 py-16 sm:px-10 lg:px-16">{path && <svg className="pointer-events-none absolute left-0 top-0" width={path.width} height={path.height} viewBox={`0 0 ${path.width} ${path.height}`} fill="none" aria-hidden="true"><defs><linearGradient id="journey-route" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#ff6a2a" stopOpacity="0.85" /><stop offset="100%" stopColor="#ff4500" stopOpacity="0.55" /></linearGradient></defs><path d={path.d} stroke="url(#journey-route)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>}<div className="flex flex-col gap-14 md:gap-20">{places.map((place, index) => <JourneyStop key={`${place.image}-${index}`} place={place} index={index} registerPin={registerPin} />)}</div></div>;
}
