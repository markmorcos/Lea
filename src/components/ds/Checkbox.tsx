"use client";

import React from "react";

export type CheckboxProps = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  id?: string;
};

/**
 * Checkbox — square, soft-rounded. Used for the privacy/consent opt-in.
 * Label is part of the control for a large hit target.
 */
export function Checkbox({ checked, defaultChecked, onChange, disabled = false, children, style = {}, ...rest }: CheckboxProps) {
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const on = isControlled ? checked : internal;
  const [focus, setFocus] = React.useState(false);

  const toggle: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (disabled) return;
    if (!isControlled) setInternal(!on);
    onChange?.(e);
  };

  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "flex-start",
        gap: 11,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
        fontFamily: "var(--font-body)",
        fontSize: "var(--text-sm)",
        lineHeight: "var(--leading-normal)",
        color: "var(--text-body)",
        ...style,
      }}
    >
      <input
        type="checkbox"
        checked={on}
        disabled={disabled}
        onChange={toggle}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{ position: "absolute", opacity: 0, width: 1, height: 1 }}
        {...rest}
      />
      <span
        aria-hidden="true"
        style={{
          flex: "0 0 auto",
          marginTop: 1,
          width: 22,
          height: 22,
          borderRadius: "var(--radius-xs)",
          background: on ? "var(--sage-700)" : "var(--surface-raised)",
          border: `1px solid ${on ? "var(--sage-700)" : "var(--border-default)"}`,
          boxShadow: focus ? "var(--focus-ring)" : "var(--shadow-inset)",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "var(--transition-color)",
        }}
      >
        {on ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--text-on-brand)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        ) : null}
      </span>
      {children ? <span>{children}</span> : null}
    </label>
  );
}
