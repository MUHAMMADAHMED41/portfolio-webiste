import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const routes = ["", "experience", "projects", "credentials", "certificates", "places", "contact", "faq"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `https://muhammadahmedme.live/${route}`,
    lastModified,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
