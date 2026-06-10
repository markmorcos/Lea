import type { Metadata } from "next";
import { CONTENT } from "@/content/loader";
import { buildMetadata } from "@/lib/seo";
import { FaqPage } from "@/components/pages/FaqPage";

export const metadata: Metadata = buildMetadata("en", "faq");

export default function Page() {
  return <FaqPage t={CONTENT.en} />;
}
