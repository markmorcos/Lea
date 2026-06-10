import type { Metadata } from "next";
import { CONTENT } from "@/content/loader";
import { buildMetadata } from "@/lib/seo";
import { ServicesPage } from "@/components/pages/ServicesPage";

export const metadata: Metadata = buildMetadata("de", "angebot");

export default function Page() {
  return <ServicesPage t={CONTENT.de} lang="de" />;
}
