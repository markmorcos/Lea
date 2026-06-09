"use client";

import React from "react";

export type ChipProps = {
  selected?: boolean;
  interactive?: boolean;
  iconLeft?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
};

/**
 * Chip — pill for the life-themes / topic list. `selected` fills it sage;
 * `interactive` makes it a clickable filter.
 */
export function Chip({ selected = false, interactive = false, iconLeft = null, children, onClick, style = {}, ...rest }: ChipProps) {
  const [hover, setHover] = React.useState(false);
  const Tag = (interactive ? "button" : "span") as React.ElementType;

  const resting: React.CSSProperties = selected
    ? { background: "var(--sage-700)", color: "var(--text-on-brand)", borderColor: "var(--sage-700)" }
    : { background: "var(--surface-card)", color: "var(--text-body)", borderColor: "var(--border-default)" };

  const hovered: React.CSSProperties = selected
    ? { background: "var(--sage-800)" }
    : { background: "var(--sage-50)", borderColor: "var(--sage-300)" };

  return (
    <Tag
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        height: 38,
        padding: "0 16px",
        fontFamily: "var(--font-ui)",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--fw-medium)" as unknown as number,
        lineHeight: 1,
        border: "1px solid",
        borderRadius: "var(--radius-chip)",
        cursor: interactive ? "pointer" : "default",
        transition: "var(--transition-color)",
        ...resting,
        ...(interactive && hover ? hovered : null),
        ...style,
      }}
      {...rest}
    >
      {iconLeft ? <span style={{ display: "inline-flex" }}>{iconLeft}</span> : null}
      {children}
    </Tag>
  );
}
