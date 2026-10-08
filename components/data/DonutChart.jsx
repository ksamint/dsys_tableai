import React from "react";

const RAMP = ["var(--color-deep-blue)", "var(--color-deep-blue-tint)", "var(--color-deep-blue-fixed-dim)", "var(--color-outline-variant)"];

/** Thin-ring donut + legend. Deep-blue ramp; one `highlight` segment in gold. */
export function DonutChart({ data = [], highlight, size = 180, thickness = 14, centerValue, centerLabel, format = v => v, unit = "", legend = true, style }) {
  const total = data.reduce((s, d) => s + d.value, 0) || 1;
  const r = (size - thickness) / 2;
  const C = 2 * Math.PI * r;
  let k = 0;
  let off = 0;
  const segs = data.map((d, i) => {
    const hi = highlight === i || highlight === d.label;
    const color = d.color || (hi ? "var(--accent)" : RAMP[Math.min(k++, RAMP.length - 1)]);
    const len = (d.value / total) * C;
    const s = { label: d.label, value: d.value, color, len, off };
    off += len;
    return s;
  });
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap", fontFamily: "var(--font-sans)", color: "var(--text)", ...style }}>
      <DonutRing segs={segs} size={size} r={r} C={C} thickness={thickness} centerValue={centerValue} centerLabel={centerLabel} />
      {legend ? <DonutLegend segs={segs} format={format} unit={unit} /> : null}
    </div>
  );
}

function DonutRing({ segs, size, r, C, thickness, centerValue, centerLabel }) {
  return (
    <div style={{ position: "relative", width: size, height: size, flexShrink: 0 }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }} aria-hidden="true">
        {segs.map(s => (
          <circle key={s.label} cx={size / 2} cy={size / 2} r={r} fill="none" stroke={s.color} strokeWidth={thickness} strokeDasharray={Math.max(s.len - 2, 0) + " " + C} strokeDashoffset={-s.off} />
        ))}
      </svg>
      <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4 }}>
        {centerValue != null ? <span style={{ fontSize: Math.round(size * 0.17), fontWeight: 300, letterSpacing: "-0.03em", lineHeight: 1 }}>{centerValue}</span> : null}
        {centerLabel ? <span style={{ fontSize: 10, letterSpacing: "var(--ls-track-md)", textTransform: "uppercase", color: "var(--text-muted)" }}>{centerLabel}</span> : null}
      </div>
    </div>
  );
}

function DonutLegend({ segs, format, unit }) {
  return (
    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10, flex: 1, minWidth: 160 }}>
      {segs.map(s => (
        <li key={s.label} style={{ display: "grid", gridTemplateColumns: "10px 1fr auto", gap: 12, alignItems: "center", fontSize: 13 }}>
          <span style={{ width: 10, height: 10, background: s.color }}></span>
          <span style={{ color: "var(--text-muted)" }}>{s.label}</span>
          <span style={{ fontVariantNumeric: "tabular-nums" }}>{format(s.value)}{unit}</span>
        </li>
      ))}
    </ul>
  );
}
