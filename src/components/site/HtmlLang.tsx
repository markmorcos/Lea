"use client";

import { useEffect } from "react";
import type { Lang } from "@/content/content";

/** Sets <html lang> to the active language on the client (per-route correctness). */
export function HtmlLang({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
