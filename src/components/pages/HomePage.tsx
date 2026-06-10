import React from "react";
import Link from "next/link";
import { Button, Badge, Chip } from "@/components/ds";
import { Icons } from "@/components/icons";
import { Section, Eyebrow, SectionHead, Steps, CtaBand, Portrait } from "@/components/site/Shared";
import { hrefFor, type Dict, type Lang } from "@/content/content";

export function HomePage({ t, lang }: { t: Dict; lang: Lang }) {
  const termine = hrefFor(lang, "termine");
  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(120% 90% at 88% -10%, var(--sage-50) 0%, transparent 55%), radial-gradient(90% 70% at 0% 0%, var(--clay-50) 0%, transparent 45%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: "var(--container)",
            margin: "0 auto",
            padding: "var(--space-11) var(--page-pad) var(--space-10)",
          }}
        >
          <div style={{ maxWidth: "660px" }}>
            <Eyebrow>{t.hero.eyebrow}</Eyebrow>
            <h1 style={{ fontSize: "var(--text-4xl)", maxWidth: "16ch", marginBottom: "var(--space-5)" }}>{t.hero.title}</h1>
            <p className="lead" style={{ fontSize: "var(--text-md)", maxWidth: "46ch", color: "var(--text-body)", marginBottom: "var(--space-6)" }}>{t.hero.lead}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", alignItems: "center" }}>
              <Button variant="primary" size="lg" href={termine} iconRight={Icons.arrowRight({ size: 19 })}>
                {t.cta}
              </Button>
              <Button variant="ghost" size="lg" href={hrefFor(lang, "ueber")}>
                {t.moreAbout}
              </Button>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-2)", marginTop: "var(--space-6)" }}>
              <Badge tone="sage">
                {Icons.mapPin({ size: 14 })}&nbsp;{t.hero.meta[0]}
              </Badge>
              <Badge tone="neutral">
                {Icons.globe({ size: 14 })}&nbsp;{t.hero.meta[1]}
              </Badge>
              <Badge tone="clay">{t.hero.meta[2]}</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Für wen */}
      <Section bg="var(--surface-brand-soft)">
        <div style={{ maxWidth: "62ch", margin: "0 auto", textAlign: "center" }}>
          <Eyebrow>{t.forWho.eyebrow}</Eyebrow>
          <p style={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-relaxed)", color: "var(--text-heading)", fontFamily: "var(--font-serif)", margin: 0 }}>{t.forWho.body}</p>
        </div>
      </Section>

      {/* About teaser */}
      <Section>
        <div className="about-grid" style={{ display: "grid", gridTemplateColumns: "0.7fr 1.3fr", gap: "var(--space-8)", alignItems: "center" }}>
          <div className="about-portrait">
            <Portrait ratio="1 / 1" tint="clay" src={t.media?.portraitUrl || undefined} />
          </div>
          <div>
            <Eyebrow>{t.aboutTeaser.eyebrow}</Eyebrow>
            <p style={{ fontSize: "var(--text-xl)", lineHeight: "var(--leading-relaxed)", color: "var(--text-heading)", marginBottom: "var(--space-5)", maxWidth: "34ch" }}>{t.aboutTeaser.body}</p>
            <Link href={hrefFor(lang, "ueber")} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-ui)", fontWeight: 600, color: "var(--text-link)", textDecoration: "none" }}>
              {t.aboutTeaser.link} {Icons.arrowRight({ size: 17 })}
            </Link>
          </div>
        </div>
      </Section>

      {/* Topics chips */}
      <Section bg="var(--surface-sunken)">
        <SectionHead eyebrow={t.homeTopics.eyebrow} title={t.homeTopics.title} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-3)", marginBottom: "var(--space-6)" }}>
          {t.homeTopics.chips.map((c) => (
            <Link key={c} href={hrefFor(lang, "themen")} style={{ textDecoration: "none", cursor: "pointer" }}>
              <Chip>{c}</Chip>
            </Link>
          ))}
        </div>
        <Link href={hrefFor(lang, "themen")} style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-ui)", fontWeight: 600, color: "var(--text-link)", textDecoration: "none" }}>
          {t.homeTopics.link} {Icons.arrowRight({ size: 17 })}
        </Link>
      </Section>

      {/* Steps */}
      <Section>
        <SectionHead eyebrow={t.homeSteps.eyebrow} title={t.homeSteps.title} />
        <Steps steps={t.homeSteps.steps} />
      </Section>

      <CtaBand text={t.ctaBand.text} cta={t.ctaBand.cta} href={termine} />
    </div>
  );
}
