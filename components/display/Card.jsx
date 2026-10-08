import React from "react";
import { Icon } from "../icons/Icon.jsx";

/**
 * Card / tile. Square corners, hairline border, white ground. `variant="tile"` is for gap-1px grids on a border-coloured
 * background (the website's signature layout); `variant="dark"` is a deep-blue panel; `interactive` adds the .min-card hover.
 */
export function Card({ variant = "outline", interactive = false, padding = 32, eyebrow, number, title, description, footer, arrow = false, href, onClick, children, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const isLink = !!(href || onClick || interactive);
  const dark = variant === "dark";
  const v = {
    outline: { background: "var(--bg)", border: `1px solid ${hover && isLink ? "var(--color-outline)" : "var(--border)"}` },
    tile: { background: hover && isLink ? "var(--bg-container-low)" : "var(--bg)", border: "1px solid transparent" },
    dark: { background: "var(--bg-inverse-soft)", border: "1px solid var(--border-on-dark)", color: "var(--text-on-inverse)" },
    dashed: { background: "var(--bg)", border: "1px dashed var(--color-outline)" },
    surface: { background: "var(--bg-container-low)", border: "1px solid transparent" },
  }[variant] || {};
  const Comp = href ? "a" : "div";
  const muted = dark ? "var(--text-on-inverse-muted)" : "var(--text-muted)";
  return (
    <Comp href={href} onClick={onClick} role={onClick && !href ? "button" : undefined} tabIndex={onClick && !href ? 0 : undefined}
      onKeyDown={onClick && !href ? e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onClick(e); } } : undefined}
      onFocus={e => setHover(e.currentTarget.matches(":focus-visible"))} onBlur={() => setHover(false)} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: "flex", flexDirection: "column", boxSizing: "border-box", padding, borderRadius: "var(--radius-card)", color: "var(--text)", textDecoration: "none", position: "relative",
        cursor: isLink ? "pointer" : "default", transform: hover && isLink && variant !== "tile" ? "translateY(-2px)" : "none",
        transition: "transform var(--dur-slow) var(--ease-standard), background var(--dur-slow) var(--ease-standard), border-color var(--dur-slow) var(--ease-standard)", fontFamily: "var(--font-sans)", ...v, ...style }} {...rest}>
      {(number || arrow) ? (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 32 }}>
          <span style={{ fontSize: 12, letterSpacing: "var(--ls-track-xl)", color: muted }}>{number}</span>
          {arrow ? <Icon name="arrow-up-right" size={16} style={{ color: dark ? "var(--accent-on-dark)" : "var(--text)", opacity: hover ? 1 : 0, transform: hover ? "translateY(0)" : "translateY(4px)", transition: "all var(--dur-fast) var(--ease-standard)" }} /> : null}
        </div>
      ) : null}
      {eyebrow ? <p style={{ margin: "0 0 16px", fontSize: 12, letterSpacing: "var(--ls-track-lg)", textTransform: "uppercase", color: muted }}>{eyebrow}</p> : null}
      {title ? <h3 style={{ margin: "0 0 16px", fontSize: 20, fontWeight: 400, letterSpacing: "-0.02em", lineHeight: 1.3, color: "inherit" }}>{title}</h3> : null}
      {description ? <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: muted }}>{description}</p> : null}
      {children}
      {footer ? <div style={{ marginTop: "auto", paddingTop: 24, borderTop: `1px solid ${dark ? "var(--border-on-dark)" : "var(--border)"}`, fontSize: 12, letterSpacing: "var(--ls-track-md)", textTransform: "uppercase", color: hover ? (dark ? "var(--text-on-inverse)" : "var(--text)") : muted, transition: "color var(--dur-fast)" }}>{footer}</div> : null}
    </Comp>
  );
}

/** Wrap Card variant="tile" children in a hairline grid: 1px gaps painted by the border colour. */
export function TileGrid({ columns = 3, minWidth, children, style }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: minWidth ? `repeat(auto-fit, minmax(${minWidth}px, 1fr))` : `repeat(${columns}, minmax(0, 1fr))`, gap: 1, background: "var(--border)", border: "1px solid var(--border)", ...style }}>
      {children}
    </div>
  );
}
