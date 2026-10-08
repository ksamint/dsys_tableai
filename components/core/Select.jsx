import React from "react";
import { Icon } from "../icons/Icon.jsx";
import { FieldLabel, fieldFrame } from "./Input.jsx";

/** Native select in the brand field frame with a hairline chevron. `options`: [{value,label}] or strings. */
export function Select({ label, hint, error, required, options = [], placeholder, size = "md", disabled = false, style, containerStyle, id, value, onChange, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const h = size === "sm" ? 32 : 40;
  const autoId = React.useId();
  const selId = id || "sel-" + autoId;
  const opts = options.map(o => (typeof o === "string" ? { value: o, label: o } : o));
  return (
    <FieldLabel label={label} hint={hint} error={error} required={required} htmlFor={selId} containerStyle={containerStyle}>
      <span style={{ ...fieldFrame({ focus, error, disabled }), height: h, padding: "0 12px", position: "relative", ...style }}>
        <select id={selId} disabled={disabled} value={value} onChange={onChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ flex: 1, minWidth: 0, appearance: "none", WebkitAppearance: "none", border: 0, outline: 0, background: "transparent", fontFamily: "var(--font-sans)", fontSize: 14, color: value === "" || value == null ? "var(--text-muted)" : "var(--text)", padding: 0, paddingRight: 24, height: "100%", cursor: disabled ? "not-allowed" : "pointer" }} {...rest}>
          {placeholder ? <option value="" disabled>{placeholder}</option> : null}
          {opts.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
        <Icon name="chevron-down" size={16} style={{ position: "absolute", right: 12, color: "var(--text-muted)", pointerEvents: "none" }} />
      </span>
    </FieldLabel>
  );
}
