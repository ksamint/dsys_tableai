const { Button: AButton, Input: AInput, Card: ACard, Badge: ABadge, Icon: AIcon, DataTable: ADataTable, IconButton: AIconButton } = window.TableAIDesignSystem_f48f27;

/* Users (AdminUsers.tsx) — columns, provider badges, role, status, row actions */
const USERS = [
  { id: 1, name: "Admin", email: "admin@tableai.ai", provider: "local", role: "admin", disabled: false, last: "2026-10-05", me: true },
  { id: 2, name: "Editor", email: "editor@tableai.ai", provider: "logto", role: "user", disabled: false, last: "2026-10-03" },
  { id: 3, name: "Reviewer", email: "review@tableai.ai", provider: "manus", role: "user", disabled: true, last: "2026-09-21" },
];
const PROVIDER = { logto: ["globe", "Logto SSO"], local: ["lock", "Local"], manus: ["shield", "Manus OAuth"] };

function UsersPage({ toast }) {
  const [rows, setRows] = React.useState(USERS);
  const [menu, setMenu] = React.useState(null);
  const act = (u, kind) => {
    setMenu(null);
    if (kind === "role") { setRows(rs => rs.map(r => r.id === u.id ? { ...r, role: r.role === "admin" ? "user" : "admin" } : r)); toast("success", "Role updated"); }
    if (kind === "disable") { setRows(rs => rs.map(r => r.id === u.id ? { ...r, disabled: !r.disabled } : r)); toast("success", "User status updated"); }
    if (kind === "delete") { setRows(rs => rs.filter(r => r.id !== u.id)); toast("info", "User scheduled for deletion (7 days)"); }
  };
  const cols = [
    { key: "id", label: "#", muted: true, width: 40 },
    { key: "name", label: "Name", render: u => <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}><span style={{ width: 28, height: 28, borderRadius: "50%", border: "1px solid var(--border)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 12, color: "var(--text-muted)" }}>{u.name[0]}</span><span style={{ fontWeight: 500 }}>{u.name}</span>{u.me ? <ABadge>You</ABadge> : null}</span> },
    { key: "email", label: "Email", muted: true },
    { key: "provider", label: "Auth Source", render: u => <ABadge icon={PROVIDER[u.provider][0]}>{PROVIDER[u.provider][1]}</ABadge> },
    { key: "role", label: "Role", render: u => <ABadge variant={u.role === "admin" ? "inverse" : "neutral"}>{u.role}</ABadge> },
    { key: "status", label: "Status", render: u => u.disabled ? <ABadge variant="error">Disabled</ABadge> : <ABadge variant="success" dot>Active</ABadge> },
    { key: "last", label: "Last Sign In", muted: true, numeric: true },
    { key: "act", label: "", width: 40, render: u => u.me ? null : (
      <span style={{ position: "relative", display: "inline-block" }}>
        <AIconButton icon="settings" label="Actions" size="sm" onClick={() => setMenu(menu === u.id ? null : u.id)} />
        {menu === u.id ? (
          <span role="menu" style={{ position: "absolute", right: 0, top: "calc(100% + 4px)", zIndex: 5, minWidth: 200, background: "var(--bg)", border: "1px solid var(--border)", borderRadius: "var(--radius)", boxShadow: "var(--shadow-lift)", padding: 4, display: "flex", flexDirection: "column" }}>
            <AButton variant="ghost" size="sm" icon="user" style={{ justifyContent: "flex-start" }} onClick={() => act(u, "role")}>{u.role === "admin" ? "Demote to User" : "Promote to Admin"}</AButton>
            <AButton variant="ghost" size="sm" icon={u.disabled ? "circle-check" : "x"} style={{ justifyContent: "flex-start" }} onClick={() => act(u, "disable")}>{u.disabled ? "Enable Account" : "Disable Account"}</AButton>
            <AButton variant="ghost" size="sm" icon="trash" style={{ justifyContent: "flex-start", color: "var(--danger)" }} onClick={() => act(u, "delete")}>Delete (7-day retention)</AButton>
          </span>
        ) : null}
      </span>
    ) },
  ];
  return (
    <>
      <PageTitle title="User Management" sub="Manage users, roles, and authentication sources" />
      <ADataTable variant="compact" columns={cols} rows={rows} emptyText="No users found" />
    </>
  );
}

/* Settings (AdminSettings.tsx) — profile facts + change password */
function SettingsPage({ toast }) {
  const [pw, setPw] = React.useState({ cur: "", next: "", conf: "" });
  const [busy, setBusy] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    if (pw.next !== pw.conf) return toast("error", "Passwords do not match");
    if (pw.next.length < 6) return toast("error", "Password must be at least 6 characters");
    setBusy(true);
    setTimeout(() => { setBusy(false); setPw({ cur: "", next: "", conf: "" }); toast("success", "Password changed successfully"); }, 700);
  };
  const fact = (k, v) => <div><div style={{ fontSize: 11, letterSpacing: "var(--ls-track-md)", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 6 }}>{k}</div><div style={{ fontSize: 14, fontWeight: 500 }}>{v}</div></div>;
  return (
    <div style={{ maxWidth: 672 }}>
      <PageTitle title="Settings" sub="Account settings and preferences" />
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <ACard padding={24}>
          <h2 style={{ margin: "0 0 20px", fontSize: 16, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}><AIcon name="user" size={16} style={{ color: "var(--text-muted)" }} />Profile</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {fact("Name", "Admin")}{fact("Email", "admin@tableai.ai")}
            {fact("Role", <ABadge variant="inverse">admin</ABadge>)}{fact("Auth Provider", <ABadge icon="lock">Local</ABadge>)}
          </div>
        </ACard>
        <ACard padding={24}>
          <h2 style={{ margin: "0 0 4px", fontSize: 16, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}><AIcon name="lock" size={16} style={{ color: "var(--text-muted)" }} />Change Password</h2>
          <p style={{ margin: "0 0 20px", fontSize: 13, color: "var(--text-muted)" }}>Update your local account password</p>
          <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <AInput label="Current Password" type="password" value={pw.cur} onChange={e => setPw({ ...pw, cur: e.target.value })} placeholder="Enter current password (leave empty if none)" />
            <AInput label="New Password" type="password" required value={pw.next} onChange={e => setPw({ ...pw, next: e.target.value })} />
            <AInput label="Confirm New Password" type="password" required value={pw.conf} onChange={e => setPw({ ...pw, conf: e.target.value })} />
            <div><AButton type="submit" size="sm" icon="lock" loading={busy}>Update Password</AButton></div>
          </form>
        </ACard>
      </div>
    </div>
  );
}

/* Login (AdminLogin.tsx) — SSO first, collapsible local admin login */
function LoginPage({ go, toast }) {
  const [local, setLocal] = React.useState(false);
  const [busy, setBusy] = React.useState(false);
  const signIn = e => { e.preventDefault(); setBusy(true); setTimeout(() => { setBusy(false); toast("success", "Login successful"); go("dashboard"); }, 700); };
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: 16, background: "var(--bg-surface)" }}>
      <div style={{ width: "100%", maxWidth: 448, display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <img src="../../assets/logo/tableai-a2a-mark.svg" alt="" style={{ height: 48, marginBottom: 8 }} />
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 500, letterSpacing: "var(--ls-wordmark)" }}>TABLE AI</h1>
          <p style={{ margin: 0, fontSize: 13, color: "var(--text-muted)" }}>Admin Dashboard</p>
        </div>
        <ACard padding={24}>
          <h2 style={{ margin: "0 0 4px", fontSize: 18, fontWeight: 600 }}>Enterprise Sign In</h2>
          <p style={{ margin: "0 0 20px", fontSize: 13, color: "var(--text-muted)" }}>Sign in with your enterprise account via SSO</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <AButton block size="lg" icon="log-out" style={{ height: 48 }} onClick={() => go("dashboard")}>Continue with Manus SSO</AButton>
            <AButton block size="lg" variant="outline" icon="globe" style={{ height: 48 }} onClick={() => go("dashboard")}>Continue with Logto SSO</AButton>
          </div>
        </ACard>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <button type="button" onClick={() => setLocal(!local)} aria-expanded={local} style={{ all: "unset", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "8px 0", fontSize: 13, color: "var(--text-muted)" }}>
            <AIcon name="chevron-down" size={16} style={{ transform: local ? "rotate(180deg)" : "none", transition: "transform var(--dur-fast) var(--ease-standard)" }} />Admin Login (Local Account)
          </button>
          {local ? (
            <ACard padding={24}>
              <form onSubmit={signIn} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <AInput label="Email" type="email" placeholder="admin@tableai.ai" required />
                <AInput label="Password" type="password" placeholder="Enter password" required />
                <AButton type="submit" block variant="outline" icon="shield" loading={busy}>Sign In as Admin</AButton>
              </form>
            </ACard>
          ) : null}
        </div>
        <p style={{ margin: 0, textAlign: "center", fontSize: 12 }}><a href="../website/index.html" style={{ color: "var(--text-muted)" }}>← Back to website</a></p>
      </div>
    </div>
  );
}
Object.assign(window, { UsersPage, SettingsPage, LoginPage });
