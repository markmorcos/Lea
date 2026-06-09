import type { Metadata } from "next";
import { SITE } from "@/content/content";
import { buildMetadata } from "@/lib/seo";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = buildMetadata("en", "kontakt");

export default function Page() {
  return <ContactPage t={SITE.en} />;
}
