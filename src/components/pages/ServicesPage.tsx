import React from "react";
import Link from "next/link";
import { Card, Badge, Button } from "@/components/ds";
import { Icons } from "@/components/icons";
import { Section, PageHeader, SafetyNote } from "@/components/site/Shared";
import { hrefFor, type Dict, type Lang } from "@/content/content";

export function ServicesPage({ t, lang }: { t: Dict; lang: Lang }) {
  const s = t.services;
  const termine = hrefFor(lang, "termine");
  return (
    <div>
      <PageHeader eyebrow={s.eyebrow} title={s.title} />
      <Section>
        <div className="cards-row" style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(s.cards.length, 3)}, 1fr)`, gap: "var(--space-5)", alignItems: "stretch" }}>
          {s.cards.map((c) => (
            <Link key={c.name} href={termine} style={{ textDecoration: "none", display: "flex" }}>
              <Card padding="lg" interactive style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "var(--space-4)" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: 52, height: 52, borderRadius: "var(--radius-md)", background: "var(--sage-100)", color: "var(--sage-700)" }}>
                    {Icons[c.icon]?.({ size: 26 })}
                  </span>
                  <Badge tone="sage">{c.badge}</Badge>
                </div>
                <h3 style={{ fontSize: "var(--text-lg)", marginBottom: 8 }}>{c.name}</h3>
                <p style={{ margin: 0, color: "var(--text-muted)", flex: 1 }}>{c.body}</p>
              </Card>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: "var(--space-7)" }}>
          <SafetyNote>{s.disclaimer}</SafetyNote>
        </div>
        <div style={{ marginTop: "var(--space-6)" }}>
          <Button variant="primary" size="lg" href={termine} iconRight={Icons.arrowRight({ size: 18 })}>
            {t.cta}
          </Button>
        </div>
      </Section>
    </div>
  );
}
