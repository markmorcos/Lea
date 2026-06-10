import type { Metadata } from "next";
import { hrefFor, type Lang } from "@/content/content";
import { CONTENT } from "@/content/loader";

// Domain is TBD — used only as a base for absolute/alternate URLs.
export const SITE_URL = "https://pfaffeneder-psychologische-beratung.de";

function titleFor(lang: Lang, routeId: string): string {
  const t = CONTENT[lang];
  switch (routeId) {
    case "home":
      return lang === "de" ? "Psychologische Beratung & Coaching · Berlin & online" : "Psychological Counselling & Coaching · Berlin & online";
    case "ueber":
      return t.about.title;
    case "angebot":
      return t.services.title;
    case "themen":
      return t.topics.title;
    case "kosten":
      return t.fees.title;
    case "termine":
      return t.booking.title;
    case "kontakt":
      return t.contact.title;
    case "faq":
      return t.faq.title;
    case "impressum":
      return t.impressum.title;
    case "datenschutz":
      return t.datenschutz.title;
    default:
      return "Lea Zoe Pfaffeneder";
  }
}

export function buildMetadata(lang: Lang, routeId: string): Metadata {
  const t = CONTENT[lang];
  const title = titleFor(lang, routeId);
  const description = t.hero.lead;
  return {
    title,
    description,
    alternates: {
      canonical: hrefFor(lang, routeId),
      languages: {
        de: hrefFor("de", routeId),
        en: hrefFor("en", routeId),
        "x-default": hrefFor("de", routeId),
      },
    },
    openGraph: {
      title: `${title} — Lea Zoe Pfaffeneder`,
      description,
      locale: lang === "de" ? "de_DE" : "en_US",
      type: "website",
      url: hrefFor(lang, routeId),
    },
  };
}
