const { Eyebrow, Button, Card, TileGrid, Stat, Divider, Icon } = window.TABLEAIDesignSystem_6a9d5e;

function Hero() {
  const { t } = useLang();
  const H = SITE.hero;
  return (
    <section className="hero">
      <div className="grid-bg" style={{ opacity: .4 }} aria-hidden="true" />
      <div className="ring" style={{ top: "15%", right: "8%", width: 300, height: 300, opacity: .2 }} aria-hidden="true" />
      <div className="ring square" style={{ bottom: "20%", left: "5%", width: 200, height: 200, opacity: .15 }} aria-hidden="true" />
      <div className="dot" style={{ top: "40%", right: "25%" }} aria-hidden="true" />
      <Container style={{ position: "relative", zIndex: 1, paddingTop: 96 }}>
        <Reveal><Eyebrow line style={{ marginBottom: 32 }}>{t(H.eyebrow)}</Eyebrow></Reveal>
        <Reveal delay={.1}><h1 className="h1-hero">{t(H.title)}</h1></Reveal>
        <Reveal delay={.2}><p className="lead hero-lead">{t(H.tagline)}</p></Reveal>
        <Reveal delay={.3}>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <Button as={A} href="/protocol" size="lg" iconRight="arrow-right">{t(H.cta1)}</Button>
            <Button as={A} href="/about" variant="outline" size="lg">{t(H.cta2)}</Button>
          </div>
        </Reveal>
      </Container>
      <div className="scroll-hint" aria-hidden="true"><span>{SITE.common.scroll}</span><i /></div>
    </section>
  );
}

