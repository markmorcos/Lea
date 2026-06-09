import React from "react";

type Tone = "sage" | "clay" | "neutral" | "info" | "success" | "warning" | "danger";

export type BadgeProps = {
  tone?: Tone;
  children?: React.ReactNode;
  style?: React.CSSProperties;
};

/** Badge — small status / category label. Soft tonal fills tied to the palette. */
export function Badge({ tone = "sage", children, style = {}, ...rest }: BadgeProps) {
  const tones: Record<Tone, React.CSSProperties> = {
    sage: { background: "var(--sage-100)", color: "var(--sage-800)" },
    clay: { background: "var(--clay-100)", color: "var(--clay-700)" },
    neutral: { background: "var(--sand-200)", color: "var(--slate-700)" },
    info: { background: "#DCEAEA", color: "var(--teal-600)" },
    success: { background: "var(--sage-100)", color: "var(--sage-800)" },
    warning: { background: "#F3E6C9", color: "var(--amber-600)" },
    danger: { background: "#F2D9D6", color: "var(--rose-600)" },
  };

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        height: 24,
        padding: "0 10px",
        fontFamily: "var(--font-ui)",
        fontSize: "var(--text-2xs)",
        fontWeight: "var(--fw-semibold)" as unknown as number,
        letterSpacing: "0.02em",
        lineHeight: 1,
        borderRadius: "var(--radius-pill)",
        whiteSpace: "nowrap",
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
