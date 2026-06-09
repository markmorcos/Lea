import React from "react";
import { Card, Button } from "@/components/ds";
import { Icons } from "@/components/icons";
import { Section, PageHeader, SafetyNote } from "@/components/site/Shared";
import { hrefFor, type Dict, type Lang } from "@/content/content";

export function TopicsPage({ t, lang }: { t: Dict; lang: Lang }) {
  const tp = t.topics;
  return (
    <div>
      <PageHeader eyebrow={tp.eyebrow} title={tp.title} lead={tp.lead} />
      <Section>
        <div className="topics-grid" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--space-4)" }}>
          {tp.items.map((it) => (
            <Card key={it.title} padding="md" style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 46, height: 46, borderRadius: "var(--radius-md)", background: "var(--sage-100)", color: "var(--sage-700)", flex: "0 0 auto" }}>
                {Icons[it.icon]?.({ size: 22 })}
              </span>
              <div>
                <h3 style={{ fontSize: "var(--text-lg)", marginBottom: 4 }}>{it.title}</h3>
                <p style={{ margin: 0, color: "var(--text-muted)", fontSize: "var(--text-sm)" }}>{it.body}</p>
              </div>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: "var(--space-7)" }}>
          <SafetyNote>{tp.safety}</SafetyNote>
        </div>
        <div style={{ marginTop: "var(--space-6)" }}>
          <Button variant="primary" size="lg" href={hrefFor(lang, "termine")} iconRight={Icons.arrowRight({ size: 18 })}>
            {t.cta}
          </Button>
        </div>
      </Section>
    </div>
  );
}
