import type { Metadata } from "next";
import { PageFaq } from "@/components/PageFaq";
import { PageIntro, PageShell } from "@/components/SiteChrome";
import { experience } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Experience | Muhammad Ahmed",
  description: "Engineering, consulting, and founder experience across AI automation, infrastructure, and youth-advocacy work, including roles at Dialer Portal LLC and LuaM Studio.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return <PageShell><PageIntro kicker="01 / Field notes" title="Experience that compounds." description="A timeline of engineering, consulting, founder, and youth-advocacy work across AI, automation, infrastructure, and practical career acceleration." /><section className="mx-auto max-w-5xl px-6 pb-32 sm:px-10">{experience.map((item, index) => <article key={item.company + item.period} className="group grid gap-6 border-t border-white/10 py-10 md:grid-cols-[180px_1fr]"><div><p className="font-mono text-xs text-orange-500">0{index + 1}</p><p className="mt-3 text-xs leading-5 text-zinc-500">{item.period}</p></div><div><h2 className="text-2xl font-semibold tracking-[-0.04em] text-zinc-100">{item.role}</h2><p className="mt-2 text-sm text-orange-400">{item.company} <span className="text-zinc-600">/</span> {item.location}</p><ul className="mt-7 space-y-4 text-sm leading-7 text-zinc-400">{item.details.map((detail) => <li key={detail} className="border-l border-orange-500/40 pl-5">{detail}</li>)}</ul></div></article>)}</section><PageFaq
    heading="Remote work history and freelance engagements"
    items={[
      { q: "Has Muhammad Ahmed worked remote freelance jobs before?", a: "Yes. He has worked remotely as Lead AI & Automation Engineer at Dialer Portal LLC since 2024, and as an independent consultant on freelance remote projects across Italy, Spain, and the UAE since 2021." },
      { q: "What kind of AI automation work does his experience cover?", a: "Multi-tenant VoIP platform architecture, n8n and Python automation workflows with self-hosted LLMs, AI recruitment and CV-screening pipelines, and a production-grade multi-agent AI NPC engine as Founder of LuaM Studio." },
      { q: "Is he experienced managing full project lifecycles independently?", a: "Yes. As Founder & CEO of LuaM Studio and through 7+ independent consultancy engagements, he has owned scoping, delivery, and client communication end to end, maintaining a 5-star rating across those projects." },
    ]}
  /></PageShell>;
}
