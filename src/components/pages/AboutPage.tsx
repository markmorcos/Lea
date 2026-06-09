import React from "react";
import { Card, Button } from "@/components/ds";
import { Icons } from "@/components/icons";
import { Section, PageHeader, Portrait } from "@/components/site/Shared";
import { hrefFor, type Dict, type Lang } from "@/content/content";

export function AboutPage({ t, lang }: { t: Dict; lang: Lang }) {
  const a = t.about;
  return (
    <div>
      <PageHeader eyebrow={a.eyebrow} title={a.title} />
      <Section>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: "var(--space-8)", alignItems: "start" }}>
          <div className="about-portrait" style={{ position: "sticky", top: 90 }}>
            <Portrait ratio="3 / 4" />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginTop: "var(--space-4)" }}>
              {a.values.map((v) => (
                <span
                  key={v.label}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 7,
                    padding: "7px 13px",
                    borderRadius: "var(--radius-pill)",
                    background: "var(--sage-50)",
                    border: "1px solid var(--sage-100)",
                    color: "var(--sage-800)",
                    fontFamily: "var(--font-ui)",
                    fontSize: "var(--text-sm)",
                    fontWeight: 600,
                  }}
                >
                  {Icons[v.icon]?.({ size: 16 })}
                  {v.label}
                </span>
              ))}
            </div>
          </div>
          <div>
            {a.bio.map((p, i) => (
              <p key={i} style={{ fontSize: "var(--text-md)", color: "var(--text-body)", marginTop: i === 0 ? 0 : undefined }}>
                {p}
              </p>
            ))}
            <Card padding="lg" style={{ marginTop: "var(--space-6)" }}>
              <h2 style={{ fontSize: "var(--text-lg)", marginBottom: "var(--space-4)" }}>{a.qualTitle}</h2>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {a.quals.map((q) => (
                  <li key={q} style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: "var(--text-base)", color: "var(--text-body)" }}>
                    <span style={{ color: "var(--sage-600)", flex: "0 0 auto", marginTop: 2 }}>{Icons.check({ size: 18 })}</span>
                    {q}
                  </li>
                ))}
              </ul>
            </Card>
            <div style={{ marginTop: "var(--space-6)" }}>
              <Button variant="primary" size="lg" href={hrefFor(lang, "termine")} iconRight={Icons.arrowRight({ size: 18 })}>
                {t.cta}
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
