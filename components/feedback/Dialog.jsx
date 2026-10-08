import React from "react";
import { Icon } from "../icons/Icon.jsx";
import { Button } from "../core/Button.jsx";

/** Modal: deep-blue scrim, white panel, 4px radius, hairline border. Escape and scrim click close. */
export function Dialog({ open = false, onClose, title, eyebrow, description, children, actions, width = 480, closeButton = true, style }) {
  const panel = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const prev = document.activeElement;
    const focusables = () => panel.current ? [...panel.current.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')].filter(el => !el.disabled) : [];
    const first = focusables()[0];
    (first || panel.current) && (first || panel.current).focus();
    const onKey = e => {
      if (e.key === "Escape" && onClose) onClose();
      if (e.key !== "Tab") return;
      const f = focusables(); if (!f.length) return;
      const a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("keydown", onKey); prev && prev.focus && prev.focus(); };
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div role="presentation" onClick={onClose} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(10,22,38,0.45)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24, animation: "ta-reveal-up var(--dur-fast) var(--ease-standard) both", "--reveal-offset": "0px", "--reveal-blur": "0px" }}>
      <div ref={panel} tabIndex={-1} role="dialog" aria-modal="true" aria-label={typeof title === "string" ? title : undefined} onClick={e => e.stopPropagation()}
        style={{ width: "100%", maxWidth: width, background: "var(--bg)", color: "var(--text)", border: "1px solid var(--border)", borderRadius: "var(--radius-dialog)", padding: 32, boxSizing: "border-box", fontFamily: "var(--font-sans)", position: "relative", animation: "ta-reveal-up var(--dur-base) var(--ease-standard) both", "--reveal-offset": "16px", "--reveal-blur": "4px", ...style }}>
        {closeButton ? <button type="button" aria-label="Close" onClick={onClose} style={{ position: "absolute", top: 16, right: 16, background: "transparent", border: 0, padding: 6, cursor: "pointer", color: "var(--text-muted)", display: "inline-flex" }}><Icon name="x" size={16} /></button> : null}
        {eyebrow ? <p style={{ margin: "0 0 12px", fontSize: 12, letterSpacing: "var(--ls-track-xl)", textTransform: "uppercase", color: "var(--text-muted)" }}>{eyebrow}</p> : null}
        {title ? <h2 style={{ margin: 0, fontSize: 24, fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.3 }}>{title}</h2> : null}
        {description ? <p style={{ margin: "12px 0 0", fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)" }}>{description}</p> : null}
        {children ? <div style={{ marginTop: 24 }}>{children}</div> : null}
        {actions ? <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, marginTop: 32 }}>{actions}</div> : null}
      </div>
    </div>
  );
}

/** Two-button confirm built on Dialog. */
export function ConfirmDialog({ open, onClose, onConfirm, title = "Are you sure?", description, confirmLabel = "Confirm", cancelLabel = "Cancel", danger = false, loading = false }) {
  return (
    <Dialog open={open} onClose={onClose} title={title} description={description}
      actions={<><Button variant="ghost" onClick={onClose}>{cancelLabel}</Button><Button variant={danger ? "danger" : "primary"} loading={loading} onClick={onConfirm}>{confirmLabel}</Button></>} />
  );
}
