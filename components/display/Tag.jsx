import React from "react";
import { Icon } from "../icons/Icon.jsx";

/** Selectable / removable chip (filters, suggested prompts, partner categories). Selected = gold border + gold wash. */
export function Tag({ children, selected = false, onClick, onRemove, icon, disabled = false, size = "md", style }) {
  const [hover, setHover] = React.useState(false);
  const h = size === "sm" ? 28 : 36;
  const clickable = !!onClick && !disabled;
  return (
    <span onClick={clickable ? onClick : undefined} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} role={onClick ? "button" : undefined} aria-pressed={onClick ? selected : undefined}
      style={{ display: "inline-flex", alignItems: "center", gap: 8, height: h, padding: size === "sm" ? "0 10px" : "0 14px", boxSizing: "border-box", borderRadius: "var(--radius-control)", fontFamily: "var(--font-sans)", fontSize: size === "sm" ? 12 : 13, lineHeight: 1, whiteSpace: "nowrap",
        border: `1px solid ${selected ? "var(--accent)" : hover && clickable ? "var(--color-outline)" : "var(--border)"}`, background: selected ? "var(--accent-wash)" : "var(--bg)", color: selected ? "var(--accent-text)" : "var(--text)",
        cursor: clickable ? "pointer" : "default", opacity: disabled ? 0.5 : 1, transition: "all var(--dur-fast) var(--ease-standard)", ...style }}>
      {icon ? <Icon name={icon} size={12} /> : null}
      {children}
      {onRemove ? <button type="button" aria-label="Remove" onClick={e => { e.stopPropagation(); onRemove(); }} style={{ display: "inline-flex", border: 0, background: "transparent", padding: 0, margin: "0 -4px 0 0", cursor: "pointer", color: "var(--text-muted)" }}><Icon name="x" size={12} /></button> : null}
    </span>
  );
}