function StatsStrip({ stats }) {
  const { t } = useLang();
  return (
    <section className="stats">
      <Container>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <Reveal key={i} delay={i * .1} className="stat-cell"><Stat value={s.value} suffix={s.suffix || ""} label={t(s.label)} accent={!!s.accent} countUp size="md" /></Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function HomePage() {
  const { t } = useLang();
  const { go } = useRoute();
  const S = SITE;
  const pillars = [
    { num: "01", label: S.protocol.pillar, title: S.protocol.title, desc: S.protocol.subtitle, href: "/protocol" },
    { num: "02", label: S.network.pillar, title: S.network.title, desc: S.network.subtitle, href: "/network" },
    { num: "03", label: S.labs.pillar, title: S.labs.title, desc: S.labs.subtitle, href: "/business" },
  ];
  return (
    <>
      <Hero />
      <StatsStrip stats={S.stats} />

      {/* Core insight — two thresholds */}
      <Section size="narrow" pad="xl" borderTop={false}>
        <Reveal><Eyebrow style={{ marginBottom: 40 }}>{t(S.insight.eyebrow)}</Eyebrow></Reveal>
        <Reveal delay={.2}><blockquote className="quote">{t(S.hero.insight)}</blockquote></Reveal>
        <TileGrid columns={2} minWidth={280}>
          {S.thresholds.map((th, i) => (
            <Card key={i} variant="tile" padding={40} eyebrow={t(th.label)} title={<span style={{ fontWeight: 500 }}>{t(th.title)}</span>} description={t(th.desc)} />
          ))}
        </TileGrid>
        <Reveal delay={.5}><Divider variant="accent" width={96} style={{ marginTop: 48, opacity: .3 }} /></Reveal>
      </Section>

      {/* AHA architecture */}
      <Section tinted size="narrow">
        <Reveal><Eyebrow style={{ marginBottom: 24 }}>{t(S.aha.eyebrow)}</Eyebrow><h2 className="h2 big" style={{ marginBottom: 32 }}>{t(S.aha.title)}</h2></Reveal>
        <Reveal delay={.15}><p className="lead" style={{ maxWidth: 768, marginBottom: 32 }}>{t(S.aha.subtitle)}</p></Reveal>
        <Reveal delay={.25}><p className="body" style={{ maxWidth: 896 }}>{t(S.aha.content)}</p></Reveal>
        <Reveal delay={.35}>
          <TileGrid columns={3} style={{ marginTop: 64 }}>
            {S.aha.items.map((it, i) => (
              <Card key={i} variant="tile" interactive padding={40} style={{ textAlign: "center", alignItems: "center" }}>
                <div className="letter">{it.letter}</div>
                <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 8 }}>{t(it.label)}</div>
                <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{t(it.desc)}</div>
              </Card>
            ))}
          </TileGrid>
        </Reveal>
      </Section>

      {/* 1+1+X */}
      <Section pad="xl">
        <Reveal style={{ marginBottom: 80 }}>
          <div className="split-7-5">
            <div><Eyebrow style={{ marginBottom: 24 }}>{t(S.business.eyebrow)}</Eyebrow><h2 className="h2 big">{S.business.title}<br /><span style={{ color: "var(--text-muted)" }}>{t(S.business.subtitle)}</span></h2></div>
            <p className="body muted" style={{ alignSelf: "end" }}>{t(S.business.content)}</p>
          </div>
        </Reveal>
        <TileGrid columns={3} minWidth={260}>
          {pillars.map((p, i) => (
            <Reveal key={i} delay={i * .15} style={{ display: "flex" }}>
              <Card variant="tile" interactive padding={40} number={p.num} arrow eyebrow={t(p.label)} title={t(p.title)} description={t(p.desc)} onClick={() => go(p.href)} footer={<span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>{t(S.business.learnMore)}<Icon name="arrow-right" size={12} /></span>} style={{ minHeight: 320, flex: 1 }} />
            </Reveal>
          ))}
        </TileGrid>
      </Section>

      {/* AI Labs */}
      <Section tinted pad="xl">
        <SectionHead eyebrow={t(S.labs.homeEyebrow)} title={t(S.labs.homeTitle)} right={<A href="/business" className="inline-link">{t(S.labs.viewAll)}<Icon name="arrow-right" size={14} /></A>} />
        <div className="cards-3">
          {S.labs.items.map((room, i) => (
            <Reveal key={room.num} delay={i * .12} style={{ display: "flex" }}>
              <Card interactive padding={40} style={{ minHeight: 280, flex: 1 }} onClick={() => go("/business")} footer={<span>{t(S.labs.details)} →</span>}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}><span className="room-num">{room.num}</span><Icon name="arrow-up-right" size={16} style={{ opacity: .4 }} /></div>
                <h3 style={{ margin: "0 0 12px", fontSize: 18, fontWeight: 500, letterSpacing: "-.02em" }}>{t(room.title)}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)" }}>{t(room.subtitle)}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Partners */}
      <Section>
        <Reveal style={{ textAlign: "center", marginBottom: 64 }}><Eyebrow align="center" style={{ marginBottom: 24 }}>{t(S.partners.eyebrow)}</Eyebrow><h2 className="h2">{t(S.partners.title)}</h2></Reveal>
        <TileGrid columns={4} minWidth={200}>
          {S.partners.list.map((p, i) => (
            <Card key={i} variant="tile" interactive padding={32} href={p.url} target="_blank" rel="noopener noreferrer" style={{ alignItems: "center", textAlign: "center", minHeight: 160, justifyContent: "center" }}>
              <div className="initial">{p.name.en[0]}</div>
              <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: ".025em", color: "var(--text-muted)" }}>{t(p.name)}</span>
            </Card>
          ))}
        </TileGrid>
        <Reveal delay={.3} style={{ textAlign: "center", marginTop: 40 }}><A href="/about" className="inline-link">{t(S.partners.viewAll)}<Icon name="arrow-right" size={14} /></A></Reveal>
      </Section>

      <CtaSection eyebrow={S.cta.eyebrow} title={S.cta.title} content={S.cta.content} label={S.cta.label} href="/about" gold />
      <Footer />
    </>
  );
}
Object.assign(window, { HomePage, StatsStrip });
