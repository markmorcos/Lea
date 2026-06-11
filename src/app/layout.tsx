import type { Metadata } from "next";
import { SITE_URL } from "@/lib/seo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Lea Zoe Pfaffeneder — Psychologische Beratung & Coaching",
    template: "%s — Lea Zoe Pfaffeneder",
  },
  description: "Psychologische Beratung & Coaching, online und deutschlandweit — ressourcenorientiert, wertschätzend, auf Augenhöhe.",
  icons: { icon: "/favicon.svg" },
};

// Site-wide structured data — helps search engines understand the practice.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Lea Zoe Pfaffeneder — Psychologische Beratung & Coaching",
  description: "Psychologische Beratung & Coaching, online und deutschlandweit.",
  url: SITE_URL,
  image: `${SITE_URL}/lea-portrait.jpg`,
  telephone: "+4915567138410",
  email: "kontakt@pfaffeneder-psychologische-beratung.de",
  areaServed: { "@type": "Country", name: "Deutschland" },
  availableLanguage: ["de", "en"],
  priceRange: "€45",
  serviceType: "Psychologische Beratung",
  provider: {
    "@type": "Person",
    name: "Lea Zoe Pfaffeneder",
    jobTitle: "M.Sc. Psychologin",
    url: SITE_URL,
    knowsLanguage: ["de", "en"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
