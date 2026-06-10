import type { Metadata } from "next";
import { CONTENT } from "@/content/loader";
import { buildMetadata } from "@/lib/seo";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = buildMetadata("en", "ueber");

export default function Page() {
  return <AboutPage t={CONTENT.en} lang="en" />;
}
