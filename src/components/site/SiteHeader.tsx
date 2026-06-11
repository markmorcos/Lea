"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button, LanguageSwitch, IconButton } from "@/components/ds";
import { Icons } from "@/components/icons";
import { SLUGS, hrefFor, type Lang } from "@/content/content";
import { CONTENT } from "@/content/loader";

function routeIdFromPath(pathname: string, lang: Lang): string {
  const parts = pathname.replace(/\/+$/, "").split("/").filter(Boolean);
  // German is unprefixed (/slug); English is /en/slug.
  const slug = lang === "en" ? parts[1] ?? "" : parts[0] ?? "";
  const found = Object.entries(SLUGS).find(([, s]) => s === slug);
  return found ? found[0] : "home";
}

export function SiteHeader({ lang }: { lang: Lang }) {
  const t = CONTENT[lang];
  const pathname = usePathname() || "/";
  const router = useRouter();
  const routeId = routeIdFromPath(pathname, lang);

  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const read = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", read, { passive: true });
    read();
    return () => window.removeEventListener("scroll", read);
  }, []);

  const switchLang = (code: string) => {
    router.push(hrefFor(code as Lang, routeId));
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: scrolled ? "color-mix(in srgb, var(--surface-page) 85%, transparent)" : "var(--surface-page)",
        backdropFilter: scrolled ? "saturate(140%) blur(10px)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--border-subtle)" : "transparent"}`,
        transition: "background var(--dur-base) var(--ease-standard), border-color var(--dur-base) var(--ease-standard)",
      }}
    >
      <div className="header-bar" style={{ maxWidth: "var(--container)", margin: "0 auto", padding: "13px var(--page-pad)", display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
        <Link
          className="brand"
          href={hrefFor(lang, "home")}
          onClick={() => setMenuOpen(false)}
          style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", flex: "0 1 auto", minWidth: 0 }}
        >
          <span
            className="brand-logo"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: "var(--radius-round)",
              background: "var(--sage-50)",
              border: "1px solid var(--sage-300)",
              flexShrink: 0,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/mark.svg" alt="" width={26} height={26} />
          </span>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.15, minWidth: 0 }}>
            <span
              className="brand-name"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "var(--text-lg)",
                color: "var(--text-strong)",
                fontWeight: 500,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              Lea Zoe Pfaffeneder
            </span>
            <span
              className="brand-sub"
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: 11,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--accent-strong)",
                fontWeight: 600,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {lang === "de" ? "Psychologische Beratung" : "Psychological Counselling"}
            </span>
          </span>
        </Link>

        <nav className="site-nav" style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: "var(--space-5)" }}>
          {t.nav.map((n) => (
            <Link
              key={n.id}
              href={hrefFor(lang, n.id)}
              style={{
                fontFamily: "var(--font-ui)",
                fontSize: "var(--text-sm)",
                fontWeight: 500,
                textDecoration: "none",
                whiteSpace: "nowrap",
                color: routeId === n.id ? "var(--sage-700)" : "var(--text-body)",
                borderBottom: routeId === n.id ? "2px solid var(--sage-500)" : "2px solid transparent",
                paddingBottom: 2,
              }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="header-controls" style={{ display: "flex", alignItems: "center", gap: "var(--space-3)", marginLeft: "var(--space-3)", flexShrink: 0 }}>
          <span className="lang-switch" style={{ display: "inline-flex" }}>
            <LanguageSwitch value={lang} onChange={switchLang} />
          </span>
          <span className="cta-desktop">
            <Button variant="primary" size="sm" href={hrefFor(lang, "termine")} iconRight={Icons.arrowRight({ size: 17 })}>
              {t.cta}
            </Button>
          </span>
          <span className="menu-btn" style={{ display: "none" }}>
            <IconButton aria-label={menuOpen ? (lang === "de" ? "Menü schließen" : "Close menu") : lang === "de" ? "Menü öffnen" : "Open menu"} variant="outline" onClick={() => setMenuOpen((v) => !v)}>
              {(menuOpen ? Icons.close : Icons.menu)({ size: 20 })}
            </IconButton>
          </span>
        </div>
      </div>

      {menuOpen ? (
        <div className="mobile-nav" style={{ borderTop: "1px solid var(--border-subtle)", background: "var(--surface-page)", padding: "var(--space-4) var(--page-pad) var(--space-5)" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {t.nav.map((n) => (
              <Link
                key={n.id}
                href={hrefFor(lang, n.id)}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: "var(--font-ui)",
                  fontSize: "var(--text-base)",
                  fontWeight: 500,
                  textDecoration: "none",
                  padding: "11px 0",
                  color: routeId === n.id ? "var(--sage-700)" : "var(--text-body)",
                }}
              >
                {n.label}
              </Link>
            ))}
            <div style={{ marginTop: 12 }}>
              <Button variant="primary" fullWidth href={hrefFor(lang, "termine")} onClick={() => setMenuOpen(false)}>
                {t.cta}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
