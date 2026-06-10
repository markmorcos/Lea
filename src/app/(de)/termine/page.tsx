import type { Metadata } from "next";
import { CONTENT } from "@/content/loader";
import { buildMetadata } from "@/lib/seo";
import { BookingPage } from "@/components/pages/BookingPage";

export const metadata: Metadata = buildMetadata("de", "termine");

export default function Page() {
  return <BookingPage t={CONTENT.de} />;
}
