import type { Metadata } from "next";
import { SITE } from "@/content/content";
import { buildMetadata } from "@/lib/seo";
import { DatenschutzPage } from "@/components/pages/LegalPages";

export const metadata: Metadata = buildMetadata("en", "datenschutz");

export default function Page() {
  return <DatenschutzPage t={SITE.en} />;
}
