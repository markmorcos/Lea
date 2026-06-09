import React from "react";
import { Card, Button } from "@/components/ds";
import { Icons } from "@/components/icons";
import { Section, PageHeader, Steps } from "@/components/site/Shared";
import { hrefFor, type Dict, type Lang } from "@/content/content";

export function FeesPage({ t, lang }: { t: Dict; lang: Lang }) {
  const f = t.fees;
  const termine = hrefFor(lang, "termine");
  return (
    <div>
      <PageHeader eyebrow={f.eyebrow} title={f.title} />
      <Section>
        <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-6)" }}>{f.ablaufTitle}</h2>
        <Steps steps={f.steps} />
      </Section>
      <Section bg="var(--surface-sunken)">
        <div className="fees-grid" style={{ display: "grid", gridTemplateColumns: "1.3fr 0.7fr", gap: "var(--space-6)", alignItems: "start" }}>
          <div>
            <h2 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--space-4)" }}>{f.costTitle}</h2>
            <p style={{ fontSize: "var(--text-md)", color: "var(--text-body)", maxWidth: "60ch" }}>{f.cost}</p>
            <Card padding="lg" style={{ marginTop: "var(--space-5)", background: "var(--sage-50)", border: "1px solid var(--sage-100)" }}>
              <h3 style={{ fontSize: "var(--text-base)", marginBottom: 6, color: "var(--sage-800)" }}>{f.insuranceTitle}</h3>
              <p style={{ margin: 0, color: "var(--slate-700)", fontSize: "var(--text-sm)" }}>{f.insurance}</p>
            </Card>
          </div>
          <Card padding="lg" elevation="raised" style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-3xl)", color: "var(--text-strong)", fontWeight: 600, letterSpacing: "-0.02em" }}>{f.priceFigure}</div>
            <div style={{ color: "var(--text-muted)", fontSize: "var(--text-sm)", marginTop: 4, marginBottom: "var(--space-5)" }}>· {f.priceUnit}</div>
            <Button variant="primary" fullWidth href={termine} iconRight={Icons.arrowRight({ size: 18 })}>
              {t.cta}
            </Button>
          </Card>
        </div>
      </Section>
    </div>
  );
}
