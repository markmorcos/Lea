import React from "react";

// Lucide-style line icons (stroke 1.8, round caps/joins). Ported from the
// design system's icons.js — same paths, now typed React components.

export type IconProps = {
  size?: number;
  color?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
};

type Child = React.ReactNode;

function svg(children: Child, { size = 22, color = "currentColor", strokeWidth = 1.8, style }: IconProps = {}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const paths = (ds: string[]) => (props?: IconProps) =>
  svg(
    ds.map((d, i) => <path key={i} d={d} />),
    props,
  );

export const Icons: Record<string, (props?: IconProps) => React.ReactElement> = {
  arrowRight: paths(["M5 12h14", "m12 5 7 7-7 7"]),
  heart: paths([
    "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
  ]),
  shield: paths([
    "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z",
  ]),
  compass: (props?: IconProps) =>
    svg(
      [
        <circle key="c" cx={12} cy={12} r={10} />,
        <polygon key="p" points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />,
      ],
      props,
    ),
  menu: paths(["M4 6h16", "M4 12h16", "M4 18h16"]),
  close: paths(["M18 6 6 18", "m6 6 12 12"]),
  mail: (props?: IconProps) =>
    svg(
      [
        <rect key="r" x={2} y={4} width={20} height={16} rx={2} />,
        <path key="p" d="m22 7-9.97 5.6a2 2 0 0 1-1.97 0L2 7" />,
      ],
      props,
    ),
  phone: paths([
    "M13.83 19.36a14.5 14.5 0 0 1-6.36-6.36l1.6-1.6a1.5 1.5 0 0 0 .36-1.53L8.6 6.7A1.5 1.5 0 0 0 7.18 5.7H4.5A1.5 1.5 0 0 0 3 7.3 16.5 16.5 0 0 0 16.7 21a1.5 1.5 0 0 0 1.6-1.5v-2.68a1.5 1.5 0 0 0-1-1.42l-3.17-1.23a1.5 1.5 0 0 0-1.53.36Z",
  ]),
  video: (props?: IconProps) =>
    svg(
      [
        <rect key="r" x={2} y={6} width={14} height={12} rx={2} />,
        <path key="p" d="m22 8-6 4 6 4V8Z" />,
      ],
      props,
    ),
  mapPin: (props?: IconProps) =>
    svg(
      [
        <path key="p" d="M20 10c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 0 1 16 0Z" />,
        <circle key="c" cx={12} cy={10} r={3} />,
      ],
      props,
    ),
  check: paths(["M20 6 9 17l-5-5"]),
  leaf: paths([
    "M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",
    "M2 21c0-3 1.85-5.36 5.08-6",
  ]),
  calendar: (props?: IconProps) =>
    svg(
      [
        <rect key="r" x={3} y={4} width={18} height={18} rx={2} />,
        <path key="p1" d="M16 2v4M8 2v4M3 10h18" />,
      ],
      props,
    ),
  globe: (props?: IconProps) =>
    svg(
      [
        <circle key="c" cx={12} cy={12} r={10} />,
        <path key="p" d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20 15.3 15.3 0 0 1 0-20" />,
      ],
      props,
    ),
  sparkle: paths(["M12 3c.5 4.5 2 6 6.5 6.5C14 10 12.5 11.5 12 16c-.5-4.5-2-6-6.5-6.5C10 9 11.5 7.5 12 3Z"]),
};

export type IconName = keyof typeof Icons;
