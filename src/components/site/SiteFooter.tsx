import React from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { hrefFor, type Lang } from "@/content/content";
import { CONTENT } from "@/content/loader";

export function SiteFooter({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  const legalIds = ["impressum", "datenschutz"];
  return (
    <footer style={{ background: "var(--surface-inverse)", color: "var(--sand-200)", marginTop: "var(--space-12)" }}>
      <div style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "var(--space-9) var(--page-pad) var(--space-7)" }}>
        <div
          style={{
            display: "flex",
            gap: 14,
            alignItems: "flex-start",
            padding: "var(--space-5)",
            background: "color-mix(in srgb, var(--sand-50) 7%, transparent)",
            border: "1px solid color-mix(in srgb, var(--sand-50) 15%, transparent)",
            borderRadius: "var(--radius-lg)",
            marginBottom: "var(--space-8)",
          }}
        >
          <span style={{ color: "var(--sage-300)", flex: "0 0 auto", marginTop: 2 }}>{Icons.shield({ size: 22 })}</span>
          <p style={{ margin: 0, fontSize: "var(--text-sm)", lineHeight: "var(--leading-relaxed)", color: "var(--sand-300)", maxWidth: "78ch" }}>{t.footer.safety}</p>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "var(--space-6)", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "var(--radius-round)",
                  background: "var(--sage-50)",
                  border: "1px solid var(--sage-300)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/mark.svg" alt="" width={24} height={24} />
              </span>
              <span style={{ fontFamily: "var(--font-serif)", fontSize: "var(--text-lg)", color: "var(--sand-50)" }}>Lea Zoe Pfaffeneder</span>
            </div>
            <p style={{ margin: 0, fontSize: "var(--text-sm)", color: "var(--sand-300)" }}>{t.footer.tagline}</p>
          </div>
          <nav style={{ display: "flex", gap: "var(--space-5)" }}>
            {t.footer.legal.map((l, i) => (
              <Link key={l} href={hrefFor(lang, legalIds[i])} style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-sm)", color: "var(--sand-200)", textDecoration: "none" }}>
                {l}
              </Link>
            ))}
          </nav>
        </div>
        <div style={{ marginTop: "var(--space-7)", paddingTop: "var(--space-5)", borderTop: "1px solid color-mix(in srgb, var(--sand-50) 13%, transparent)", fontSize: "var(--text-xs)", color: "var(--slate-300)" }}>
          © {new Date().getFullYear()} Lea Zoe Pfaffeneder · M.Sc. Psychologin · Berlin
        </div>
      </div>
    </footer>
  );
}
