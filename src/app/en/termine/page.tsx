import type { Metadata } from "next";
import { SITE } from "@/content/content";
import { buildMetadata } from "@/lib/seo";
import { BookingPage } from "@/components/pages/BookingPage";

export const metadata: Metadata = buildMetadata("en", "termine");

export default function Page() {
  return <BookingPage t={SITE.en} />;
}
