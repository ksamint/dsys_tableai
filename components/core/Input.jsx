import React from "react";
import { Icon } from "../icons/Icon.jsx";

export function fieldFrame({ focus, error, disabled }) {
  return {
    display: "flex", alignItems: "center", width: "100%", boxSizing: "border-box", background: disabled ? "var(--bg-container-low)" : focus ? "var(--accent-wash)" : "var(--bg)",
    border: `1px solid ${error ? "var(--danger)" : focus ? "var(--accent)" : "var(--border)"}`, borderRadius: "var(--radius-control)",
    transition: "border-color var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard)",
    opacity: disabled ? 0.6 : 1,
  };
}

export function FieldLabel({ label, hint, error, required, htmlFor, children, containerStyle }) {
  return (
    <label htmlFor={htmlFor} style={{ display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-sans)", color: "var(--text)", minWidth: 0, ...containerStyle }}>
      {label ? <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: "var(--text-muted)" }}>{label}{required ? <span style={{ color: "var(--accent-text)" }}> *</span> : null}</span> : null}
      {children}
      {error ? <span style={{ fontSize: 12, color: "var(--danger)", display: "flex", alignItems: "center", gap: 6 }}><Icon name="circle-alert" size={12} />{error}</span>
        : hint ? <span style={{ fontSize: 12, color: "var(--text-subtle)" }}>{hint}</span> : null}
    </label>
  );
}

/** Text input: hairline field, gold border + gold-mist wash on focus, red on error. */
export function Input({ label, hint, error, required, icon, prefix, suffix, size = "md", disabled = false, style, containerStyle, id, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "sm" ? 32 : 40;
  const inputId = id || (label ? "in-" + label.replace(/\W+/g, "-").toLowerCase() : undefined);
  return (
    <FieldLabel label={label} hint={hint} error={error} required={required} htmlFor={inputId} containerStyle={containerStyle}>
      <span style={{ ...fieldFrame({ focus, error, disabled }), height: h, padding: "0 12px", gap: 8, ...style }}>
        {icon ? <Icon name={icon} size={16} style={{ color: "var(--text-muted)" }} /> : null}
        {prefix ? <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{prefix}</span> : null}
        <input id={inputId} disabled={disabled} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} aria-invalid={!!error || undefined}
          style={{ flex: 1, minWidth: 0, border: 0, outline: 0, background: "transparent", fontFamily: "var(--font-sans)", fontSize: 14, color: "var(--text)", padding: 0, height: "100%" }} {...rest} />
        {suffix ? <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{suffix}</span> : null}
      </span>
    </FieldLabel>
  );
}
