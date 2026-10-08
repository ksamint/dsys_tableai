import React from "react";

/** Toggle: 36×20 track. Off = hairline grey; on = deep blue. The only fully rounded control in the system. */
export function Switch({ checked = false, onChange, label, description, disabled = false, size = "md", style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const w = size === "sm" ? 28 : 36, h = size === "sm" ? 16 : 20, k = h - 4;
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 12, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, fontFamily: "var(--font-sans)", color: "var(--text)", ...style }}>
      <span aria-hidden="false" style={{ position: "relative", width: w, height: h, borderRadius: "var(--radius-full)", flexShrink: 0, boxSizing: "border-box",
        background: checked ? "var(--bg-inverse)" : "var(--color-outline-variant)", outline: focus ? "var(--focus-ring-width) solid var(--focus-ring)" : "none", outlineOffset: 2,
        transition: "background var(--dur-fast) var(--ease-standard)" }}>
        <input type="checkbox" role="switch" checked={checked} disabled={disabled} onChange={e => onChange && onChange(e.target.checked, e)} aria-checked={checked} onFocus={e => setFocus(e.currentTarget.matches(":focus-visible"))} onBlur={() => setFocus(false)}
          style={{ position: "absolute", inset: 0, opacity: 0, margin: 0, cursor: "inherit" }} {...rest} />
        <span style={{ position: "absolute", top: 2, left: 2, width: k, height: k, borderRadius: "50%", background: "var(--bg)", transform: checked ? `translateX(${w - h}px)` : "translateX(0)", transition: "transform var(--dur-fast) var(--ease-standard)" }} />
      </span>
      {label ? <span style={{ display: "flex", flexDirection: "column", gap: 2 }}><span style={{ fontSize: 14, lineHeight: 1.4 }}>{label}</span>{description ? <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{description}</span> : null}</span> : null}
    </label>
  );
}
