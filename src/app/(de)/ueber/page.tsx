import type { Metadata } from "next";
import { CONTENT } from "@/content/loader";
import { buildMetadata } from "@/lib/seo";
import { AboutPage } from "@/components/pages/AboutPage";

export const metadata: Metadata = buildMetadata("de", "ueber");

export default function Page() {
  return <AboutPage t={CONTENT.de} lang="de" />;
}
