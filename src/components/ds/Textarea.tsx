"use client";

import React from "react";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  invalid?: boolean;
};

/** Textarea — multi-line field for the contact / message form. */
export function Textarea({ rows = 5, invalid = false, disabled = false, style = {}, ...rest }: TextareaProps) {
  const [focus, setFocus] = React.useState(false);
  const borderColor = invalid ? "var(--danger)" : focus ? "var(--border-focus)" : "var(--border-default)";

  return (
    <textarea
      rows={rows}
      disabled={disabled}
      aria-invalid={invalid || undefined}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        width: "100%",
        padding: "12px 16px",
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-base)",
        lineHeight: "var(--leading-relaxed)",
        color: "var(--text-body)",
        background: disabled ? "var(--sand-100)" : "var(--surface-raised)",
        border: `1px solid ${borderColor}`,
        borderRadius: "var(--radius-input)",
        boxShadow: focus ? "var(--focus-ring)" : "var(--shadow-inset)",
        outline: "none",
        resize: "vertical",
        minHeight: 96,
        transition: "var(--transition-color), box-shadow var(--dur-fast) var(--ease-standard)",
        opacity: disabled ? 0.6 : 1,
        ...style,
      }}
      {...rest}
    />
  );
}
