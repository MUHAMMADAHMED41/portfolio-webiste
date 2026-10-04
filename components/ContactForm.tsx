"use client";

import { FormEvent } from "react";
import { whatsappUrl } from "@/lib/portfolio-data";

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const pageclipUrl = process.env.NEXT_PUBLIC_PAGECLIP_URL ?? "https://send.pageclip.co/portfolio-contact";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const mobile = String(data.get("mobile") ?? "");
    const message = String(data.get("message") ?? "");
    const whatsappMessage = `Hello Muhammad, I am ${name}. I found your portfolio and would like to discuss a project or collaboration.\n\nEmail: ${email}\nMobile: ${mobile}\n\nMessage: ${message}`;
    window.open(`${whatsappUrl.split("?text=")[0]}?text=${encodeURIComponent(whatsappMessage)}`, "_blank", "noopener,noreferrer");
  }

  return <form action={pageclipUrl} method="POST" onSubmit={handleSubmit} className={compact ? "border-t border-white/10 pt-8 lg:border-l lg:border-t-0 lg:pl-10" : "rounded-2xl border border-white/10 bg-zinc-900/60 p-7 sm:p-10"}><p className="font-mono text-xs uppercase tracking-[0.2em] text-orange-500">Message form</p><div className="mt-8 grid gap-5 sm:grid-cols-2"><label className="text-xs text-zinc-500">Name<input required name="name" type="text" autoComplete="name" className="mt-2 w-full border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none focus:border-orange-500" placeholder="Your name" /></label><label className="text-xs text-zinc-500">Email<input required name="email" type="email" autoComplete="email" pattern="[^\s@]+@[^\s@]+\.[^\s@]+" className="mt-2 w-full border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none focus:border-orange-500" placeholder="you@company.com" /></label></div><label className="mt-6 block text-xs text-zinc-500">Mobile number with country code<input required name="mobile" type="tel" autoComplete="tel" pattern="^\+?[0-9][0-9\s().-]{7,}$" className="mt-2 w-full border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none focus:border-orange-500" placeholder="+92 327 0177676" /></label><label className="mt-6 block text-xs text-zinc-500">Message<textarea required name="message" rows={compact ? 4 : 6} className="mt-2 w-full resize-none border-b border-white/15 bg-transparent py-3 text-sm leading-6 text-white outline-none focus:border-orange-500" placeholder="Hello Muhammad, I am reaching out from your website about..." /></label><button type="submit" className="mt-7 rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-black hover:bg-orange-400">Send via WhatsApp ↗</button><p className="mt-3 text-[11px] leading-5 text-zinc-600">Your message is also submitted to the website contact inbox.</p></form>;
}
