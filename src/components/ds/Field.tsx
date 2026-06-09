import React from "react";

export type FieldProps = {
  label?: string;
  htmlFor?: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
};

/** Field — accessible label + hint/error wrapper for a single control. */
export function Field({ label, htmlFor, hint, error, required = false, children, style = {} }: FieldProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, width: "100%", ...style }}>
      {label ? (
        <label
          htmlFor={htmlFor}
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: "var(--text-sm)",
            fontWeight: "var(--fw-semibold)" as unknown as number,
            color: "var(--text-heading)",
          }}
        >
          {label}
          {required ? <span style={{ color: "var(--accent-strong)", marginLeft: 3 }}>*</span> : null}
        </label>
      ) : null}
      {children}
      {error ? (
        <span style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-sm)", color: "var(--danger)" }}>{error}</span>
      ) : hint ? (
        <span style={{ fontFamily: "var(--font-ui)", fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{hint}</span>
      ) : null}
    </div>
  );
}
