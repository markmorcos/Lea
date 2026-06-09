import React from "react";

export type AvatarProps = {
  src?: string;
  alt?: string;
  initials?: string;
  size?: "sm" | "md" | "lg" | "xl";
  ring?: boolean;
  style?: React.CSSProperties;
};

/** Avatar — round portrait of Lea, or initials fallback. Soft sage ring. */
export function Avatar({ src, alt = "", initials = "lp", size = "md", ring = true, style = {} }: AvatarProps) {
  const sizes: Record<string, number> = { sm: 40, md: 56, lg: 88, xl: 132 };
  const d = sizes[size] ?? sizes.md;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: d,
        height: d,
        borderRadius: "var(--radius-round)",
        overflow: "hidden",
        background: "var(--sage-50)",
        color: "var(--sage-700)",
        fontFamily: "var(--font-serif)",
        fontWeight: "var(--fw-medium)" as unknown as number,
        fontSize: d * 0.4,
        flex: "0 0 auto",
        border: ring ? "1px solid var(--sage-300)" : "none",
        boxShadow: ring ? "0 0 0 4px var(--sage-50)" : "none",
        ...style,
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <span aria-hidden="true">{initials}</span>
      )}
    </span>
  );
}
