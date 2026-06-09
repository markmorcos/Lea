import React from "react";
import { Accordion } from "@/components/ds";
import { Section, PageHeader } from "@/components/site/Shared";
import { type Dict } from "@/content/content";

export function FaqPage({ t }: { t: Dict }) {
  return (
    <div>
      <PageHeader eyebrow={t.faq.eyebrow} title={t.faq.title} />
      <Section narrow>
        <Accordion items={t.faq.items} defaultOpen={[0]} />
      </Section>
    </div>
  );
}
