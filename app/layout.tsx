import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Ahmed | Computer Engineer & Lead AI Architect",
  description: "Muhammad Ahmed is a Computer Engineer and Lead AI Architect from the Institute of Space Technology, building multi-agent AI systems, edge computer vision, security automation, and production infrastructure.",
  keywords: ["Muhammad Ahmed", "Computer Engineer Pakistan", "AI Architect", "Institute of Space Technology", "AI automation specialist", "edge computer vision", "n8n automation", "multi-agent AI"],
  metadataBase: new URL("https://muhammadahmedme.live"),
  alternates: { canonical: "/" },
  openGraph: { title: "Muhammad Ahmed | Computer Engineer & Lead AI Architect", description: "Computer Engineer and AI Architect building practical AI, edge, security, and automation systems.", url: "https://muhammadahmedme.live", siteName: "Muhammad Ahmed", type: "website", images: [{ url: "/pfp.jpeg", width: 460, height: 460, alt: "Muhammad Ahmed" }] },
  twitter: { card: "summary_large_image", title: "Muhammad Ahmed | Computer Engineer & Lead AI Architect", description: "Computer Engineer and AI Architect building practical AI, edge, security, and automation systems.", images: ["/pfp.jpeg"] },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className="h-full antialiased"><body className="min-h-full">{children}</body></html>;
}
