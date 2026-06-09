import type { Metadata } from "next";
import { CONTENT } from "@/content/loader";
import { buildMetadata } from "@/lib/seo";
import { ImpressumPage } from "@/components/pages/LegalPages";

export const metadata: Metadata = buildMetadata("en", "impressum");

export default function Page() {
  return <ImpressumPage t={CONTENT.en} />;
}
