import React from "react";
import { Icon } from "../icons/Icon.jsx";

/**
 * Website header (client/src/components/Navbar.tsx): A2A mark + spaced wordmark, 13px tracked links with a hairline
 * active indicator, and the bordered 11px language toggle. `glass` = scrolled state (white 70% + 20px blur + hairline).
 */
export function NavBar({ logoSrc, brand = "TABLE AI", items = [], activeHref, onNavigate, lang = "en", onToggleLang, glass = false, fixed = false, height = 64, maxWidth = 1152, right, style }) {
  const [hoverHref, setHoverHref] = React.useState(null);
  const [langHover, setLangHover] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const go = (e, href) => { if (onNavigate) { e.preventDefault(); onNavigate(href); } setMenuOpen(false); };
  return (
    <header style={{ position: fixed ? "fixed" : "sticky", top: 0, left: 0, right: 0, zIndex: 50, fontFamily: "var(--font-sans)", color: "var(--text)",
      background: glass ? "rgba(255,255,255,0.7)" : "transparent", backdropFilter: glass ? "blur(20px) saturate(180%)" : "none", WebkitBackdropFilter: glass ? "blur(20px) saturate(180%)" : "none",
      borderBottom: `1px solid ${glass ? "var(--border-line)" : "transparent"}`, transition: "all var(--dur-slow) var(--ease-standard)", ...style }}>
      <div style={{ maxWidth, margin: "0 auto", padding: "0 16px", height, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="/" onClick={e => go(e, "/")} style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "inherit" }}>
          {logoSrc ? <img src={logoSrc} alt={brand} style={{ width: 32, height: 32, objectFit: "contain" }} /> : null}
          <span style={{ fontSize: 14, fontWeight: 500, letterSpacing: "0.1em" }}>{brand}</span>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 4 }} className="ta-nav-links">
          {items.map(it => {
            const active = it.href === activeHref;
            const hover = hoverHref === it.href;
            return (
              <a key={it.href} href={it.href} onClick={e => go(e, it.href)} onMouseEnter={() => setHoverHref(it.href)} onMouseLeave={() => setHoverHref(null)}
                style={{ position: "relative", padding: "8px 16px", fontSize: 13, letterSpacing: "0.025em", color: active || hover ? "var(--text)" : "var(--text-muted)", textDecoration: "none", transform: hover ? "translateY(-1px)" : "none", transition: "all var(--dur-fast) var(--ease-standard)" }}>
                {it.label}
                {active ? <span style={{ position: "absolute", bottom: 0, left: 16, right: 16, height: 1, background: "var(--text)" }} /> : null}
              </a>
            );
          })}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {right}
          {onToggleLang ? (
            <button type="button" onClick={onToggleLang} onMouseEnter={() => setLangHover(true)} onMouseLeave={() => setLangHover(false)} aria-label="Toggle language"
              style={{ padding: "6px 12px", fontFamily: "inherit", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", background: "transparent", cursor: "pointer", color: langHover ? "var(--text)" : "var(--text-muted)",
                border: `1px solid ${langHover ? "rgba(10,22,38,0.3)" : "rgba(197,198,205,0.6)"}`, borderRadius: "var(--radius-control)", transition: "all var(--dur-fast) var(--ease-standard)", transform: langHover ? "scale(1.05)" : "none" }}>
              {lang === "zh" ? "EN" : "中"}
            </button>
          ) : null}
          <button type="button" className="ta-nav-menu" aria-label="Menu" onClick={() => setMenuOpen(o => !o)} style={{ display: "none", background: "transparent", border: 0, padding: 6, cursor: "pointer", color: "var(--text)" }}>
            <Icon name={menuOpen ? "x" : "menu"} size={20} />
          </button>
        </div>
      </div>
      {menuOpen ? (
        <div style={{ position: "fixed", inset: 0, top: height, background: "rgba(255,255,255,0.98)", backdropFilter: "blur(24px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 32, zIndex: 40 }}>
          {items.map(it => <a key={it.href} href={it.href} onClick={e => go(e, it.href)} style={{ fontSize: 24, fontWeight: 300, letterSpacing: "0.025em", color: it.href === activeHref ? "var(--text)" : "var(--text-muted)", textDecoration: "none" }}>{it.label}</a>)}
        </div>
      ) : null}
      <style>{`@media (max-width: 767px){ .ta-nav-links{display:none !important} .ta-nav-menu{display:inline-flex !important} }`}</style>
    </header>
  );
}
