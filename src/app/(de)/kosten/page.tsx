import type { Metadata } from "next";
import { SITE } from "@/content/content";
import { buildMetadata } from "@/lib/seo";
import { FeesPage } from "@/components/pages/FeesPage";

export const metadata: Metadata = buildMetadata("de", "kosten");

export default function Page() {
  return <FeesPage t={SITE.de} lang="de" />;
}
