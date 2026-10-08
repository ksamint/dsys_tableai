import React from "react";

/**
 * Numbered process / ladder (01 → 02 → 03). Hairline connectors; the `active` step gets a gold hairline and full-ink
 * text, completed steps stay ink, upcoming steps are muted.
 */
export function Steps({ items = [], active, orientation = "horizontal", numbered = true, style }) {
  const vertical = orientation === "vertical";
  const state = i => (active == null ? "idle" : i < active ? "done" : i === active ? "active" : "todo");
  return (
    <ol style={{ listStyle: "none", margin: 0, padding: 0, display: "grid", gridTemplateColumns: vertical ? "1fr" : `repeat(${items.length}, minmax(0,1fr))`, gap: vertical ? 0 : 24, fontFamily: "var(--font-sans)", color: "var(--text)", ...style }}>
      {items.map((it, i) => {
        const s = state(i);
        const ink = s === "todo" ? "var(--text-subtle)" : "var(--text)";
        const rule = s === "active" ? "var(--accent)" : s === "todo" ? "var(--border)" : "var(--border-strong)";
        return (
          <li key={i} aria-current={s === "active" ? "step" : undefined}
            style={vertical
              ? { display: "grid", gridTemplateColumns: "48px 1fr", gap: 16, paddingBottom: i < items.length - 1 ? 32 : 0, position: "relative" }
              : { borderTop: `${s === "active" ? 2 : 1}px solid ${rule}`, paddingTop: s === "active" ? 23 : 24, transition: "border-color var(--dur-base) var(--ease-standard)" }}>
            {vertical ? (
              <span style={{ position: "relative", display: "flex", justifyContent: "center" }}>
                <span style={{ width: 9, height: 9, marginTop: 6, borderRadius: "50%", background: s === "active" ? "var(--accent)" : s === "todo" ? "var(--bg)" : "var(--text)", border: `1px solid ${s === "active" ? "var(--accent)" : s === "todo" ? "var(--color-outline)" : "var(--text)"}`, zIndex: 1 }}></span>
                {i < items.length - 1 ? <span style={{ position: "absolute", top: 18, bottom: -26, width: 1, background: "var(--border)" }}></span> : null}
              </span>
            ) : null}
            <div>
              {numbered ? <span style={{ display: "block", marginBottom: 12, fontSize: 12, letterSpacing: "var(--ls-track-lg)", color: s === "active" ? "var(--accent-text)" : "var(--text-muted)" }}>{it.number || String(i + 1).padStart(2, "0")}</span> : null}
              <h4 style={{ margin: "0 0 8px", fontSize: 17, fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1.35, color: ink }}>{it.title}</h4>
              {it.description ? <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: s === "todo" ? "var(--text-subtle)" : "var(--text-muted)" }}>{it.description}</p> : null}
              {it.meta ? <p style={{ margin: "12px 0 0", fontSize: 11, letterSpacing: "var(--ls-track-md)", textTransform: "uppercase", color: "var(--text-subtle)" }}>{it.meta}</p> : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
