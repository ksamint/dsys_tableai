const DS = window.TableAIDesignSystem_f48f27;
const { Eyebrow, Button, Icon, Divider } = DS;

/* ── Language context: t(B) picks {zh,en} by current lang (falls back like LanguageContext.tsx) ── */
const LangContext = React.createContext({ lang: "en", t: b => (typeof b === "string" ? b : b.en) });
function useLang() { return React.useContext(LangContext); }
function LangProvider({ lang, children }) {
  const t = React.useCallback(b => (b == null ? "" : typeof b === "string" ? b : (lang === "en" ? (b.en || b.zh) : (b.zh || b.en)) || ""), [lang]);
  return <LangContext.Provider value={{ lang, t }}>{children}</LangContext.Provider>;
}

/* ── Router context (hash based) ── */
const RouteContext = React.createContext({ path: "/", go: () => {} });
function useRoute() { return React.useContext(RouteContext); }
function A({ href, children, className, style, ...rest }) {
  const { go } = useRoute();
  return <a href={"#" + href} className={className} style={style} onClick={e => { e.preventDefault(); go(href); }} {...rest}>{children}</a>;
}

/* ── Scroll reveal (framer-motion useInView → IntersectionObserver, once) ── */
function Reveal({ children, delay = 0, className = "", style }) {
  const ref = React.useRef(null);
  const [on, setOn] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    if (!("IntersectionObserver" in window)) { setOn(true); return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect(); } }, { rootMargin: "-60px 0px" });
    io.observe(el); return () => io.disconnect();
  }, []);
  return <div ref={ref} className={className} style={{ opacity: on ? 1 : 0, transform: on ? "none" : "translateY(50px)", filter: on ? "none" : "blur(6px)", transition: `opacity .8s var(--ease-standard) ${delay}s, transform .8s var(--ease-standard) ${delay}s, filter .8s var(--ease-standard) ${delay}s`, ...style }}>{children}</div>;
}

function Container({ size = "default", children, className = "", style }) {
  const w = { wide: 1152, default: 1152, narrow: 1024, text: 896, cta: 896 }[size] || 1152;
  return <div className={"container " + className} style={{ maxWidth: w, ...style }}>{children}</div>;
}

function Section({ children, tinted = false, gridBg = false, borderTop = true, size = "default", className = "", style, pad = "lg" }) {
  return (
    <section className={`section section-${pad} ${tinted ? "tinted" : ""} ${borderTop ? "bt" : ""} ${className}`} style={style}>
      {gridBg ? <div className="grid-bg" aria-hidden="true" /> : null}
      <Container size={size} style={{ position: "relative", zIndex: 1 }}>{children}</Container>
    </section>
  );
}

/* Section header: eyebrow + light h2 (+ optional right slot) */
function SectionHead({ eyebrow, title, right, children, mb = 64 }) {
  return (
    <Reveal style={{ marginBottom: mb }}>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
        <div>
          {eyebrow ? <Eyebrow style={{ marginBottom: 24 }}>{eyebrow}</Eyebrow> : null}
          {title ? <h2 className="h2">{title}</h2> : null}
          {children}
        </div>
        {right}
      </div>
    </Reveal>
  );
}

/* Sub-page hero (Protocol/Network/Labs/About): back link, "01 — pillar", light h1, subtitle */
function PageHero({ num, pillar, title, subtitle, rings = [] }) {
  const { t } = useLang();
  return (
    <section className="page-hero">
      <div className="grid-bg" style={{ opacity: .3 }} aria-hidden="true" />
      {rings.map((r, i) => <div key={i} className="ring" style={r} aria-hidden="true" />)}
      <Container style={{ position: "relative", zIndex: 1 }}>
        <Reveal><A href="/" className="back"><Icon name="arrow-left" size={16} />{t(SITE.common.back)}</A></Reveal>
        <Reveal delay={.1}><Eyebrow number={num} style={{ marginBottom: 24 }}>{t(pillar)}</Eyebrow></Reveal>
        <Reveal delay={.2}><h1 className="h1-sub">{t(title)}</h1></Reveal>
        {subtitle ? <Reveal delay={.3}><p className="lead" style={{ marginTop: 32 }}>{t(subtitle)}</p></Reveal> : null}
      </Container>
    </section>
  );
}

