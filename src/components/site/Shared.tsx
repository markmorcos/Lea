import React from "react";
import Link from "next/link";
import { Button } from "@/components/ds";
import { Icons } from "@/components/icons";

export function Section({
  id,
  children,
  bg,
  narrow,
  pad,
  style = {},
}: {
  id?: string;
  children: React.ReactNode;
  bg?: string;
  narrow?: boolean;
  pad?: string;
  style?: React.CSSProperties;
}) {
  return (
    <section id={id} style={{ background: bg || "transparent", ...style }}>
      <div
        style={{
          maxWidth: narrow ? "var(--container-prose)" : "var(--container)",
          margin: "0 auto",
          padding: pad || "var(--section-y-sm) var(--page-pad)",
        }}
      >
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="eyebrow" style={{ marginBottom: 14 }}>
      {children}
    </div>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  center,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div
      style={{
        textAlign: center ? "center" : "left",
        maxWidth: center ? "56ch" : "min(44ch, 100%)",
        marginInline: center ? "auto" : 0,
        marginBottom: "var(--space-7)",
      }}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 style={{ fontSize: "var(--text-2xl)", margin: 0 }}>{title}</h2>
      {lead ? (
        <p className="lead" style={{ marginTop: 14, marginInline: center ? "auto" : 0 }}>
          {lead}
        </p>
      ) : null}
    </div>
  );
}

export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div style={{ background: "var(--surface-brand-soft)", borderBottom: "1px solid var(--border-subtle)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "var(--space-9) var(--page-pad) var(--space-8)" }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 style={{ fontSize: "var(--text-3xl)", margin: 0, maxWidth: "20ch" }}>{title}</h1>
        {lead ? (
          <p className="lead" style={{ marginTop: 14, maxWidth: "54ch" }}>
            {lead}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function Steps({ steps }: { steps: { n: string; title: string; body: string }[] }) {
  return (
    <div className="cards-row" style={{ display: "grid", gridTemplateColumns: `repeat(${steps.length}, 1fr)`, gap: "var(--space-6)" }}>
      {steps.map((s, i) => (
        <div key={s.n}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: "var(--space-4)" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 52,
                height: 52,
                borderRadius: "var(--radius-round)",
                background: "var(--surface-card)",
                border: "1px solid var(--sage-300)",
                color: "var(--sage-700)",
                fontFamily: "var(--font-serif)",
                fontSize: "var(--text-lg)",
                fontWeight: 600,
                boxShadow: "var(--shadow-sm)",
                flex: "0 0 auto",
              }}
            >
              {s.n}
            </span>
            {i < steps.length - 1 ? <span className="step-line" style={{ flex: 1, height: 1, background: "var(--border-default)" }} /> : null}
          </div>
          <h3 style={{ fontSize: "var(--text-lg)", marginBottom: 6 }}>{s.title}</h3>
          <p style={{ margin: 0, color: "var(--text-muted)" }}>{s.body}</p>
        </div>
      ))}
    </div>
  );
}

export function SafetyNote({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 14,
        alignItems: "flex-start",
        padding: "var(--space-5)",
        background: "var(--clay-50)",
        border: "1px solid var(--clay-100)",
        borderRadius: "var(--radius-lg)",
      }}
    >
      <span style={{ color: "var(--clay-600)", flex: "0 0 auto", marginTop: 1 }}>{Icons.shield({ size: 20 })}</span>
      <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--slate-700)", maxWidth: "78ch" }}>{children}</p>
    </div>
  );
}

export function CtaBand({ text, cta, href }: { text: string; cta: string; href: string }) {
  return (
    <section style={{ background: "var(--sage-700)" }}>
      <div
        style={{
          maxWidth: "var(--container)",
          margin: "0 auto",
          padding: "var(--space-8) var(--page-pad)",
          display: "flex",
          flexWrap: "wrap",
          gap: "var(--space-5)",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h2 style={{ margin: 0, color: "var(--sand-50)", fontSize: "var(--text-2xl)", maxWidth: "20ch" }}>{text}</h2>
        <Button variant="accent" size="lg" href={href} iconRight={Icons.arrowRight({ size: 19 })}>
          {cta}
        </Button>
      </div>
    </section>
  );
}

export function Portrait({
  ratio = "4 / 5",
  tint = "sage",
  src = "/lea-portrait.jpg",
}: {
  ratio?: string;
  tint?: "sage" | "clay";
  src?: string;
}) {
  const grad =
    tint === "clay"
      ? "linear-gradient(155deg, var(--clay-100), var(--clay-300))"
      : "linear-gradient(155deg, var(--sage-200), var(--sage-400) 60%, var(--sage-600))";
  return (
    <div
      style={{
        position: "relative",
        aspectRatio: ratio,
        borderRadius: "var(--radius-xl)",
        overflow: "hidden",
        background: grad,
        boxShadow: "var(--shadow-md)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt="Lea Zoe Pfaffeneder"
        loading="lazy"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 22%" }}
      />
    </div>
  );
}

export function FormSuccess({ title, body }: { title: string; body: string }) {
  return (
    <div style={{ textAlign: "center", padding: "var(--space-7) var(--space-4)" }}>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 64,
          height: 64,
          borderRadius: "var(--radius-round)",
          background: "var(--sage-100)",
          color: "var(--sage-700)",
          marginBottom: "var(--space-4)",
        }}
      >
        {Icons.check({ size: 30 })}
      </span>
      <h3 style={{ fontSize: "var(--text-xl)", marginBottom: 8 }}>{title}</h3>
      <p style={{ margin: "0 auto", color: "var(--text-muted)", maxWidth: "36ch" }}>{body}</p>
    </div>
  );
}

// Re-export Link so pages can build language-aware anchors consistently.
export { Link };
