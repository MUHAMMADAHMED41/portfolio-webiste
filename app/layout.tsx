import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Ahmed | Computer Engineer & AI Automation Specialist",
  description: "Muhammad Ahmed is a Computer Engineer and AI Automation Specialist from the Institute of Space Technology, building multi-agent AI systems, edge computer vision, security automation, and production infrastructure.",
  keywords: ["Muhammad Ahmed", "AI Automation Specialist", "Computer Engineer Pakistan", "Institute of Space Technology", "edge computer vision", "n8n automation", "multi-agent AI"],
  metadataBase: new URL("https://muhammadahmedme.live"),
  alternates: { canonical: "/" },
  openGraph: { title: "Muhammad Ahmed | Computer Engineer & AI Automation Specialist", description: "Computer Engineer and AI Automation Specialist building practical AI, edge, security, and automation systems.", url: "https://muhammadahmedme.live", siteName: "Muhammad Ahmed", type: "website", images: [{ url: "/pfp.jpeg", width: 460, height: 460, alt: "Muhammad Ahmed" }] },
  twitter: { card: "summary_large_image", title: "Muhammad Ahmed | Computer Engineer & AI Automation Specialist", description: "Computer Engineer and AI Automation Specialist building practical AI, edge, security, and automation systems.", images: ["/pfp.jpeg"] },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhammad Ahmed",
  jobTitle: "Computer Engineer & AI Automation Specialist",
  url: "https://muhammadahmedme.live",
  image: "https://muhammadahmedme.live/pfp.jpeg",
  sameAs: [
    "https://github.com/muhammadahmed41",
    "https://www.linkedin.com/in/muhammadahmed41",
    "https://me.developers.google.com/u/muhammadahmed41",
  ],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Institute of Space Technology" },
  address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
  knowsAbout: ["AI automation", "n8n workflows", "self-hosted LLMs", "edge computer vision", "security automation", "multi-agent AI systems"],
  makesOffer: {
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: "AI automation & engineering consultancy", description: "Multi-agent AI systems, self-hosted LLM pipelines, edge computer vision, and security automation." },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className="h-full antialiased"><body className="min-h-full">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    {children}
  </body></html>;
}
