const { Eyebrow: SEyebrow, Card: SCard, TileGrid: STileGrid, Icon: SIcon, Tag: STag } = window.TableAIDesignSystem_f48f27;

function StudioProblem() {
  const { t } = useLang(); const P = SITE.studio.problem;
  return (
    <Section pad="xl" borderTop={false}>
      <SectionHead eyebrow={t(P.eyebrow)} title={t(P.title)} />
      <STileGrid columns={3} minWidth={260}>
        {P.items.map((it, i) => (
          <SCard key={i} variant="tile" padding={40} eyebrow={t(it.label)} title={<span style={{ fontWeight: 500 }}>{t(it.title)}</span>} description={t(it.desc)} />
        ))}
      </STileGrid>
    </Section>
  );
}

function StudioProducts({ link = true }) {
  const { t } = useLang(); const P = SITE.studio.products;
  return (
    <Section tinted pad="xl">
      <SectionHead eyebrow={t(P.eyebrow)} title={t(P.title)} right={link ? <A href="/studio" className="inline-link">{t(P.viewAll)}<SIcon name="arrow-right" size={14} /></A> : null}>
        <p className="lead" style={{ maxWidth: 672, marginTop: 24 }}>{t(P.intro)}</p>
      </SectionHead>
      <div className="cards-3">
        {P.items.map((it, i) => (
          <Reveal key={i} delay={i * .12} style={{ display: "flex" }}>
            <SCard interactive padding={40} style={{ flex: 1, minHeight: 360 }}>
              <span className="room-num" style={{ marginBottom: 24, display: "block" }}>{it.num}</span>
              <h3 style={{ margin: "0 0 12px", fontSize: 20, fontWeight: 500, letterSpacing: "-.02em" }}>{t(it.title)}</h3>
              <p style={{ margin: "0 0 32px", fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)" }}>{t(it.desc)}</p>
              <dl style={{ margin: "auto 0 0", display: "grid", gap: 16, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
                <div><dt className="row-num" style={{ textTransform: "uppercase", marginBottom: 6 }}>{t(P.buyers)}</dt><dd style={{ margin: 0, fontSize: 13, lineHeight: 1.5 }}>{t(it.buyers)}</dd></div>
                <div><dt className="row-num" style={{ textTransform: "uppercase", marginBottom: 6 }}>{t(P.proto)}</dt><dd style={{ margin: 0, fontSize: 13, lineHeight: 1.5 }}>{t(it.proto)}</dd></div>
              </dl>
            </SCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function StudioTiansight() {
  const { t } = useLang(); const T = SITE.studio.tiansight;
  return (
    <Section pad="xl">
      <div className="split-5-7">
        <Reveal>
          <SEyebrow style={{ marginBottom: 24 }}>{t(T.eyebrow)}</SEyebrow>
          <h2 className="h2 big" style={{ marginBottom: 32 }}>{t(T.title)}</h2>
          <a href={T.url} target="_blank" rel="noopener noreferrer" className="inline-link strong">{t(T.visit)}<SIcon name="arrow-up-right" size={14} /></a>
        </Reveal>
        <Reveal delay={.15}>
          <p className="overview" style={{ marginBottom: 48 }}>{t(T.content)}</p>
          <SEyebrow style={{ marginBottom: 20 }}>{t(T.brandsLabel)}</SEyebrow>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {T.brands.map(b => <STag key={b} size="sm">{b}</STag>)}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function StudioPage() {
  const { t } = useLang(); const S = SITE.studio;
  return (
    <>
      <PageHero num={S.num} pillar={S.eyebrow} title={S.pageTitle} subtitle={S.tagline} rings={[{ top: "18%", right: "10%", width: 260, height: 260, opacity: .15 }]} />
      <Overview eyebrow={S.overview} text={S.overviewText} />
      <StudioProblem />
      <StudioProducts link={false} />
      <Section>
        <SectionHead eyebrow={t(S.method.eyebrow)} title={t(S.method.title)} />
        <FeatureRows items={S.method.items} />
      </Section>
      <Section tinted>
        <SectionHead eyebrow={t(S.ladder.eyebrow)} title={t(S.ladder.title)}><p className="lead" style={{ maxWidth: 672, marginTop: 24 }}>{t(S.ladder.intro)}</p></SectionHead>
        <STileGrid columns={3} minWidth={240}>
          {S.ladder.items.map((it, i) => (
            <Reveal key={i} delay={i * .12} style={{ display: "flex" }}>
              <SCard variant="tile" padding={40} number={it.num} title={t(it.title)} description={t(it.term)} style={{ flex: 1, minHeight: 220 }} />
            </Reveal>
          ))}
        </STileGrid>
      </Section>
      <StudioTiansight />
      <CtaSection title={S.ctaTitle} label={S.ctaLabel} href="/network" />
      <Footer />
    </>
  );
}
Object.assign(window, { StudioProblem, StudioProducts, StudioTiansight, StudioPage });
