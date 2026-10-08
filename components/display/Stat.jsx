import React from "react";

/**
 * Key figure: large light numeral + tracked label. `accent` renders the value in Sundial Gold — reserved for the
 * one figure that matters on a view. `countUp` animates from 0 on mount (website stats strip).
 */
export function Stat({ value, suffix = "", label, description, accent = false, countUp = false, size = "md", align = "center", style }) {
  const numeric = typeof value === "number";
  const [n, setN] = React.useState(countUp && numeric ? 0 : value);
  React.useEffect(() => {
    if (!countUp || !numeric) { setN(value); return; }
    let start; let raf;
    const step = ts => { if (!start) start = ts; const p = Math.min((ts - start) / 2000, 1); setN(Math.floor((1 - Math.pow(1 - p, 4)) * value)); if (p < 1) raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, countUp, numeric]);
  const fs = { sm: 24, md: 36, lg: 56 }[size] || 36;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: align === "center" ? "center" : "flex-start", textAlign: align, gap: 8, fontFamily: "var(--font-sans)", color: "var(--text)", ...style }}>
      <div style={{ fontSize: fs, fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1, color: accent ? "var(--accent-text)" : "var(--text)", fontVariantNumeric: "tabular-nums" }}>{numeric ? n.toLocaleString() : n}{suffix}</div>
      {label ? <div style={{ fontSize: 12, letterSpacing: "var(--ls-track-md)", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}</div> : null}
      {description ? <p style={{ margin: 0, fontSize: 12, lineHeight: 1.6, color: "var(--text-subtle)", maxWidth: 280 }}>{description}</p> : null}
    </div>
  );
}
