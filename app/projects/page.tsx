import type { Metadata } from "next";
import Image from "next/image";
import { PageFaq } from "@/components/PageFaq";
import { PageIntro, PageShell } from "@/components/SiteChrome";
import { allProjects } from "@/lib/portfolio-data";

const freelanceProjects = allProjects;

export const metadata: Metadata = {
  title: "Projects | Muhammad Ahmed",
  description: "AI automation, edge computer vision, security operations, and performance web projects built by Muhammad Ahmed, including MediTwin, Distraction-Lock AI, and TradeRiser.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return <PageShell><PageIntro kicker="02 / Selected work" title="Ideas made tangible." description="A mix of AI automation, edge computing, security operations, performance web, and practical business systems. Each case study is framed around what changed for the client." /><section className="mx-auto grid max-w-7xl gap-5 px-6 pb-32 sm:px-10 lg:px-16">{freelanceProjects.map((project, index) => <article key={project.title} className="glass group overflow-hidden rounded-2xl transition hover:-translate-y-1 hover:border-orange-500/50"><div className="grid lg:grid-cols-[0.9fr_1.1fr]"><div className="relative min-h-64 overflow-hidden bg-zinc-950 lg:min-h-full">{project.image ? <Image src={project.image} alt={`${project.title} project screenshot`} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover opacity-80 transition duration-500 group-hover:scale-105 group-hover:opacity-100" /> : <div className="grid-lines absolute inset-0" />}<span className="absolute left-5 top-5 rounded-full border border-orange-400/30 bg-zinc-950/70 px-3 py-1 font-mono text-[10px] text-orange-300">{String(index + 1).padStart(2, "0")}</span></div><div className="p-7 sm:p-10"><p className="font-mono text-xs uppercase tracking-[0.18em] text-orange-500">{project.category}</p><h2 className="mt-5 text-3xl font-semibold tracking-[-0.06em] text-zinc-100 group-hover:text-orange-300">{project.title}</h2><p className="mt-5 text-sm leading-7 text-zinc-400">{project.description}</p><ul className="mt-7 space-y-3 text-sm leading-6 text-zinc-400">{project.details.map((detail) => <li key={detail} className="border-l border-orange-500/40 pl-4">{detail}</li>)}</ul><div className="mt-8 border-t border-white/10 pt-5"><p className="font-mono text-[10px] uppercase tracking-[0.16em] text-zinc-600">Outcome</p><p className="mt-2 text-sm text-orange-100/80">{project.outcome}</p></div></div></div></article>)}</section><PageFaq
    heading="Website development and AI automation project work"
    items={[
      { q: "What kind of website development projects has Muhammad Ahmed built?", a: "Performance-focused marketing sites, CRM-integrated business platforms like CowCulate, and custom web apps with Next.js, static export deployment, SEO, and lead-capture automation." },
      { q: "What AI automation projects are included in his portfolio?", a: "A Social Media Content Publishing Factory automating 80% of a marketing agency's workflow, an edge-AI smart home automation framework, an AI-powered log analyzer for security operations, and a semantic-search trading platform called TradeRiser." },
      { q: "Can he build a similar automation or website for my business?", a: "Yes. Each project above was scoped for a real client problem, from lead-generation leakage to manual content workflows, and the same approach can be adapted to your business's automation or web platform needs." },
    ]}
  /></PageShell>;
}
