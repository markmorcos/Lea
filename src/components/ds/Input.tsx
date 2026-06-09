"use client";

import React from "react";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  size?: "sm" | "md" | "lg";
  invalid?: boolean;
  iconLeft?: React.ReactNode;
};

/**
 * Input — single-line text field. Calm, rounded, soft inset. Pass `invalid`
 * to show the error state.
 */
export function Input({ size = "md", invalid = false, disabled = false, iconLeft = null, type = "text", style = {}, ...rest }: InputProps) {
  const [focus, setFocus] = React.useState(false);
  const heights: Record<string, number> = { sm: 40, md: 48, lg: 54 };
  const h = heights[size] ?? heights.md;

  const borderColor = invalid ? "var(--danger)" : focus ? "var(--border-focus)" : "var(--border-default)";

  return (
    <div style={{ position: "relative", width: "100%" }}>
      {iconLeft ? (
        <span
          style={{
            position: "absolute",
            left: 14,
            top: "50%",
            transform: "translateY(-50%)",
            display: "inline-flex",
            color: "var(--text-faint)",
            pointerEvents: "none",
          }}
        >
          {iconLeft}
        </span>
      ) : null}
      <input
        type={type}
        disabled={disabled}
        aria-invalid={invalid || undefined}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          width: "100%",
          height: h,
          padding: iconLeft ? "0 16px 0 42px" : "0 16px",
          fontFamily: "var(--font-body)",
          fontSize: "var(--text-base)",
          color: "var(--text-body)",
          background: disabled ? "var(--sand-100)" : "var(--surface-raised)",
          border: `1px solid ${borderColor}`,
          borderRadius: "var(--radius-input)",
          boxShadow: focus ? "var(--focus-ring)" : "var(--shadow-inset)",
          outline: "none",
          transition: "var(--transition-color), box-shadow var(--dur-fast) var(--ease-standard)",
          opacity: disabled ? 0.6 : 1,
          ...style,
        }}
        {...rest}
      />
    </div>
  );
}
