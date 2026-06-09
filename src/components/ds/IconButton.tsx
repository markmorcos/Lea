"use client";

import React from "react";

type Variant = "ghost" | "soft" | "outline";
type Size = "sm" | "md" | "lg";

export type IconButtonProps = {
  children?: React.ReactNode;
  variant?: Variant;
  size?: Size;
  disabled?: boolean;
  "aria-label": string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler;
};

/**
 * IconButton — circular, icon-only control (menu toggle, close, language).
 * Always pass an aria-label.
 */
export function IconButton({
  children,
  variant = "ghost",
  size = "md",
  disabled = false,
  style = {},
  ...rest
}: IconButtonProps) {
  const dims: Record<Size, number> = { sm: 36, md: 44, lg: 52 };
  const d = dims[size];

  const variants: Record<Variant, React.CSSProperties> = {
    ghost: { background: "transparent", color: "var(--slate-700)", border: "1px solid transparent" },
    soft: { background: "var(--sage-50)", color: "var(--sage-800)", border: "1px solid transparent" },
    outline: { background: "var(--surface-card)", color: "var(--slate-700)", border: "1px solid var(--border-default)" },
  };
  const hoverBg: Record<Variant, string> = {
    ghost: "var(--sage-50)",
    soft: "var(--sage-100)",
    outline: "var(--sand-50)",
  };

  const [hover, setHover] = React.useState(false);

  return (
    <button
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: d,
        height: d,
        borderRadius: "var(--radius-pill)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "var(--transition-color)",
        ...variants[variant],
        ...(hover && !disabled ? { background: hoverBg[variant] } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
