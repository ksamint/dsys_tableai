import React from "react";

/** Underline tabs. Inactive = muted 13px tracked text; active = deep-blue text with a 1px Sundial Gold rule. */
export function Tabs({ items = [], value, onChange, size = "md", stretch = false, style }) {
  const [hoverKey, setHoverKey] = React.useState(null);
  const refs = React.useRef([]);
  const enabled = items.map((it, i) => (it.disabled ? -1 : i)).filter(i => i >= 0);
  const onKey = (e, i) => {
    const pos = enabled.indexOf(i);
    let next = null;
    if (e.key === "ArrowRight") next = enabled[(pos + 1) % enabled.length];
    else if (e.key === "ArrowLeft") next = enabled[(pos - 1 + enabled.length) % enabled.length];
    else if (e.key === "Home") next = enabled[0];
    else if (e.key === "End") next = enabled[enabled.length - 1];
    if (next == null) return;
    e.preventDefault();
    const it = items[next];
    refs.current[next] && refs.current[next].focus();
    onChange && onChange(it.value ?? it.label);
  };
  return (
    <div role="tablist" style={{ display: "flex", gap: stretch ? 0 : 4, borderBottom: "1px solid var(--border)", fontFamily: "var(--font-sans)", ...style }}>
      {items.map((it, i) => {
        const key = it.value ?? it.label;
        const active = key === value;
        const hover = hoverKey === key;
        return (
          <button key={key} ref={el => (refs.current[i] = el)} role="tab" type="button" aria-selected={active} tabIndex={active ? 0 : -1} aria-controls={it.panelId} id={it.tabId} onKeyDown={e => onKey(e, i)} disabled={it.disabled} onClick={() => onChange && onChange(key)} onMouseEnter={() => setHoverKey(key)} onMouseLeave={() => setHoverKey(null)}
            style={{ flex: stretch ? 1 : undefined, position: "relative", background: "transparent", border: 0, padding: size === "sm" ? "10px 12px" : "14px 16px", marginBottom: -1, cursor: it.disabled ? "not-allowed" : "pointer", opacity: it.disabled ? 0.4 : 1,
              fontFamily: "inherit", fontSize: size === "sm" ? 12 : 13, letterSpacing: "0.05em", color: active || hover ? "var(--text)" : "var(--text-muted)",
              borderBottom: `1px solid ${active ? "var(--accent)" : "transparent"}`, transition: "color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)", display: "inline-flex", alignItems: "center", gap: 8, whiteSpace: "nowrap" }}>
            {it.label}
            {it.count != null ? <span style={{ fontSize: 11, color: active ? "var(--accent-text)" : "var(--text-subtle)" }}>{it.count}</span> : null}
          </button>
        );
      })}
    </div>
  );
}
