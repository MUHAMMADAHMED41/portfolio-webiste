import type { Metadata } from "next";
import Image from "next/image";
import { PageFaq } from "@/components/PageFaq";
import { PageIntro, PageShell } from "@/components/SiteChrome";
import { certificates } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Certificates | Muhammad Ahmed",
  description: "Verified certificate archive for Muhammad Ahmed covering AI, machine learning, cybersecurity, and professional development from Anthropic, NASA, IEEE, NAVTTC, and more.",
  alternates: { canonical: "/certificates" },
};

export default function CertificatesPage() {
  return <PageShell><PageIntro kicker="04 / Certificate vault" title="The long-form evidence." description="A protected visual archive of Muhammad Ahmed's uploaded certificate portfolio." /><section className="overflow-hidden border-y border-white/10 bg-white/[0.02] py-5"><div className="marquee-track flex gap-3">{[...certificates, ...certificates].map(([title], index) => <span key={`${title}-${index}`} className="whitespace-nowrap rounded-full border border-orange-500/20 px-4 py-2 font-mono text-[11px] text-orange-200/80">✦ {title}</span>)}</div></section><section className="mx-auto grid max-w-7xl gap-6 px-6 py-20 sm:px-10 md:grid-cols-2 lg:grid-cols-3 lg:px-16">{certificates.map(([title, filename, issuer, previewKey], index) => <article key={filename} className="glass group overflow-hidden rounded-2xl select-none"><div className="relative aspect-[1.2] overflow-hidden border-b border-white/10 bg-zinc-950"><Image src={`/certificate-previews/certificate-by-name-${previewKey}.jpg`} alt={`${title} certificate preview`} fill sizes="(max-width: 768px) 100vw, 33vw" draggable={false} className="pointer-events-none object-cover object-top opacity-85 transition duration-500 group-hover:scale-105 group-hover:opacity-100" /></div><div className="p-7"><div className="flex items-start justify-between"><span className="font-mono text-xs text-orange-500">{String(index + 1).padStart(2, "0")}</span><span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-zinc-500">Verified</span></div><h2 className="mt-6 text-xl font-semibold leading-tight tracking-[-0.04em] text-zinc-100 group-hover:text-orange-300">{title}</h2><p className="mt-3 text-sm text-zinc-500">{issuer}</p></div></article>)}</section><PageFaq
    heading="Verifying skills before hiring for a remote project"
    items={[
      { q: "Can clients verify these certificates before hiring for a remote project?", a: "Yes. Each certificate is uploaded as a reviewable PDF with the issuing organization named, including Anthropic, NASA, IEEE, NAVTTC, and Dubai Future Foundation, so clients can confirm claims before committing to a project." },
      { q: "Do these certificates cover skills relevant to AI automation and web development?", a: "Yes. They span machine learning and deep learning, AI integration and automation, and recognized training that directly supports the automation and engineering work delivered on client projects." },
    ]}
  /></PageShell>;
}
