import type { Metadata } from "next";
import { SITE } from "@/content/content";
import { buildMetadata } from "@/lib/seo";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = buildMetadata("en", "home");

export default function Page() {
  return <HomePage t={SITE.en} lang="en" />;
}