/* Sticky eyebrow + large light paragraph (4/8 split) */
function Overview({ eyebrow, text }) {
  const { t } = useLang();
  return (
    <Section size="narrow">
      <div className="split-4-8">
        <Reveal><Eyebrow style={{ position: "sticky", top: 128 }}>{t(eyebrow)}</Eyebrow></Reveal>
        <Reveal delay={.15}><p className="overview">{t(text)}</p></Reveal>
      </div>
    </Section>
  );
}

/* Numbered rows: 01 / title / description, hairline divided */
function FeatureRows({ items }) {
  const { t } = useLang();
  return (
    <div className="rows">
      {items.map((f, i) => (
        <Reveal key={i} delay={i * .08}>
          <div className="row-12 feature-row">
            <span className="row-num">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="row-title">{t(f.title)}</h3>
            <p className="row-desc">{t(f.content ?? f.desc)}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* Closing CTA. `gold` marks the page's single conversion action (Sundial Gold). */
function CtaSection({ eyebrow, title, content, label, href, gold = false, email }) {
  const { t } = useLang();
  return (
    <Section gridBg size="cta" pad="xl" style={{ textAlign: "center" }}>
      {eyebrow ? <Reveal><Eyebrow align="center" style={{ marginBottom: 40 }}>{t(eyebrow)}</Eyebrow></Reveal> : null}
      <Reveal delay={.15}><h2 className="h2-cta">{t(title)}</h2></Reveal>
      <Reveal delay={.3}><Divider variant={gold ? "gold" : "accent"} width={gold ? 64 : 48} align="center" style={{ margin: "32px auto", opacity: gold ? 1 : .3 }} /></Reveal>
      {content ? <Reveal delay={.4}><p className="lead" style={{ margin: "0 auto 40px", maxWidth: 640 }}>{t(content)}</p></Reveal> : null}
      {email ? <Reveal delay={.25}><p className="lead" style={{ margin: 0 }}>{email}</p></Reveal> : null}
      {label ? <Reveal delay={.5}><Button as={A} href={href} variant={gold ? "cta" : "primary"} size="lg" iconRight="arrow-right" style={{ height: 56, padding: "0 40px" }}>{t(label)}</Button></Reveal> : null}
    </Section>
  );
}

function Footer() {
  const { t } = useLang();
  const F = SITE.footer;
  return (
    <footer className="footer">
      <Container>
        <div className="footer-grid">
          <Reveal className="footer-brand">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <img src="../../assets/logo/tableai-a2a-mark.svg" alt="TABLE AI" style={{ height: 22, width: "auto" }} />
              <span style={{ fontSize: 14, fontWeight: 500, letterSpacing: ".1em" }}>TABLE AI</span>
            </div>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)", maxWidth: 384 }}>{t(F.tagline)}</p>
            <p style={{ margin: "16px 0 0", fontSize: 12, color: "var(--text-subtle)" }}>{t(F.cities)}</p>
          </Reveal>
          {F.columns.map((col, ci) => (
            <Reveal key={ci} delay={(ci + 1) * .1} className="footer-col">
              <p style={{ margin: "0 0 20px", fontSize: 12, letterSpacing: "var(--ls-track-lg)", textTransform: "uppercase", color: "var(--text-muted)" }}>{t(col.title)}</p>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                {col.links.map((l, li) => <li key={li}><A href={l.href} className="footer-link">{t(l.label)}</A></li>)}
              </ul>
            </Reveal>
          ))}
        </div>
        <div className="footer-bottom">
          <p style={{ margin: 0, fontSize: 12, color: "var(--text-subtle)" }}>{t(F.copyright)}</p>
          <div style={{ display: "flex", gap: 24 }}><a href="#" className="footer-link small">{t(F.privacy)}</a><a href="#" className="footer-link small">{t(F.terms)}</a></div>
        </div>
      </Container>
    </footer>
  );
}

Object.assign(window, { LangProvider, useLang, RouteContext, useRoute, A, Reveal, Container, Section, SectionHead, PageHero, Overview, FeatureRows, CtaSection, Footer });
