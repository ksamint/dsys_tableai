const DS = window.TABLEAIDesignSystem_6a9d5e;
const { Button, IconButton, Input, Select, Switch, Card, Badge, Tag, Eyebrow, Tabs, Dialog, ConfirmDialog, Toast, ToastStack, Tooltip, Icon, Skeleton, Divider } = DS;

/* ── Data: cms_content / locations / partners rows (drizzle schema, seeded from server/seed.ts) ── */
const CONTENT = [
  ["hero", "TABLE AI", "TABLE AI", 0, true], ["hero_vision", "核心洞察与企业使命", "Our Vision & Mission", 1, true], ["hero_mission", "我们的使命", "Our Mission", 2, true],
  ["home_stats", "首页统计", "Home Stats", 3, true], ["aha_architecture", "底层协作架构：AHA 体系", "The AHA Architecture", 5, true], ["business_overview", "商业部署矩阵", "Business Deployment Matrix", 10, true],
  ["protocol", "第一个「1」：跨越“信任”临界点", "The First '1': Crossing the Trust Threshold", 20, true], ["protocol_aha_visual", "AHA 体系 —— 智能体-人-资产", "AHA Architecture — Agent-Human-Assets", 21, true],
  ["network", "第二个「1」：跨越“体验”临界点", "The Second '1': Crossing the Experience Threshold", 30, true], ["network_hubs", "全球布局", "Global Presence", 31, true],
  ["showroom_overview", "乘数「X」：引领范式转移", "The Multiplier 'X': Leading Paradigm Shift", 40, true], ["showroom_x1", "合规商旅与供应链管家", "Compliant Business Travel & Supply Chain Steward", 41, true],
  ["showroom_x2", "空间资产智能化调度平台", "Intelligent Space Asset Scheduling Platform", 42, true], ["showroom_x3", "高端服务与科研成果转化系统", "Premium Services & Research Commercialization System", 43, false],
  ["about", "关于 TABLE AI", "About TABLE AI", 50, true], ["footer", "TABLE AI", "TABLE AI", 100, true],
].map(([key, zh, en, sort, pub]) => ({ key, zh, en, sort, pub }));
const LOCATIONS = [["TABLE AI HQ", "Hong Kong", "Greater China", 22.3193, 114.1694], ["London Node", "London", "Europe", 51.5074, -0.1278], ["Basel Node", "Basel", "Europe", 47.5596, 7.5886], ["North America Node", "New York", "North America", 40.7128, -74.006], ["Beijing Node", "Beijing", "Greater China", 39.9042, 116.4074], ["Shanghai Node", "Shanghai", "Greater China", 31.2304, 121.4737], ["Shenzhen Node", "Shenzhen", "Greater China", 22.5431, 114.0579]].map(([name, city, region, lat, lng]) => ({ name, city, region, lat, lng }));
const PARTNERS = [["Boyuai Education", "education"], ["Lanma Technology", "technology"], ["Beijing Chaoyang Hospital", "medical"], ["OPC Global", "alliance"], ["Nibiru (RealMax)", "technology"], ["World Canal Cities Canal Walk", "culture"], ["CIT Group", "tourism"], ["Asian Institute of Art Therapy", "research"]].map(([name, cat], i) => ({ name, cat, active: i !== 6, url: "https://" }));
const NAV = [["layout-dashboard", "Dashboard", "dashboard"], ["file-text", "Content", "content"], ["map-pin", "Locations", "locations"], ["handshake", "Partners", "partners"], ["users", "Users", "users"], ["settings", "Settings", "settings"]];

