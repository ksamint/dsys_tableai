import React from "react";

/** Minimal horizontal/vertical bar chart. Deep-blue bars; one `highlight` bar in gold. No gridlines, no axes boxes. */
export function BarChart({ data = [], orientation = "horizontal", highlight, max, format = v => v, unit = "", height = 220, barThickness = 12, style }) {
  const top = max ?? Math.max(1, ...data.map(d => d.value));
  const isHi = (d, i) => (typeof highlight === "function" ? highlight(d, i) : highlight === i || highlight === d.label);
  const label = { fontSize: 11, letterSpacing: "var(--ls-track-md)", textTransform: "uppercase", color: "var(--text-muted)" };
  if (orientation === "vertical") {
    return (
      <div role="img" aria-label={data.map(d => `${d.label} ${format(d.value)}${unit}`).join(", ")} style={{ display: "flex", alignItems: "flex-end", gap: 24, height, fontFamily: "var(--font-sans)", borderBottom: "1px solid var(--border-strong)", ...style }}>
        {data.map((d, i) => (
          <div key={d.label} style={{ flex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", alignItems: "center", gap: 8 }}>
            <span style={{ fontSize: 13, fontVariantNumeric: "tabular-nums", color: isHi(d, i) ? "var(--accent-text)" : "var(--text)" }}>{format(d.value)}{unit}</span>
            <div style={{ width: "100%", maxWidth: barThickness * 4, height: `calc(${(d.value / top) * 100}% - 48px)`, minHeight: 1, background: isHi(d, i) ? "var(--accent)" : "var(--text)", opacity: isHi(d, i) ? 1 : 0.85 }} />
            <span style={{ ...label, position: "relative", top: 28, whiteSpace: "nowrap" }}>{d.label}</span>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div role="img" aria-label={data.map(d => `${d.label} ${format(d.value)}${unit}`).join(", ")} style={{ display: "grid", gridTemplateColumns: "minmax(0,auto) 1fr auto", columnGap: 16, rowGap: 14, alignItems: "center", fontFamily: "var(--font-sans)", ...style }}>
      {data.map((d, i) => (
        <React.Fragment key={d.label}>
          <span style={{ ...label, whiteSpace: "nowrap" }}>{d.label}</span>
          <div style={{ height: barThickness, background: "var(--bg-container-low)" }}>
            <div style={{ width: `${(d.value / top) * 100}%`, height: "100%", background: isHi(d, i) ? "var(--accent)" : "var(--text)", transformOrigin: "left", animation: "ta-line-expand var(--dur-line) var(--ease-standard) both" }} />
          </div>
          <span style={{ fontSize: 13, fontVariantNumeric: "tabular-nums", textAlign: "right", color: isHi(d, i) ? "var(--accent-text)" : "var(--text)" }}>{format(d.value)}{unit}</span>
        </React.Fragment>
      ))}
    </div>
  );
}
