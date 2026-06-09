import type { Metadata } from "next";
import { SITE } from "@/content/content";
import { buildMetadata } from "@/lib/seo";
import { TopicsPage } from "@/components/pages/TopicsPage";

export const metadata: Metadata = buildMetadata("en", "themen");

export default function Page() {
  return <TopicsPage t={SITE.en} lang="en" />;
}
