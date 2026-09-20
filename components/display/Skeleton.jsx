import React from "react";

/** Loading placeholder: minimal deep-blue tint, slow opacity pulse, no shimmer (per TableAI_DESIGN.md §4). */
export function Skeleton({ width = "100%", height = 14, radius = "var(--radius-sm)", circle = false, lines = 0, gap = 10, style }) {
  const block = (w, key) => <span key={key} style={{ display: "block", width: w, height: circle ? width : height, borderRadius: circle ? "50%" : radius, background: "rgba(10,22,38,0.07)", animation: "ta-skeleton 1.8s var(--ease-standard) infinite", ...style }} />;
  if (lines > 1) return <span style={{ display: "flex", flexDirection: "column", gap }}>{Array.from({ length: lines }, (_, i) => block(i === lines - 1 ? "60%" : width, i))}</span>;
  return block(width);
}
