import React from "react";
import { Section, PageHeader } from "@/components/site/Shared";
import { type Dict } from "@/content/content";

export function ImpressumPage({ t }: { t: Dict }) {
  const im = t.impressum;
  return (
    <div>
      <PageHeader eyebrow={im.eyebrow} title={im.title} />
      <Section narrow>
        <dl style={{ margin: 0, display: "grid", gridTemplateColumns: "minmax(160px, 0.4fr) 1fr", rowGap: 0, columnGap: "var(--space-5)" }}>
          {im.rows.map(([k, v], i) => (
            <React.Fragment key={k}>
              <dt style={{ fontFamily: "var(--font-ui)", fontWeight: 600, color: "var(--text-heading)", fontSize: "var(--text-sm)", padding: "var(--space-4) 0", borderTop: i === 0 ? "none" : "1px solid var(--border-subtle)" }}>{k}</dt>
              <dd style={{ margin: 0, color: "var(--text-body)", fontSize: "var(--text-base)", padding: "var(--space-4) 0", borderTop: i === 0 ? "none" : "1px solid var(--border-subtle)" }}>{v}</dd>
            </React.Fragment>
          ))}
        </dl>
        <p style={{ marginTop: "var(--space-6)", color: "var(--text-muted)", fontSize: "var(--text-sm)" }}>{im.note}</p>
      </Section>
    </div>
  );
}

export function DatenschutzPage({ t }: { t: Dict }) {
  const dz = t.datenschutz;
  return (
    <div>
      <PageHeader eyebrow={dz.eyebrow} title={dz.title} />
      <Section narrow>
        <p className="lead" style={{ marginTop: 0, marginBottom: "var(--space-7)" }}>{dz.intro}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          {dz.sections.map((s) => (
            <div key={s.h}>
              <h2 style={{ fontSize: "var(--text-lg)", marginBottom: 8 }}>{s.h}</h2>
              <p style={{ margin: 0, color: "var(--text-body)", maxWidth: "var(--measure-prose)" }}>{s.b}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
