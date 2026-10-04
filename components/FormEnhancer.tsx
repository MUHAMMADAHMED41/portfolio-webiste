"use client";

import { useEffect } from "react";
import { whatsappUrl } from "@/lib/portfolio-data";

export function FormEnhancer() {
  useEffect(() => {
    const forms = Array.from(document.querySelectorAll<HTMLFormElement>("form"));
    forms.forEach((form) => {
      if (form.elements.namedItem("mobile")) return;
      const label = document.createElement("label");
      label.className = "mt-6 block text-xs text-zinc-500";
      label.textContent = "Mobile number with country code";
      const input = document.createElement("input");
      input.required = true;
      input.name = "mobile";
      input.type = "tel";
      input.pattern = "^\\+?[0-9][0-9\\s().-]{7,}$";
      input.placeholder = "+92 327 0177676";
      input.className = "mt-2 w-full border-b border-white/15 bg-transparent py-3 text-sm text-white outline-none focus:border-orange-500";
      label.appendChild(input);
      const message = form.querySelector("textarea")?.parentElement;
      message?.before(label);
    });
    const handlers = forms.map((form) => {
      const handler = (event: SubmitEvent) => {
        event.preventDefault();
        const data = new FormData(form);
        const message = `Hello Muhammad, I am ${data.get("name") ?? ""}. I found your portfolio and would like to discuss a project or collaboration.\n\nEmail: ${data.get("email") ?? ""}\nMobile: ${data.get("mobile") ?? "Not provided"}\n\nMessage: ${data.get("message") ?? ""}`;
        window.open(`${whatsappUrl.split("?text=")[0]}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
      };
      form.addEventListener("submit", handler);
      return { form, handler };
    });
    return () => handlers.forEach(({ form, handler }) => form.removeEventListener("submit", handler));
  }, []);
  return null;
}
