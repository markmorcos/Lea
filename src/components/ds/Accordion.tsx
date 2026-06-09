"use client";

import React from "react";

export type AccordionItem = { q: string; a: string };

export type AccordionProps = {
  items?: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpen?: number[];
  style?: React.CSSProperties;
};

/**
 * Accordion — the FAQ disclosure list. Calm, single-column, one item open
 * at a time by default.
 */
export function Accordion({ items = [], allowMultiple = false, defaultOpen = [], style = {} }: AccordionProps) {
  const [open, setOpen] = React.useState<Set<number>>(new Set(defaultOpen));

  const toggle = (i: number) => {
    setOpen((prev) => {
      const next = new Set(allowMultiple ? prev : []);
      if (prev.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div style={{ borderTop: "1px solid var(--border-subtle)", ...style }}>
      {items.map((it, i) => {
        const isOpen = open.has(i);
        return (
          <div key={i} style={{ borderBottom: "1px solid var(--border-subtle)" }}>
            <button
              onClick={() => toggle(i)}
              aria-expanded={isOpen}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 16,
                padding: "var(--space-5) 0",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontFamily: "var(--font-heading)",
                fontSize: "var(--text-lg)",
                fontWeight: "var(--fw-medium)" as unknown as number,
                color: "var(--text-heading)",
                lineHeight: "var(--leading-snug)",
              }}
            >
              <span>{it.q}</span>
              <span
                aria-hidden="true"
                style={{
                  flex: "0 0 auto",
                  display: "inline-flex",
                  color: "var(--sage-600)",
                  transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  transition: "transform var(--dur-base) var(--ease-out)",
                }}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div
              style={{
                display: "grid",
                gridTemplateRows: isOpen ? "1fr" : "0fr",
                transition: "grid-template-rows var(--dur-base) var(--ease-standard)",
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <div
                  style={{
                    paddingBottom: isOpen ? "var(--space-5)" : 0,
                    color: "var(--text-body)",
                    fontSize: "var(--text-base)",
                    lineHeight: "var(--leading-relaxed)",
                    maxWidth: "var(--measure-prose)",
                  }}
                >
                  {it.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
