"use client";

import React from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "accent" | "ghost";
type Size = "sm" | "md" | "lg";

export type ButtonProps = {
  variant?: Variant;
  size?: Size;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
};

/**
 * Button — the brand's single repeated CTA pattern. Pill-shaped, calm,
 * AA-contrast. `primary` (sage) carries the main "Termin anfragen" action.
 * Pass `href` to render a navigating link styled identically.
 */
export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  iconLeft = null,
  iconRight = null,
  disabled = false,
  type = "button",
  href,
  children,
  style = {},
  ...rest
}: ButtonProps) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const sizes: Record<Size, React.CSSProperties> = {
    sm: { height: 38, padding: "0 18px", fontSize: "var(--text-sm)", gap: 8 },
    md: { height: 48, padding: "0 26px", fontSize: "var(--text-base)", gap: 10 },
    lg: { height: 56, padding: "0 34px", fontSize: "var(--text-md)", gap: 11 },
  };

  const base: Record<Variant, React.CSSProperties> = {
    primary: {
      background: "var(--sage-700)",
      color: "var(--text-on-brand)",
      border: "1px solid var(--sage-700)",
      boxShadow: "var(--elevation-cta)",
    },
    secondary: {
      background: "var(--surface-card)",
      color: "var(--text-heading)",
      border: "1px solid var(--border-default)",
      boxShadow: "var(--shadow-xs)",
    },
    accent: {
      background: "var(--clay-600)",
      color: "var(--text-on-accent)",
      border: "1px solid var(--clay-600)",
      boxShadow: "0 6px 16px rgba(162, 88, 54, 0.22)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-link)",
      border: "1px solid transparent",
      boxShadow: "none",
    },
  };

  const hoverStyle: Record<Variant, React.CSSProperties> = {
    primary: { background: "var(--sage-800)", borderColor: "var(--sage-800)" },
    secondary: { background: "var(--sand-50)", borderColor: "var(--border-strong)" },
    accent: { background: "var(--clay-700)", borderColor: "var(--clay-700)" },
    ghost: { background: "var(--sage-50)" },
  };

  const s = sizes[size];
  const v = base[variant];

  const composed: React.CSSProperties = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: s.gap,
    height: s.height,
    padding: s.padding,
    fontFamily: "var(--font-ui)",
    fontSize: s.fontSize,
    fontWeight: "var(--fw-semibold)" as unknown as number,
    lineHeight: 1,
    letterSpacing: "0.005em",
    borderRadius: "var(--radius-button)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    textDecoration: "none",
    transition:
      "var(--transition-color), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-standard)",
    transform: active && !disabled ? "translateY(1px)" : "translateY(0)",
    whiteSpace: "nowrap",
    ...v,
    ...(hover && !disabled ? hoverStyle[variant] : null),
    ...style,
  };

  const inner = (
    <>
      {iconLeft ? <span style={{ display: "inline-flex", flex: "0 0 auto" }}>{iconLeft}</span> : null}
      {children != null ? <span>{children}</span> : null}
      {iconRight ? <span style={{ display: "inline-flex", flex: "0 0 auto" }}>{iconRight}</span> : null}
    </>
  );

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
  };

  if (href && !disabled) {
    return (
      <Link href={href} style={composed} {...handlers} {...rest}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} style={composed} {...handlers} {...rest}>
      {inner}
    </button>
  );
}
