const { Eyebrow, Button, Card, TileGrid, Stat, Divider, Icon, Badge } = window.TableAIDesignSystem_f48f27;

function ProtocolPage() {
  const { t } = useLang();
  const P = SITE.protocol, S = SITE;
  return (
    <>
      <PageHero num={P.num} pillar={P.pillar} title={P.title} subtitle={P.subtitle} rings={[{ top: "20%", right: "10%", width: 250, height: 250, opacity: .15 }]} />
      <Overview eyebrow={P.overview} text={P.content} />
      <Section>
        <SectionHead eyebrow={t(S.aha.visualEyebrow)} title={t(S.aha.visualTitle)} />
        <Reveal delay={.1}><p className="body" style={{ maxWidth: 896, marginBottom: 48 }}>{t(S.aha.content)}</p></Reveal>
        <TileGrid columns={3} minWidth={240}>
          {S.aha.items.map((it, i) => (
            <Reveal key={i} delay={i * .12} style={{ display: "flex" }}>
              <Card variant="tile" interactive padding={40} style={{ minHeight: 280, flex: 1 }}>
                <span className="letter left">{it.letter}</span>
                <h3 style={{ margin: "0 0 8px", fontSize: 18, fontWeight: 500, letterSpacing: "-.02em" }}>{t(it.label)}</h3>
                <p style={{ margin: "0 0 16px", fontSize: 14, color: "var(--text-muted)" }}>{t(it.desc2)}</p>
                <p style={{ margin: "auto 0 0", fontSize: 12, lineHeight: 1.6, color: "var(--text-subtle)" }}>{t(it.detail)}</p>
              </Card>
            </Reveal>
          ))}
        </TileGrid>
      </Section>
      <Section>
        <SectionHead eyebrow={t(P.mechanismsEyebrow)} title={t(P.mechanismsTitle)} />
        <FeatureRows items={P.features} />
      </Section>
      <Section tinted>
        <Reveal style={{ marginBottom: 64 }}><Eyebrow>{t(P.highlightsEyebrow)}</Eyebrow></Reveal>
        <TileGrid columns={2} minWidth={280}>
          {P.highlights.map((h, i) => (
            <Reveal key={i} delay={i * .08} style={{ display: "flex" }}>
              <Card variant="tile" interactive padding={40} style={{ flex: 1 }} title={<span style={{ fontSize: 16, fontWeight: 500 }}>{t(h.title)}</span>} description={t(h.desc)} />
            </Reveal>
          ))}
        </TileGrid>
      </Section>
      <CtaSection title={P.ctaTitle} label={P.ctaLabel} href="/network" />
      <Footer />
    </>
  );
}

function NetworkPage() {
  const { t } = useLang();
  const N = SITE.network;
  return (
    <>
      <PageHero num={N.num} pillar={N.pillar} title={N.title} subtitle={N.subtitle} rings={[{ top: "15%", left: "5%", width: 180, height: 180, opacity: .15 }, { top: "25%", right: "8%", width: 300, height: 300, opacity: .1 }]} />
      <Overview eyebrow={N.overview} text={N.content} />
      <Section>
        <SectionHead eyebrow={t(N.pillarsEyebrow)} title={t(N.pillarsTitle)} />
        <FeatureRows items={N.features} />
      </Section>
      <Section tinted>
        <SectionHead eyebrow={t(N.hubsEyebrow)} title={t(N.hubsTitle)} />
        <TileGrid columns={4} minWidth={150}>
          {N.hubs.map((h, i) => (
            <Reveal key={i} delay={i * .05} style={{ display: "flex" }}>
              <Card variant="tile" interactive padding={32} style={{ flex: 1, alignItems: "center", textAlign: "center" }}>
                <Icon name="globe" size={16} style={{ color: "var(--text-muted)", marginBottom: 12 }} />
                <p style={{ margin: 0, fontSize: 14, fontWeight: 500 }}>{t(h.city)}</p>
                <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--text-muted)" }}>{t(h.region)}</p>
              </Card>
            </Reveal>
          ))}
        </TileGrid>
      </Section>
      <Section>
        <TileGrid columns={3} minWidth={240}>
          {N.metrics.map((m, i) => (
            <Reveal key={i} delay={i * .1} style={{ display: "flex" }}>
              <Card variant="tile" interactive padding={48} style={{ flex: 1, alignItems: "center", textAlign: "center" }}>
                <Icon name={m.icon} size={20} style={{ color: "var(--text-muted)", marginBottom: 20 }} />
                <div style={{ fontSize: 28, fontWeight: 300, letterSpacing: "-.02em", marginBottom: 8 }}>{t(m.num)}</div>
                <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 16 }}>{t(m.label)}</div>
                <p style={{ margin: 0, fontSize: 12, lineHeight: 1.6, color: "var(--text-muted)" }}>{t(m.desc)}</p>
              </Card>
            </Reveal>
          ))}
        </TileGrid>
      </Section>
      <CtaSection title={N.ctaTitle} label={N.ctaLabel} href="/business" />
      <Footer />
    </>
  );
}

