import React from "react";
import { Icon } from "../icons/Icon.jsx";

/** Status label: 11px tracked uppercase, 2px radius. `gold` marks state/key data; use sparingly. */
export function Badge({ variant = "neutral", icon, dot = false, children, style }) {
  const v = {
    neutral: { border: "1px solid var(--border)", color: "var(--text-muted)", background: "var(--bg)" },
    strong: { border: "1px solid var(--border-strong)", color: "var(--text)", background: "var(--bg)" },
    inverse: { border: "1px solid transparent", color: "var(--text-on-inverse)", background: "var(--bg-inverse)" },
    gold: { border: "1px solid var(--accent)", color: "var(--accent-text)", background: "var(--accent-wash)" },
    error: { border: "1px solid transparent", color: "var(--danger-text)", background: "var(--danger-bg)" },
    success: { border: "1px solid transparent", color: "var(--success)", background: "var(--success-bg)" },
    warning: { border: "1px solid transparent", color: "var(--warning)", background: "var(--warning-bg)" },
  }[variant] || {};
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, height: 22, padding: "0 8px", borderRadius: "var(--radius-sm)", fontFamily: "var(--font-sans)", fontSize: 11, fontWeight: 600, letterSpacing: "var(--ls-track-sm)", textTransform: "uppercase", lineHeight: 1, whiteSpace: "nowrap", boxSizing: "border-box", ...v, ...style }}>
      {dot ? <span style={{ width: 6, height: 6, borderRadius: "50%", background: variant === "gold" ? "var(--accent)" : variant === "error" ? "var(--danger)" : variant === "success" ? "var(--success)" : variant === "warning" ? "var(--warning)" : "currentColor" }} /> : null}
      {icon ? <Icon name={icon} size={12} /> : null}
      {children}
    </span>
  );
}
