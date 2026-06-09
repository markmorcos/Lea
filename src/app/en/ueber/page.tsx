import type { Metadata } from "next";
import { SITE } from "@/content/content";
import { buildMetadata } from "@/lib/seo";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = buildMetadata("en", "ueber");

export default function Page() {
  return <AboutPage t={SITE.en} lang="en" />;
}
