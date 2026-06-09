import type { Metadata } from "next";
import { CONTENT } from "@/content/loader";
import { buildMetadata } from "@/lib/seo";
import { HomePage } from "@/components/pages/HomePage";

export const metadata: Metadata = buildMetadata("de", "home");

export default function Page() {
  return <HomePage t={CONTENT.de} lang="de" />;
}
