import React from "react";

/**
 * Tracked uppercase section label (12px / 0.3em) — the brand's most-used typographic device.
 * `number` prefixes "01 —"; `line` draws the 48px accent hairline before the text; `gold` tints the line.
 */
export function Eyebrow({ children, number, line = false, gold = false, as = "p", align = "left", color, style }) {
  const Comp = as;
  return (
    <Comp style={{ margin: 0, display: "flex", alignItems: "center", justifyContent: align === "center" ? "center" : "flex-start", gap: 12, fontFamily: "var(--font-sans)", fontSize: 12, fontWeight: 400, letterSpacing: "0.3em", textTransform: "uppercase", lineHeight: 1.4, color: color || "var(--text-muted)", ...style }}>
      {line ? <span aria-hidden="true" style={{ display: "inline-block", width: 48, height: 1, background: gold ? "var(--accent)" : "var(--text)", opacity: gold ? 1 : 0.3, transformOrigin: "left", animation: "ta-line-expand var(--dur-line) var(--ease-standard) both" }} /> : null}
      <span>{number ? <span style={{ marginRight: 12 }}>{number} —</span> : null}{children}</span>
    </Comp>
  );
}
