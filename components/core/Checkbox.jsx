import React from "react";
import { Icon } from "../icons/Icon.jsx";

/** 16px square, 2px radius, deep-blue border; checked fills deep blue with a white check. Gold ring on focus. */
export function Checkbox({ checked = false, indeterminate = false, onChange, label, description, disabled = false, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const on = checked || indeterminate;
  return (
    <label style={{ display: "inline-flex", alignItems: "flex-start", gap: 12, cursor: disabled ? "not-allowed" : "pointer", opacity: disabled ? 0.5 : 1, fontFamily: "var(--font-sans)", color: "var(--text)", ...style }}>
      <span style={{ position: "relative", width: 16, height: 16, flexShrink: 0, marginTop: label ? 2 : 0, borderRadius: "var(--radius-sm)", boxSizing: "border-box",
        border: `1px solid ${on ? "var(--border-strong)" : "var(--color-outline)"}`, background: on ? "var(--bg-inverse)" : "var(--bg)", display: "inline-flex", alignItems: "center", justifyContent: "center",
        outline: focus ? "1px solid var(--focus-ring)" : "none", outlineOffset: 2, transition: "all var(--dur-fast) var(--ease-standard)" }}>
        <input type="checkbox" checked={checked} disabled={disabled} onChange={e => onChange && onChange(e.target.checked, e)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          style={{ position: "absolute", inset: 0, opacity: 0, margin: 0, cursor: "inherit" }} {...rest} />
        {indeterminate ? <Icon name="minus" size={12} strokeWidth={2} color="var(--text-on-inverse)" /> : checked ? <Icon name="check" size={12} strokeWidth={2} color="var(--text-on-inverse)" /> : null}
      </span>
      {label ? <span style={{ display: "flex", flexDirection: "column", gap: 2 }}><span style={{ fontSize: 14, lineHeight: 1.4 }}>{label}</span>{description ? <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{description}</span> : null}</span> : null}
    </label>
  );
}
