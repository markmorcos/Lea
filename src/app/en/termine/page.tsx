import type { Metadata } from "next";
import { CONTENT } from "@/content/loader";
import { buildMetadata } from "@/lib/seo";
import { BookingPage } from "@/components/pages/BookingPage";

export const metadata: Metadata = buildMetadata("en", "termine");

export default function Page() {
  return <BookingPage t={CONTENT.en} />;
}