/* ── Layout (AdminLayout.tsx): 256px sidebar, hairline right border, surface tint ── */
function Sidebar({ page, go }) {
  return (
    <aside className="sb">
      <div className="sb-head">
        <a href="#" onClick={e => { e.preventDefault(); go("dashboard"); }} style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none", color: "inherit" }}>
          <span className="sb-mark"><Icon name="shield" size={18} /></span>
          <span><span style={{ display: "block", fontSize: 14, fontWeight: 600, letterSpacing: ".1em" }}>TABLE AI</span><span style={{ display: "block", fontSize: 10, color: "var(--text-muted)", letterSpacing: ".1em", textTransform: "uppercase" }}>Admin Panel</span></span>
        </a>
      </div>
      <nav className="sb-nav">
        {NAV.map(([icon, label, key]) => <a key={key} href="#" onClick={e => { e.preventDefault(); go(key); }} className={"sb-item" + (page === key ? " on" : "")}><Icon name={icon} size={16} />{label}</a>)}
      </nav>
      <div className="sb-foot">
        <a href="../website/index.html" className="sb-item" style={{ padding: "8px 12px" }}><Icon name="external-link" size={16} />View Website</a>
        <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 12px" }}>
          <span className="avatar">A</span>
          <span style={{ flex: 1, minWidth: 0 }}><span style={{ display: "block", fontSize: 14, fontWeight: 500 }}>Admin</span><span style={{ display: "block", fontSize: 12, color: "var(--text-muted)", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>admin@tableai.ai</span></span>
          <Tooltip content="Sign out" side="left"><IconButton icon="log-out" label="Sign out" size="sm" /></Tooltip>
        </div>
      </div>
    </aside>
  );
}

function PageTitle({ title, sub, right }) {
  return <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 24 }}><div><h1 style={{ margin: 0, fontSize: 24, fontWeight: 600, letterSpacing: "-.02em" }}>{title}</h1>{sub ? <p style={{ margin: "4px 0 0", fontSize: 14, color: "var(--text-muted)" }}>{sub}</p> : null}</div>{right}</div>;
}

/* ── Dashboard (AdminDashboard.tsx) ── */
function Dashboard({ go, toast }) {
  const [seeding, setSeeding] = React.useState(false);
  const tiles = [["Content Management", "CMS", "Manage bilingual website content", "file-text", "content"], ["User Management", "Users", "Manage users and roles", "users", "users"], ["Settings", "Account", "Password and preferences", "settings", "settings"]];
  return (
    <>
      <PageTitle title="Dashboard" sub="Welcome back, Admin" />
      <div className="grid-3">
        {tiles.map(([label, big, desc, icon, key]) => (
          <Card key={key} interactive padding={24} onClick={() => go(key)}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}><span style={{ fontSize: 14, fontWeight: 500, color: "var(--text-muted)" }}>{label}</span><Icon name={icon} size={16} /></div>
            <div style={{ fontSize: 18, fontWeight: 600 }}>{big}</div><div style={{ fontSize: 12, color: "var(--text-muted)", marginTop: 4 }}>{desc}</div>
          </Card>
        ))}
      </div>
      <Card variant="dashed" padding={24} style={{ marginTop: 16 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}><Icon name="database" size={20} style={{ color: "var(--text-muted)" }} /><div><div style={{ fontWeight: 500 }}>Initialize Content</div><div style={{ fontSize: 14, color: "var(--text-muted)" }}>Seed the database with default TABLE AI content</div></div></div>
          <Button variant="outline" size="sm" loading={seeding} onClick={() => { setSeeding(true); setTimeout(() => { setSeeding(false); toast("success", "Content seeded", `${CONTENT.length} sections · 7 locations · 8 partners`); }, 1400); }}>Seed Content</Button>
        </div>
      </Card>
      <div className="grid-3" style={{ marginTop: 16 }}>
        {[["Sections", CONTENT.length, `${CONTENT.filter(c => c.pub).length} published`], ["Locations", LOCATIONS.length, "7 nodes on the map"], ["Partners", PARTNERS.length, `${PARTNERS.filter(p => p.active).length} active`]].map(([l, n, d]) => (
          <div key={l} style={{ padding: "16px 0", borderTop: "1px solid var(--border)" }}><Eyebrow style={{ letterSpacing: ".15em" }}>{l}</Eyebrow><div style={{ fontSize: 32, fontWeight: 300, letterSpacing: "-.03em", margin: "8px 0 4px" }}>{n}</div><div style={{ fontSize: 12, color: "var(--text-muted)" }}>{d}</div></div>
        ))}
      </div>
    </>
  );
}

