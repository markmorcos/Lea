import type { Metadata } from "next";
import { SITE } from "@/content/content";
import { buildMetadata } from "@/lib/seo";
import { FaqPage } from "@/components/pages/FaqPage";

export const metadata: Metadata = buildMetadata("de", "faq");

export default function Page() {
  return <FaqPage t={SITE.de} />;
}
