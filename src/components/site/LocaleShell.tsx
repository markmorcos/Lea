import React from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { HtmlLang } from "./HtmlLang";
import type { Lang } from "@/content/content";

/** Page chrome for one locale: header + main + footer, and the <html lang> sync. */
export function LocaleShell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <>
      <HtmlLang lang={lang} />
      <SiteHeader lang={lang} />
      <main>{children}</main>
      <SiteFooter lang={lang} />
    </>
  );
}
