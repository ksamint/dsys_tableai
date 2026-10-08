import React from "react";
import { FieldLabel, fieldFrame } from "./Input.jsx";

/** Multi-line field. Same frame as Input; `autoGrow` expands with content (used by the chat composer). */
export function Textarea({ label, hint, error, required, rows = 3, autoGrow = false, maxHeight = 160, disabled = false, style, containerStyle, id, onChange, value, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!autoGrow || !ref.current) return;
    ref.current.style.height = "auto";
    ref.current.style.height = Math.min(ref.current.scrollHeight, maxHeight) + "px";
  }, [value, autoGrow, maxHeight]);
  const autoId = React.useId();
  const areaId = id || "ta-" + autoId;
  return (
    <FieldLabel label={label} hint={hint} error={error} required={required} htmlFor={areaId} containerStyle={containerStyle}>
      <span style={{ ...fieldFrame({ focus, error, disabled }), padding: "10px 12px", ...style }}>
        <textarea ref={ref} id={areaId} rows={rows} disabled={disabled} value={value} onChange={onChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} aria-invalid={!!error || undefined}
          style={{ flex: 1, minWidth: 0, border: 0, outline: 0, background: "transparent", resize: autoGrow ? "none" : "vertical", fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.5, color: "var(--text)", padding: 0, maxHeight: autoGrow ? maxHeight : undefined, overflowY: "auto" }} {...rest} />
      </span>
    </FieldLabel>
  );
}
