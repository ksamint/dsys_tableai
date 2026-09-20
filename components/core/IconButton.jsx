import React from "react";
import { Icon } from "../icons/Icon.jsx";

const SIZES = { sm: { box: 32, icon: 16 }, md: { box: 40, icon: 18 } };

/** Square icon-only button (nav menu, close, send, row actions). Always pass `label` for screen readers. */
export function IconButton({ icon, label, variant = "ghost", size = "md", active: pressed = false, disabled = false, loading = false, style, onClick, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const isDisabled = disabled || loading;
  const on = (pressed || down) && !isDisabled;
  const v = {
    ghost: { border: "1px solid transparent", background: on ? "var(--accent-wash)" : hover ? "var(--bg-container-low)" : "transparent", color: hover || on ? "var(--text)" : "var(--text-muted)" },
    outline: { border: `1px solid ${on ? "var(--accent)" : "var(--border-strong)"}`, background: on ? "var(--accent-wash)" : "var(--bg)", color: "var(--text)", boxShadow: hover && !on ? "inset 0 -1px 0 var(--accent)" : "none" },
    primary: { border: "1px solid transparent", background: hover ? "var(--color-deep-blue-muted)" : "var(--bg-inverse)", color: "var(--text-on-inverse)", boxShadow: on ? "inset 0 0 0 1px var(--accent)" : "none" },
  }[variant] || {};
  return (
    <button type="button" aria-label={label} title={label} aria-pressed={pressed || undefined} disabled={isDisabled}
      style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: s.box, height: s.box, padding: 0, borderRadius: "var(--radius-control)",
        cursor: isDisabled ? "not-allowed" : "pointer", opacity: isDisabled ? 0.45 : 1, transform: down && !isDisabled ? "scale(0.96)" : "none", flexShrink: 0,
        outline: focus ? "1px solid var(--focus-ring)" : "none", outlineOffset: 2, transition: "all var(--dur-fast) var(--ease-standard)", ...v, ...style }}
      onClick={isDisabled ? undefined : onClick} onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setDown(false); }}
      onMouseDown={() => setDown(true)} onMouseUp={() => setDown(false)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} {...rest}>
      <Icon name={loading ? "loader-circle" : icon} size={s.icon} style={loading ? { animation: "ta-spin 1s linear infinite" } : undefined} />
    </button>
  );
}
