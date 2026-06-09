"use client";

import React from "react";

type Elevation = "none" | "card" | "raised";
type Padding = "none" | "sm" | "md" | "lg";

export type CardProps = {
  elevation?: Elevation;
  interactive?: boolean;
  padding?: Padding;
  as?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
};

/**
 * Card — calm content surface. `elevation` controls lift; `interactive`
 * adds a gentle hover rise for clickable topic cards.
 */
export function Card({ elevation = "card", interactive = false, padding = "lg", as = "div", children, style = {}, ...rest }: CardProps) {
  const [hover, setHover] = React.useState(false);
  const El = as as React.ElementType;

  const pads: Record<Padding, number | string> = { none: 0, sm: "var(--space-4)", md: "var(--space-5)", lg: "var(--space-6)" };
  const shadows: Record<Elevation, string> = { none: "none", card: "var(--elevation-card)", raised: "var(--elevation-raised)" };

  return (
    <El
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--surface-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-card)",
        padding: pads[padding],
        boxShadow: interactive && hover ? "var(--elevation-raised)" : shadows[elevation],
        transform: interactive && hover ? "translateY(calc(-1 * var(--rise-sm)))" : "translateY(0)",
        transition: "var(--transition-transform), box-shadow var(--dur-base) var(--ease-standard)",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
      {...rest}
    >
      {children}
    </El>
  );
}
