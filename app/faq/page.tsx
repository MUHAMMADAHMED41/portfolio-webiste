import type { Metadata } from "next";
import { PageFaq } from "@/components/PageFaq";
import { PageIntro, PageShell } from "@/components/SiteChrome";
import { githubUrl, linkedinUrl } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "FAQ | Hiring Muhammad Ahmed for AI Automation & Engineering Work",
  description: "Answers to common questions about hiring Muhammad Ahmed: AI automation, n8n workflows, self-hosted LLMs, edge computer vision, security automation, rates, availability, and how to start a project.",
  alternates: { canonical: "/faq" },
  openGraph: { title: "FAQ | Hiring Muhammad Ahmed", description: "Common questions about hiring Muhammad Ahmed for AI automation, n8n, edge computer vision, and security automation projects.", url: "https://muhammadahmedme.live/faq", type: "website" },
};

export default function FaqPage() {
  return (
    <PageShell>
      <PageIntro kicker="FAQ" title="Questions, answered." description="What people ask before hiring Muhammad Ahmed for AI automation, edge computer vision, and engineering work." />
      <PageFaq
        heading="Everything you need before reaching out"
        items={[
          { q: "Who is Muhammad Ahmed?", a: "Muhammad Ahmed is a Computer Engineer and AI Automation Specialist from the Institute of Space Technology, Islamabad, Pakistan. He builds multi-agent AI systems, self-hosted LLM pipelines, n8n automation, edge computer vision, and security automation that run reliably in production, not just as demos.", ctaHref: "/experience", ctaLabel: "See his background" },
          { q: "What services does Muhammad Ahmed offer?", a: "AI automation and workflow engineering (n8n, Python), self-hosted and local LLM deployments (Ollama), edge computer vision systems, security automation and SIEM/XDR tooling, CRM and lead-routing integrations (GoHighLevel), and full web platforms built with Next.js.", ctaHref: "/projects", ctaLabel: "Browse project case studies" },
          { q: "Does Muhammad Ahmed work with international clients?", a: "Yes. He has delivered projects for clients across Italy, Spain, and the UAE, including an AI recruitment and CV-screening pipeline for Lamprell at ADIPEC, and maintains a 5-star rating across 7+ global engagements. He works remotely and communicates in English.", ctaHref: linkedinUrl, ctaLabel: "Check client history on LinkedIn" },
          { q: "What makes his automation work different from a typical freelancer?", a: "He builds self-hosted, privacy-first systems: local LLMs via Ollama instead of pay-per-call APIs where it matters, Dockerized deployments, and production infrastructure (AWS/Azure, PostgreSQL/pgvector, OpenSearch) rather than no-code-only solutions.", ctaHref: githubUrl, ctaLabel: "See the code on GitHub" },
          { q: "Can he build a custom AI agent or chatbot for my business?", a: "Yes. He has built multi-agent AI systems integrating Claude, ChatGPT, and Gemini, including a production-grade AI NPC engine and bilingual WhatsApp automation assistants built on n8n.", ctaHref: "/projects", ctaLabel: "See agent & automation builds" },
          { q: "Does he do edge computer vision or IoT projects?", a: "Yes. Examples include an edge-based 3D gaze-tracking system (OpenCV, MediaPipe, YOLOv8) and an IoT preventive-care ecosystem with ESP32-C3 sensors streaming to Firebase.", ctaHref: "/projects", ctaLabel: "See the edge AI projects" },
          { q: "How do I hire or contact Muhammad Ahmed?", a: "The fastest way is WhatsApp or booking a short call directly from his site. You can also reach him by email or LinkedIn. He typically replies with a concrete next step rather than a generic form response.", ctaHref: "/contact", ctaLabel: "Go to the contact page" },
          { q: "Is Muhammad Ahmed available for new projects?", a: "He is open to new freelance projects, consulting engagements, and collaboration opportunities. Availability is noted on his homepage; book a call to confirm current capacity and timeline for your project.", ctaHref: "/contact", ctaLabel: "Check availability" },
          { q: "What industries has he worked in?", a: "AI content automation for digital marketing agencies, smart home and energy automation, trading and fintech infrastructure, enterprise security operations (SIEM/XDR), B2B AgriTech, oil and gas recruitment (via ADIPEC/Lamprell), and gaming (multi-agent NPC systems).", ctaHref: "/credentials", ctaLabel: "See credentials by domain" },
        ]}
      />
    </PageShell>
  );
}