/* ── Content (cms_content): bilingual rows, publish toggle, edit dialog ── */
function ContentPage({ toast }) {
  const [rows, setRows] = React.useState(CONTENT);
  const [q, setQ] = React.useState("");
  const [tab, setTab] = React.useState("all");
  const [edit, setEdit] = React.useState(null);
  const [del, setDel] = React.useState(null);
  const [lang, setLang] = React.useState("zh");
  const shown = rows.filter(r => (tab === "all" || (tab === "pub" ? r.pub : !r.pub)) && (r.key + r.zh + r.en).toLowerCase().includes(q.toLowerCase()));
  return (
    <>
      <PageTitle title="Content" sub="Bilingual sections rendered by the public website" right={<Button icon="plus" onClick={() => setEdit({ key: "", zh: "", en: "", sort: rows.length, pub: false, isNew: true })}>New section</Button>} />
      <div style={{ display: "flex", gap: 16, alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", marginBottom: 16 }}>
        <Tabs items={[{ label: "All", value: "all", count: rows.length }, { label: "Published", value: "pub", count: rows.filter(r => r.pub).length }, { label: "Drafts", value: "draft", count: rows.filter(r => !r.pub).length }]} value={tab} onChange={setTab} size="sm" style={{ borderBottom: 0 }} />
        <Input icon="search" placeholder="Search sections" size="sm" value={q} onChange={e => setQ(e.target.value)} containerStyle={{ width: 240 }} />
      </div>
      <div className="table">
        <div className="tr th"><span>Section key</span><span>Title 中文</span><span>Title EN</span><span>Order</span><span>Published</span><span /></div>
        {shown.map(r => (
          <div key={r.key} className="tr">
            <span><Badge variant="strong" style={{ fontFamily: "var(--font-mono)", textTransform: "none", letterSpacing: 0 }}>{r.key}</Badge></span>
            <span className="cell">{r.zh}</span><span className="cell">{r.en}</span>
            <span style={{ fontVariantNumeric: "tabular-nums", color: "var(--text-muted)" }}>{r.sort}</span>
            <span><Switch size="sm" checked={r.pub} onChange={v => { setRows(rs => rs.map(x => x.key === r.key ? { ...x, pub: v } : x)); toast("success", v ? "Published" : "Unpublished", r.key); }} /></span>
            <span style={{ display: "flex", gap: 4, justifyContent: "flex-end" }}><IconButton icon="pencil" label="Edit" size="sm" onClick={() => setEdit({ ...r })} /><IconButton icon="trash" label="Delete" size="sm" onClick={() => setDel(r)} /></span>
          </div>
        ))}
        {!shown.length ? <div style={{ padding: 40, textAlign: "center", fontSize: 14, color: "var(--text-muted)" }}>No sections match.</div> : null}
      </div>
      <Dialog open={!!edit} onClose={() => setEdit(null)} eyebrow={edit?.isNew ? "New section" : edit?.key} title={edit?.isNew ? "Create section" : "Edit section"} width={560}
        actions={<><Button variant="ghost" onClick={() => setEdit(null)}>Cancel</Button><Button onClick={() => { setRows(rs => edit.isNew ? [...rs, edit] : rs.map(x => x.key === edit.key ? edit : x)); toast("success", "Saved", edit.key || "section"); setEdit(null); }}>Save</Button></>}>
        {edit ? <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Input label="Section key" value={edit.key} disabled={!edit.isNew} onChange={e => setEdit({ ...edit, key: e.target.value })} placeholder="e.g. home_cta" hint="Referenced by the website as c(key, field)" />
          <Tabs items={[{ label: "中文", value: "zh" }, { label: "English", value: "en" }]} value={lang} onChange={setLang} size="sm" />
          <Input label={`Title (${lang.toUpperCase()})`} value={edit[lang]} onChange={e => setEdit({ ...edit, [lang]: e.target.value })} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, alignItems: "end" }}><Input label="Sort order" type="number" value={edit.sort} onChange={e => setEdit({ ...edit, sort: Number(e.target.value) })} /><Switch checked={edit.pub} onChange={v => setEdit({ ...edit, pub: v })} label="Published" /></div>
        </div> : null}
      </Dialog>
      <ConfirmDialog open={!!del} danger title="Delete section?" description={del ? `“${del.key}” will disappear from the website immediately.` : ""} confirmLabel="Delete" onClose={() => setDel(null)} onConfirm={() => { setRows(rs => rs.filter(x => x.key !== del.key)); toast("info", "Deleted", del.key); setDel(null); }} />
    </>
  );
}

