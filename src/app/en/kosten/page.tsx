import type { Metadata } from "next";
import { CONTENT } from "@/content/loader";
import { buildMetadata } from "@/lib/seo";
import { FeesPage } from "@/components/pages/FeesPage";

export const metadata: Metadata = buildMetadata("en", "kosten");

export default function Page() {
  return <FeesPage t={CONTENT.en} lang="en" />;
}
