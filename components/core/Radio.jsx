import React from "react";

/** Radio: 16px ring; selected shows a Sundial Gold dot inside a deep-blue ring (active state = gold). */
export function Radio({ checked = false, onChange, name, value, label, description, disabled = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  return (
    <label style={{ display: "inline-flex", alignItems: "flex-start", gap: 12, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, fontFamily: "var(--font-sans)", color: "var(--text)", ...style }}>
      <span style={{ position: "relative", width: 16, height: 16, flexShrink: 0, marginTop: label ? 2 : 0, borderRadius: "50%", boxSizing: "border-box",
        border: `1px solid ${checked ? "var(--border-strong)" : "var(--color-outline)"}`, background: "var(--bg)", display: "inline-flex", alignItems: "center", justifyContent: "center",
        outline: focus ? "1px solid var(--focus-ring)" : "none", outlineOffset: 2, transition: "all var(--dur-fast) var(--ease-standard)" }}>
        <input type="radio" name={name} value={value} checked={checked} disabled={disabled} onChange={e => onChange && onChange(value, e)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ position: "absolute", inset: 0, opacity: 0, margin: 0, cursor: "inherit" }} {...rest} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", transform: checked ? "scale(1)" : "scale(0)", transition: "transform var(--dur-fast) var(--ease-standard)" }} />
      </span>
      {label ? <span style={{ display: "flex", flexDirection: "column", gap: 2 }}><span style={{ fontSize: 14, lineHeight: 1.4 }}>{label}</span>{description ? <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{description}</span> : null}</span> : null}
    </label>
  );
}

/** Vertical or horizontal group of Radio items. `options`: [{value,label,description?}]. */
export function RadioGroup({ name, value, onChange, options = [], direction = "column", gap = 12, style }) {
  return (
    <div role="radiogroup" style={{ display: "flex", flexDirection: direction, gap, ...style }}>
      {options.map(o => <Radio key={o.value} name={name} value={o.value} label={o.label} description={o.description} disabled={o.disabled} checked={value === o.value} onChange={onChange} />)}
    </div>
  );
}
