import type { Metadata } from "next";
import { SITE } from "@/content/content";
import { buildMetadata } from "@/lib/seo";
import { ServicesPage } from "@/components/pages/ServicesPage";

export const metadata: Metadata = buildMetadata("en", "angebot");

export default function Page() {
  return <ServicesPage t={SITE.en} lang="en" />;
}
