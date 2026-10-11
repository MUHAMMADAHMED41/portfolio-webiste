type FaqItem = { q: string; a: string; ctaHref?: string; ctaLabel?: string };

export function PageFaq({ heading, items }: { heading: string; items: FaqItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section className="page-faq-section mx-auto max-w-5xl px-6 pb-24 sm:px-10 lg:px-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="border-t border-white/10 pt-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">FAQ</p>
        <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-3xl">{heading}</h2>
        <div className="mt-8 space-y-3">
          {items.map((item) => (
            <details key={item.q} className="group glass rounded-2xl open:border-orange-500/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-base font-semibold tracking-[-0.01em] text-zinc-100 group-open:text-orange-300">
                {item.q}
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 fill-none stroke-current stroke-2 transition-transform duration-200 group-open:rotate-180"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-sm leading-7 text-zinc-400">{item.a}</p>
                {item.ctaHref ? <a href={item.ctaHref} target={item.ctaHref.startsWith("http") ? "_blank" : undefined} rel={item.ctaHref.startsWith("http") ? "noreferrer" : undefined} className="mt-4 inline-block text-sm font-medium text-orange-400 hover:text-orange-300">{item.ctaLabel ?? "Learn more"} ↗</a> : null}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
