import type { Metadata } from "next";
import { PageIntro } from "@/components/SiteChrome";
import { calendlyUrl, whatsappUrl } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "FAQ | Hiring Muhammad Ahmed for AI Automation & Engineering Work",
  description: "Answers to common questions about hiring Muhammad Ahmed: AI automation, n8n workflows, self-hosted LLMs, edge computer vision, security automation, rates, availability, and how to start a project.",
  alternates: { canonical: "/faq" },
  openGraph: { title: "FAQ | Hiring Muhammad Ahmed", description: "Common questions about hiring Muhammad Ahmed for AI automation, n8n, edge computer vision, and security automation projects.", url: "https://muhammadahmedme.live/faq", type: "website" },
};

const faqs = [
  {
    q: "Who is Muhammad Ahmed?",
    a: "Muhammad Ahmed is a Computer Engineer and AI Automation Specialist from the Institute of Space Technology, Islamabad, Pakistan. He builds multi-agent AI systems, self-hosted LLM pipelines, n8n automation, edge computer vision, and security automation that run reliably in production, not just as demos.",
  },
  {
    q: "What services does Muhammad Ahmed offer?",
    a: "AI automation and workflow engineering (n8n, Python), self-hosted and local LLM deployments (Ollama), edge computer vision systems, security automation and SIEM/XDR tooling, CRM and lead-routing integrations (GoHighLevel), and full web platforms built with Next.js. He also offers independent consultancy for teams that need a production-grade AI system rather than a prototype.",
  },
  {
    q: "Does Muhammad Ahmed work with international clients?",
    a: "Yes. He has delivered projects for clients across Italy, Spain, and the UAE, including an AI recruitment and CV-screening pipeline for Lamprell at ADIPEC, and maintains a 5-star rating across 7+ global engagements. He works remotely and communicates in English.",
  },
  {
    q: "What makes his automation work different from a typical freelancer?",
    a: "He builds self-hosted, privacy-first systems: local LLMs via Ollama instead of pay-per-call APIs where it matters, Dockerized deployments, and production infrastructure (AWS/Azure, PostgreSQL/pgvector, OpenSearch) rather than no-code-only solutions. Systems are designed to hold up under real load, not just pass a demo.",
  },
  {
    q: "Can he build a custom AI agent or chatbot for my business?",
    a: "Yes. He has built multi-agent AI systems integrating Claude, ChatGPT, and Gemini, including a production-grade AI NPC engine and bilingual WhatsApp automation assistants built on n8n. He can scope a custom agent, automation workflow, or internal tool for your business.",
  },
  {
    q: "Does he do edge computer vision or IoT projects?",
    a: "Yes. Examples include an edge-based 3D gaze-tracking system (OpenCV, MediaPipe, YOLOv8) and an IoT preventive-care ecosystem with ESP32-C3 sensors streaming to Firebase. He designs these to run at the edge without depending on constant cloud connectivity.",
  },
  {
    q: "How do I hire or contact Muhammad Ahmed?",
    a: "The fastest way is WhatsApp or booking a short call directly from his site. You can also reach him by email or LinkedIn. He typically replies with a concrete next step rather than a generic form response.",
  },
  {
    q: "Is Muhammad Ahmed available for new projects?",
    a: "He is open to new freelance projects, consulting engagements, and collaboration opportunities. Availability is noted on his homepage; book a call to confirm current capacity and timeline for your project.",
  },
  {
    q: "What industries has he worked in?",
    a: "AI content automation for digital marketing agencies, smart home and energy automation, trading and fintech infrastructure, enterprise security operations (SIEM/XDR), B2B AgriTech, oil and gas recruitment (via ADIPEC/Lamprell), and gaming (multi-agent NPC systems).",
  },
];

export default function FaqPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageIntro kicker="FAQ" title="Questions, answered." description="What people ask before hiring Muhammad Ahmed for AI automation, edge computer vision, and engineering work." />
      <section className="mx-auto max-w-4xl px-6 pb-28 sm:px-10 lg:px-16">
        <div className="space-y-4">
          {faqs.map((item) => (
            <details key={item.q} className="group glass rounded-2xl p-6 open:border-orange-500/30" open>
              <summary className="cursor-pointer list-none text-lg font-semibold tracking-[-0.02em] text-zinc-100 group-open:text-orange-300">{item.q}</summary>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{item.a}</p>
            </details>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3 border-t border-white/10 pt-8">
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-black hover:bg-orange-400">Message on WhatsApp ↗</a>
          <a href={calendlyUrl} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-5 py-3 text-sm text-zinc-200 hover:border-orange-500/60">Book a call ↗</a>
        </div>
      </section>
    </>
  );
}
