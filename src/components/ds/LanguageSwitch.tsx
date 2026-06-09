"use client";

import React from "react";

export type LanguageSwitchProps = {
  value?: string;
  onChange?: (code: string) => void;
  languages?: { code: string; label: string }[];
  style?: React.CSSProperties;
};

/**
 * LanguageSwitch — DE/EN toggle for the sticky header. Manual switch, no
 * auto-redirect. Segmented pill; the active language is filled.
 */
export function LanguageSwitch({
  value = "de",
  onChange,
  languages = [
    { code: "de", label: "DE" },
    { code: "en", label: "EN" },
  ],
  style = {},
}: LanguageSwitchProps) {
  const select = (code: string) => onChange?.(code);

  return (
    <div
      role="group"
      aria-label="Sprache wählen / Choose language"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 2,
        padding: 3,
        background: "var(--sand-100)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-pill)",
        ...style,
      }}
    >
      {languages.map((l) => {
        const active = l.code === value;
        return (
          <button
            key={l.code}
            onClick={() => select(l.code)}
            aria-pressed={active}
            lang={l.code}
            style={{
              minWidth: 40,
              height: 32,
              padding: "0 12px",
              border: "none",
              borderRadius: "var(--radius-pill)",
              cursor: "pointer",
              fontFamily: "var(--font-ui)",
              fontSize: "var(--text-sm)",
              fontWeight: "var(--fw-semibold)" as unknown as number,
              letterSpacing: "0.03em",
              background: active ? "var(--surface-card)" : "transparent",
              color: active ? "var(--text-heading)" : "var(--text-muted)",
              boxShadow: active ? "var(--shadow-xs)" : "none",
              transition: "var(--transition-color)",
            }}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
}
