import React from "react";
import { LocaleShell } from "@/components/site/LocaleShell";

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <LocaleShell lang="en">{children}</LocaleShell>;
}