/* ── Locations & Partners (AdminLocations / AdminPartners): list + status ── */
function LocationsPage({ toast }) {
  return (
    <>
      <PageTitle title="Locations" sub="Nodes plotted on the Global Partner Network map" right={<Button icon="plus" variant="outline">Add node</Button>} />
      <div className="table">
        <div className="tr th loc"><span>Name</span><span>City</span><span>Region</span><span>Latitude</span><span>Longitude</span><span /></div>
        {LOCATIONS.map(l => <div key={l.name} className="tr loc"><span style={{ fontWeight: 500 }}>{l.name}</span><span>{l.city}</span><span><Badge>{l.region}</Badge></span><span className="num">{l.lat.toFixed(4)}</span><span className="num">{l.lng.toFixed(4)}</span><span style={{ display: "flex", gap: 4, justifyContent: "flex-end" }}><IconButton icon="pencil" label="Edit" size="sm" /><IconButton icon="trash" label="Delete" size="sm" onClick={() => toast("error", "Cannot delete HQ", "Hong Kong is the primary node.")} /></span></div>)}
      </div>
    </>
  );
}
function PartnersPage({ toast }) {
  const [rows, setRows] = React.useState(PARTNERS);
  const [filter, setFilter] = React.useState(null);
  const cats = [...new Set(PARTNERS.map(p => p.cat))];
  return (
    <>
      <PageTitle title="Partners" sub="Shown on the homepage grid and the About page list" right={<Button icon="plus" variant="outline">Add partner</Button>} />
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>{cats.map(c => <Tag key={c} size="sm" selected={filter === c} onClick={() => setFilter(filter === c ? null : c)}>{c}</Tag>)}</div>
      <div className="table">
        <div className="tr th par"><span>#</span><span>Partner</span><span>Category</span><span>Website</span><span>Active</span><span /></div>
        {rows.filter(p => !filter || p.cat === filter).map((p, i) => <div key={p.name} className="tr par"><span className="num">{String(i + 1).padStart(2, "0")}</span><span style={{ display: "flex", alignItems: "center", gap: 12 }}><span className="initial">{p.name[0]}</span><span style={{ fontWeight: 500 }}>{p.name}</span></span><span><Badge>{p.cat}</Badge></span><span style={{ color: "var(--text-muted)", fontSize: 13 }}>{p.url}…</span><span><Switch size="sm" checked={p.active} onChange={v => { setRows(rs => rs.map(x => x.name === p.name ? { ...x, active: v } : x)); toast("success", v ? "Partner activated" : "Partner hidden", p.name); }} /></span><span style={{ display: "flex", gap: 4, justifyContent: "flex-end" }}><IconButton icon="pencil" label="Edit" size="sm" /><IconButton icon="external-link" label="Open site" size="sm" /></span></div>)}
      </div>
    </>
  );
}
function Placeholder({ title }) {
  return <><PageTitle title={title} /><div style={{ display: "flex", flexDirection: "column", gap: 12, maxWidth: 560 }}><Skeleton width={220} height={28} /><Skeleton lines={3} /><Divider spacing={8} /><Skeleton lines={2} /></div><p style={{ fontSize: 12, color: "var(--text-subtle)", marginTop: 24 }}>Not recreated — Admin{title}.tsx was not read from the source repository. Deep-blue skeleton per design.md §4.</p></>;
}

function AdminApp() {
  const [page, setPage] = React.useState(() => location.hash.replace("#", "") || "dashboard");
  const [toasts, setToasts] = React.useState([]);
  const go = p => { setPage(p); location.hash = p; };
  const toast = (variant, title, description) => { const id = Date.now(); setToasts(t => [...t, { id, variant, title, description }]); setTimeout(() => setToasts(t => t.filter(x => x.id !== id)), 3200); };
  const Page = { dashboard: Dashboard, content: ContentPage, locations: LocationsPage, partners: PartnersPage }[page];
  return (
    <div className="admin">
      <Sidebar page={page} go={go} />
      <main className="main"><div className="main-inner">{Page ? <Page go={go} toast={toast} /> : <Placeholder title={page[0].toUpperCase() + page.slice(1)} />}</div></main>
      <ToastStack>{toasts.map(t => <Toast key={t.id} variant={t.variant} title={t.title} description={t.description} onDismiss={() => setToasts(ts => ts.filter(x => x.id !== t.id))} />)}</ToastStack>
    </div>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(<AdminApp />);
