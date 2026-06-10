import type { Metadata } from "next";
import { CONTENT } from "@/content/loader";
import { buildMetadata } from "@/lib/seo";
import { TopicsPage } from "@/components/pages/TopicsPage";

export const metadata: Metadata = buildMetadata("en", "themen");

export default function Page() {
  return <TopicsPage t={CONTENT.en} lang="en" />;
}
