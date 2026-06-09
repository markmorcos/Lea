import React from "react";
import { LocaleShell } from "@/components/site/LocaleShell";

export default function DeLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell lang="de">{children}</LocaleShell>;
}
