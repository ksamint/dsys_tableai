import React from "react";
import { Icon } from "../icons/Icon.jsx";

const SIZES = {
  sm: { height: 32, padding: "0 12px", fontSize: 13, gap: 8, icon: 14 },
  md: { height: 40, padding: "0 20px", fontSize: 14, gap: 10, icon: 16 },
  lg: { height: 56, padding: "0 32px", fontSize: 14, gap: 12, icon: 16 },
};

function variantStyle(variant, { hover, active, disabled }) {
  const base = { border: "1px solid transparent", background: "transparent", color: "var(--text)" };
  switch (variant) {
    case "cta": // Sundial Dark Gold — reserved for the single key conversion action on a view
      return { ...base, background: hover ? "var(--accent-hover)" : "var(--accent)", color: "var(--text)", borderColor: "transparent",
        boxShadow: active ? "inset 0 0 0 1px var(--color-gold-deep)" : "none" };
    case "outline":
      return { ...base, borderColor: active ? "var(--accent)" : "var(--border-strong)", color: "var(--text)",
        background: active ? "var(--accent-wash)" : "var(--bg)",
        boxShadow: hover && !active ? "inset 0 -1px 0 var(--accent)" : "none" };
    case "ghost":
      return { ...base, color: hover ? "var(--text)" : "var(--text-muted)", background: active ? "var(--accent-wash)" : hover ? "var(--bg-container-low)" : "transparent" };
    case "link":
      return { ...base, color: hover ? "var(--accent-text)" : "var(--text)", padding: 0, height: "auto", textDecoration: "none",
        boxShadow: hover ? "inset 0 -1px 0 currentColor" : "inset 0 -1px 0 var(--border)" };
    case "danger":
      return { ...base, borderColor: "var(--danger)", color: hover ? "var(--bg)" : "var(--danger)", background: hover ? "var(--danger)" : "var(--bg)" };
    case "primary":
    default:
      return { ...base, background: hover ? "var(--color-deep-blue-muted)" : "var(--bg-inverse)", color: "var(--text-on-inverse)",
        boxShadow: active ? "inset 0 0 0 1px var(--accent)" : "none" };
  }
}

/** TABLE AI button. Deep-blue structure by default; `cta` is the one gold conversion action per view. */
export function Button({ variant = "primary", size = "md", icon, iconRight, loading = false, disabled = false, block = false, as, href, children, style, onClick, type = "button", ...rest }) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const s = SIZES[size] || SIZES.md;
  const isDisabled = disabled || loading;
  const vs = variantStyle(variant, { hover: hover && !isDisabled, active: active && !isDisabled, disabled: isDisabled });
  const Comp = as || (href ? "a" : "button");
  const styles = {
    display: block ? "flex" : "inline-flex", width: block ? "100%" : undefined, alignItems: "center", justifyContent: "center", gap: s.gap,
    height: variant === "link" ? "auto" : s.height, padding: variant === "link" ? 0 : s.padding, fontFamily: "var(--font-sans)", fontSize: s.fontSize,
    fontWeight: 500, letterSpacing: "0.02em", lineHeight: 1, borderRadius: "var(--radius-control)", cursor: isDisabled ? "not-allowed" : "pointer",
    opacity: isDisabled ? 0.45 : 1, whiteSpace: "nowrap", userSelect: "none", textDecoration: "none", boxSizing: "border-box",
    transform: active && !isDisabled && variant !== "link" ? "scale(0.98)" : "none",
    transition: "background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)",
    outline: focus ? "var(--focus-ring-width) solid var(--focus-ring)" : "none", outlineOffset: 2, ...vs, ...style,
  };
  return (
    <Comp type={Comp === "button" ? type : undefined} href={href} disabled={Comp === "button" ? isDisabled : undefined} aria-disabled={isDisabled || undefined}
      style={styles} onClick={isDisabled ? undefined : onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)} onMouseUp={() => setActive(false)} onFocus={e => setFocus(e.currentTarget.matches(":focus-visible"))} onBlur={() => setFocus(false)} {...rest}>
      {loading ? <Icon name="loader-circle" size={s.icon} style={{ animation: "ta-spin 1s linear infinite" }} /> : icon ? <Icon name={icon} size={s.icon} /> : null}
      {children}
      {iconRight && !loading ? <Icon name={iconRight} size={s.icon} /> : null}
    </Comp>
  );
}
