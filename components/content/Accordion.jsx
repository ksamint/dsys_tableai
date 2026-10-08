import React from "react";
import { Icon } from "../icons/Icon.jsx";

/**
 * Hairline accordion (from the website's AI Labs details). Rows divided by 1px rules; "+" rotates to "×" when open.
 * Keyboard: header is a real button with aria-expanded / aria-controls.
 */
export function Accordion({ items = [], multiple = false, defaultOpen = [], indicator = "plus", style }) {
  const [open, setOpen] = React.useState(() => new Set(defaultOpen));
  const baseId = React.useId();
  const toggle = i => setOpen(prev => {
    const next = new Set(multiple ? prev : []);
    if (prev.has(i)) next.delete(i); else next.add(i);
    return next;
  });
  return (
    <div style={{ borderTop: "1px solid var(--border)", fontFamily: "var(--font-sans)", color: "var(--text)", ...style }}>
      {items.map((it, i) => {
        const on = open.has(i);
        const panelId = baseId + "-p" + i;
        return (
          <div key={i} style={{ borderBottom: "1px solid var(--border)" }}>
            <button type="button" aria-expanded={on} aria-controls={panelId} onClick={() => toggle(i)}
              style={{ all: "unset", boxSizing: "border-box", width: "100%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "24px 0" }}>
              <span style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                {it.number ? <span style={{ fontSize: 12, letterSpacing: "var(--ls-track-lg)", color: "var(--text-muted)" }}>{it.number}</span> : null}
                <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-0.01em" }}>{it.title}</span>
              </span>
              {indicator === "chevron"
                ? <Icon name="chevron-down" size={14} style={{ color: "var(--text-muted)", transform: on ? "rotate(180deg)" : "none", transition: "transform var(--dur-fast) var(--ease-standard)" }} />
                : <span aria-hidden="true" style={{ fontSize: 18, lineHeight: 1, color: "var(--text-muted)", transform: on ? "rotate(45deg)" : "none", transition: "transform var(--dur-fast) var(--ease-standard)" }}>+</span>}
            </button>
            <div id={panelId} role="region" hidden={!on} style={{ paddingBottom: 24, fontSize: 14, lineHeight: 1.7, color: "var(--text-muted)", maxWidth: 760 }}>
              {it.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
