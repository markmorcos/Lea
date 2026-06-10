import type { Metadata } from "next";
import { CONTENT } from "@/content/loader";
import { buildMetadata } from "@/lib/seo";
import { ContactPage } from "@/components/pages/ContactPage";

export const metadata: Metadata = buildMetadata("en", "kontakt");

export default function Page() {
  return <ContactPage t={CONTENT.en} />;
}
