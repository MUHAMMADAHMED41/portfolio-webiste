type FaqItem = { q: string; a: string };

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
    <section className="mx-auto max-w-5xl px-6 pb-24 sm:px-10 lg:px-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="border-t border-white/10 pt-12">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">FAQ</p>
        <h2 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-zinc-100 sm:text-3xl">{heading}</h2>
        <div className="mt-8 space-y-3">
          {items.map((item) => (
            <details key={item.q} className="group glass rounded-2xl p-6 open:border-orange-500/30">
              <summary className="cursor-pointer list-none text-base font-semibold tracking-[-0.01em] text-zinc-100 group-open:text-orange-300">{item.q}</summary>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
