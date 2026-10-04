import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Ahmed | Computer Engineer & Lead AI Architect",
  description: "Portfolio of Muhammad Ahmed, a Computer Engineer and Lead AI Architect building multi-agent AI systems, edge computer vision, and production automation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return <html lang="en" className="h-full antialiased"><body className="min-h-full">{children}</body></html>;
}