function Accordion({ items }) {
  const { t } = useLang();
  const [open, setOpen] = React.useState(null);
  return (
    <div className="rows">
      {items.map((d, i) => {
        const on = open === i;
        return (
          <Reveal key={i} delay={i * .08}>
            <div className="acc" onClick={() => setOpen(on ? null : i)} role="button" aria-expanded={on}>
              <div className="acc-head"><span style={{ fontSize: 14, fontWeight: 500 }}>{t(d.label)}</span><span className="acc-plus" style={{ transform: on ? "rotate(45deg)" : "none" }}>+</span></div>
              <div className="acc-body" style={{ maxHeight: on ? 400 : 0, opacity: on ? 1 : 0 }}><p style={{ margin: 0, paddingBottom: 24, fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)" }}>{t(d.value)}</p></div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

function LabsPage() {
  const { t } = useLang();
  const L = SITE.labs;
  const icons = ["database", "map-pin", "users"];
  return (
    <>
      <PageHero num={L.num} pillar={L.pillar} title={L.title} subtitle={L.subtitle} rings={[{ top: "18%", right: "12%", width: 200, height: 200, opacity: .15 }, { bottom: "20%", left: "5%", width: 120, height: 120, opacity: .1 }]} />
      <Overview eyebrow={L.overview} text={L.content} />
      {L.items.map((lab, idx) => (
        <Section key={lab.num}>
          <div className="split-5-7">
            <Reveal>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}><span className="room-num big">{lab.num}</span><Icon name={icons[idx]} size={20} style={{ color: "var(--text-muted)" }} /></div>
              <h2 className="h2" style={{ marginBottom: 16 }}>{t(lab.title)}</h2>
              <p className="lead" style={{ marginBottom: 24, fontSize: 16 }}>{t(lab.subtitle)}</p>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--text-body)", opacity: .8 }}>{t(lab.content)}</p>
            </Reveal>
            <Accordion items={lab.details} />
          </div>
        </Section>
      ))}
      <CtaSection eyebrow={L.philosophy.eyebrow} title={L.philosophy.title} content={L.philosophy.content} label={L.philosophy.cta} href="/about" />
      <Footer />
    </>
  );
}

function AboutPage() {
  const { t, lang } = useLang();
  const Ab = SITE.about, Pt = SITE.partners;
  const [open, setOpen] = React.useState(null);
  return (
    <>
      <PageHero pillar={Ab.eyebrow} title={Ab.title} />
      <Overview eyebrow={Ab.mission} text={Ab.content} />
      <StatsStrip stats={Ab.stats} />
      <Section size="narrow" borderTop={false}>
        <SectionHead eyebrow={t(Ab.profileEyebrow)} title={t(Ab.profileTitle)} />
        <div className="rows">
          {Ab.profile.map((it, i) => (
            <Reveal key={i} delay={i * .05}><div className="row-12 profile-row"><span style={{ fontSize: 14, fontWeight: 500 }}>{t(it.label)}</span><p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)" }}>{t(it.value)}</p></div></Reveal>
          ))}
        </div>
      </Section>
      <Section>
        <SectionHead eyebrow={t(Ab.networkEyebrow)} title={t(Ab.networkTitle)} right={<span style={{ fontSize: 12, letterSpacing: "var(--ls-track-md)", textTransform: "uppercase", color: "var(--text-muted)" }}>{Ab.locations.length}{lang === "zh" ? " " : ""}{t(Ab.nodes)}</span>} />
        <Reveal delay={.2}>
          <div className="map-slot">
            <div className="map-note">{lang === "zh" ? "世界地圖（WorldMap.tsx）— 在此處放置地圖；節點見下方" : "World map (WorldMap.tsx) — place the map here; nodes listed below"}</div>
            {Ab.locations.map((l, i) => <span key={i} className="map-dot" style={{ left: `${((l.lng + 180) / 360) * 100}%`, top: `${((90 - l.lat) / 180) * 100}%` }} title={t(l.city)} />)}
          </div>
        </Reveal>
        <TileGrid minWidth={120} style={{ borderTop: 0 }}>
          {Ab.locations.map((l, i) => (
            <Card key={i} variant="tile" padding={20} style={{ alignItems: "center", textAlign: "center" }}>
              <span className="dot static" />
              <p style={{ margin: 0, fontSize: 12, fontWeight: 500 }}>{t(l.city)}</p>
              <p style={{ margin: "4px 0 0", fontSize: 10, color: "var(--text-muted)" }}>{t(l.region)}</p>
            </Card>
          ))}
        </TileGrid>
      </Section>
      <Section>
        <Reveal style={{ marginBottom: 16 }}>
          <Eyebrow style={{ marginBottom: 24 }}>{t(Pt.aboutEyebrow)}</Eyebrow>
          <h2 className="h2" style={{ marginBottom: 24 }}>{t(Pt.title)}</h2>
          <p className="body muted" style={{ maxWidth: 672 }}>{t(Pt.aboutIntro)}</p>
        </Reveal>
        <div className="rows" style={{ marginTop: 64 }}>
          {Pt.list.map((p, i) => {
            const on = open === i;
            return (
              <Reveal key={i} delay={i * .04}>
                <div className="partner" onClick={() => setOpen(on ? null : i)} role="button" aria-expanded={on}>
                  <div className="partner-row">
                    <span className="row-num">{String(i + 1).padStart(2, "0")}</span>
                    <div className="initial small">{p.name.en[0]}</div>
                    <h3 style={{ margin: 0, fontSize: 18, fontWeight: 500, letterSpacing: "-.02em" }}>{t(p.name)}</h3>
                    <Badge>{t(Pt.categories[p.category] || p.category)}</Badge>
                    <Icon name="chevron-down" size={14} style={{ color: "var(--text-muted)", justifySelf: "end", transform: on ? "rotate(180deg)" : "none", transition: "transform .3s" }} />
                  </div>
                  <div className="acc-body" style={{ maxHeight: on ? 400 : 0, opacity: on ? 1 : 0 }}>
                    <div className="partner-detail">
                      <p style={{ margin: "0 0 24px", fontSize: 14, lineHeight: 1.8, color: "var(--text-muted)" }}>{t(p.desc)}</p>
                      <a href={p.url} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()} className="inline-link strong">{t(Pt.visit)}<Icon name="external-link" size={12} /></a>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
      <CtaSection title={Ab.ctaTitle} email={Ab.email} />
      <Footer />
    </>
  );
}
Object.assign(window, { ProtocolPage, NetworkPage, LabsPage, AboutPage });
