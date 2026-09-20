const { NavBar } = window.TABLEAIDesignSystem_6a9d5e;
const PAGES = { "/": HomePage, "/protocol": ProtocolPage, "/network": NetworkPage, "/business": LabsPage, "/about": AboutPage };

function App() {
  const [path, setPath] = React.useState(() => { const h = location.hash.replace(/^#/, ""); return PAGES[h] ? h : "/"; });
  const [lang, setLang] = React.useState(() => (localStorage.getItem("tableai-kit-lang") === "zh" ? "zh" : "en"));
  const [scrolled, setScrolled] = React.useState(false);
  const go = React.useCallback(p => { const next = PAGES[p] ? p : "/"; setPath(next); location.hash = next === "/" ? "" : next; window.scrollTo({ top: 0 }); }, []);
  React.useEffect(() => { const onHash = () => { const h = location.hash.replace(/^#/, "") || "/"; if (PAGES[h]) setPath(h); }; window.addEventListener("hashchange", onHash); return () => window.removeEventListener("hashchange", onHash); }, []);
  React.useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 50); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  React.useEffect(() => { document.documentElement.lang = lang === "zh" ? "zh-CN" : "en"; localStorage.setItem("tableai-kit-lang", lang); }, [lang]);
  const Page = PAGES[path] || HomePage;
  const items = SITE.nav.map(n => ({ href: n.href, label: lang === "zh" ? n.label.zh : n.label.en }));
  return (
    <LangProvider lang={lang}>
      <RouteContext.Provider value={{ path, go }}>
        <div className="progress" style={{ transform: `scaleX(${useProgress()})` }} aria-hidden="true" />
        <NavBar fixed glass={scrolled} height={80} logoSrc="../../assets/logo/tableai-a2a-logo-transparent.png" items={items} activeHref={path} onNavigate={go} lang={lang} onToggleLang={() => setLang(l => (l === "zh" ? "en" : "zh"))} />
        <main key={path} className="page"><Page /></main>
      </RouteContext.Provider>
    </LangProvider>
  );
}

function useProgress() {
  const [p, setP] = React.useState(0);
  React.useEffect(() => { const f = () => { const h = document.documentElement.scrollHeight - innerHeight; setP(h > 0 ? scrollY / h : 0); }; f(); addEventListener("scroll", f, { passive: true }); addEventListener("resize", f); return () => { removeEventListener("scroll", f); removeEventListener("resize", f); }; }, []);
  return p;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
