import React from "react";
import { Icon } from "../icons/Icon.jsx";

const ICONS = { info: "info", success: "circle-check", error: "circle-alert", loading: "loader-circle" };

/** Transient notice: white panel, hairline border, 4px radius, leading glyph (gold for success). No coloured side bar. */
export function Toast({ variant = "info", title, description, action, onDismiss, style }) {
  const iconColor = { info: "var(--text-muted)", success: "var(--accent-text)", error: "var(--danger)", loading: "var(--text-muted)" }[variant];
  return (
    <div role="status" style={{ display: "flex", alignItems: "flex-start", gap: 12, width: 360, maxWidth: "100%", padding: "14px 16px", boxSizing: "border-box", background: "var(--bg)", color: "var(--text)", border: "1px solid var(--border)", borderRadius: "var(--radius-dialog)", boxShadow: "var(--shadow-lift)", fontFamily: "var(--font-sans)", animation: "ta-reveal-up var(--dur-base) var(--ease-standard) both", "--reveal-offset": "12px", "--reveal-blur": "2px", ...style }}>
      <Icon name={ICONS[variant] || "info"} size={16} style={{ color: iconColor, marginTop: 1, animation: variant === "loading" ? "ta-spin 1s linear infinite" : "none" }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        {title ? <div style={{ fontSize: 14, fontWeight: 500, lineHeight: 1.4 }}>{title}</div> : null}
        {description ? <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--text-muted)", marginTop: title ? 2 : 0 }}>{description}</div> : null}
        {action ? <div style={{ marginTop: 8 }}>{action}</div> : null}
      </div>
      {onDismiss ? <button type="button" aria-label="Dismiss" onClick={onDismiss} style={{ background: "transparent", border: 0, padding: 2, cursor: "pointer", color: "var(--text-subtle)", display: "inline-flex" }}><Icon name="x" size={14} /></button> : null}
    </div>
  );
}

/** Fixed stack for toasts (bottom-right by default). */
export function ToastStack({ children, position = "bottom-right", style }) {
  const pos = { "bottom-right": { bottom: 24, right: 24 }, "bottom-left": { bottom: 24, left: 24 }, "top-right": { top: 24, right: 24 }, "top-center": { top: 24, left: "50%", transform: "translateX(-50%)" } }[position];
  return <div style={{ position: "fixed", zIndex: 110, display: "flex", flexDirection: "column", gap: 8, ...pos, ...style }}>{children}</div>;
}
