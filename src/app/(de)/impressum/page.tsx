import type { Metadata } from "next";
import { SITE } from "@/content/content";
import { buildMetadata } from "@/lib/seo";
import { ImpressumPage } from "@/components/pages/LegalPages";

export const metadata: Metadata = buildMetadata("de", "impressum");

export default function Page() {
  return <ImpressumPage t={SITE.de} />;
}
