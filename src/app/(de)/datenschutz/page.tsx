import type { Metadata } from "next";
import { CONTENT } from "@/content/loader";
import { buildMetadata } from "@/lib/seo";
import { DatenschutzPage } from "@/components/pages/LegalPages";

export const metadata: Metadata = buildMetadata("de", "datenschutz");

export default function Page() {
  return <DatenschutzPage t={CONTENT.de} />;
}
