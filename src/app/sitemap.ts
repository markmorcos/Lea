import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { SLUGS, LANGS, hrefFor } from "@/content/content";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = Object.keys(SLUGS);
  const entries: MetadataRoute.Sitemap = [];
  for (const routeId of routes) {
    for (const lang of LANGS) {
      entries.push({
        url: `${SITE_URL}${hrefFor(lang, routeId)}`,
        changeFrequency: "monthly",
        priority: routeId === "home" ? 1 : 0.7,
        alternates: {
          languages: {
            de: `${SITE_URL}${hrefFor("de", routeId)}`,
            en: `${SITE_URL}${hrefFor("en", routeId)}`,
          },
        },
      });
    }
  }
  return entries;
}
