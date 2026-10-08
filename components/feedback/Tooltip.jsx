import React from "react";

/** Hover/focus tooltip: deep-blue panel, white 12px text, 2px radius. Wraps a single trigger child. */
export function Tooltip({ content, side = "top", delay = 150, children, style }) {
  const [open, setOpen] = React.useState(false);
  const timer = React.useRef();
  const id = React.useId();
  const show = () => { timer.current = setTimeout(() => setOpen(true), delay); };
  const hide = () => { clearTimeout(timer.current); setOpen(false); };
  const pos = { top: { bottom: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" }, bottom: { top: "calc(100% + 8px)", left: "50%", transform: "translateX(-50%)" }, left: { right: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" }, right: { left: "calc(100% + 8px)", top: "50%", transform: "translateY(-50%)" } }[side];
  return (
    <span style={{ position: "relative", display: "inline-flex", ...style }} onMouseEnter={show} onMouseLeave={hide} onFocus={show} onBlur={hide} onKeyDown={e => { if (e.key === "Escape") hide(); }}>
      {React.isValidElement(children) ? React.cloneElement(children, { "aria-describedby": id }) : children}
      {open ? <span id={id} role="tooltip" style={{ position: "absolute", zIndex: 120, whiteSpace: "nowrap", padding: "6px 10px", background: "var(--bg-inverse)", color: "var(--text-on-inverse)", fontFamily: "var(--font-sans)", fontSize: 12, lineHeight: 1.4, letterSpacing: "0.02em", borderRadius: "var(--radius-sm)", pointerEvents: "none", animation: "ta-reveal-up var(--dur-fast) var(--ease-standard) both", "--reveal-offset": "4px", "--reveal-blur": "0px", ...pos }}>{content}</span> : null}
    </span>
  );
}
