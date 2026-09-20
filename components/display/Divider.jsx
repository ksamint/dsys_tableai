import React from "react";

/**
 * Hairline rules. `variant="line"` full-width divider; `"accent"` the 48px deep-blue mark (.accent-line);
 * `"gold"` the same mark in Sundial Gold (section closers); `vertical` for divide-x strips.
 */
export function Divider({ variant = "line", vertical = false, width = 48, spacing = 0, align = "left", style }) {
  const color = variant === "gold" ? "var(--accent)" : variant === "accent" ? "var(--text)" : variant === "strong" ? "var(--border-strong)" : "var(--border)";
  if (vertical) return <span aria-hidden="true" style={{ display: "inline-block", width: 1, alignSelf: "stretch", minHeight: 16, background: color, margin: `0 ${spacing}px`, ...style }} />;
  const short = variant === "accent" || variant === "gold";
  return <hr aria-hidden="true" style={{ border: 0, height: 1, width: short ? width : "100%", background: color, margin: `${spacing}px ${align === "center" ? "auto" : align === "right" ? "0 0 0 auto" : 0}`, transformOrigin: align === "center" ? "center" : "left", ...style }} />;
}
