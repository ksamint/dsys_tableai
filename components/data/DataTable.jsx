import React from "react";
import { Icon } from "../icons/Icon.jsx";

/**
 * Hairline data table. Tracked uppercase header, 1px row rules, no zebra, no fills.
 * Numeric columns right-align with tabular numerals. `comparison` keeps the first column sticky and emphasised.
 */
export function DataTable({ columns = [], rows = [], variant = "default", sortable = false, defaultSort, highlightRow, caption, emptyText = "No records", onRowClick, style }) {
  const [sort, setSort] = React.useState(defaultSort || null);
  const [hoverRow, setHoverRow] = React.useState(-1);
  const compact = variant === "compact";
  const comparison = variant === "comparison";
  const padY = compact ? 10 : 16;
  const sorted = React.useMemo(() => {
    if (!sort) return rows;
    const col = columns.find(c => c.key === sort.key);
    const get = r => (col && col.sortValue ? col.sortValue(r) : r[sort.key]);
    return [...rows].sort((a, b) => {
      const x = get(a), y = get(b);
      const r = typeof x === "number" && typeof y === "number" ? x - y : String(x ?? "").localeCompare(String(y ?? ""));
      return sort.dir === "asc" ? r : -r;
    });
  }, [rows, sort, columns]);
  const toggle = key => setSort(s => (s && s.key === key ? (s.dir === "asc" ? { key, dir: "desc" } : null) : { key, dir: "asc" }));
  const th = (c, i) => {
    const active = sort && sort.key === c.key;
    const canSort = sortable && c.sortable !== false;
    return (
      <th key={c.key} scope="col" aria-sort={active ? (sort.dir === "asc" ? "ascending" : "descending") : undefined}
        style={{ textAlign: c.numeric ? "right" : "left", padding: `${compact ? 8 : 12}px 16px`, fontSize: 11, fontWeight: 500, letterSpacing: "var(--ls-track-md)", textTransform: "uppercase", color: active ? "var(--text)" : "var(--text-muted)", borderBottom: "1px solid var(--border-strong)", whiteSpace: "nowrap", width: c.width, position: comparison && i === 0 ? "sticky" : undefined, left: comparison && i === 0 ? 0 : undefined, background: "var(--bg)", zIndex: comparison && i === 0 ? 1 : undefined }}>
        {canSort ? (
          <button type="button" onClick={() => toggle(c.key)} style={{ all: "unset", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 6 }}>
            {c.label}<Icon name="chevron-down" size={12} style={{ opacity: active ? 1 : 0.3, transform: active && sort.dir === "asc" ? "rotate(180deg)" : "none", transition: "transform var(--dur-fast) var(--ease-standard)" }} />
          </button>
        ) : c.label}
      </th>
    );
  };
  return (
    <div style={{ width: "100%", overflowX: "auto", fontFamily: "var(--font-sans)", color: "var(--text)", ...style }}>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: compact ? 13 : 14 }}>
        {caption ? <caption style={{ captionSide: "top", textAlign: "left", padding: "0 0 12px", fontSize: 12, letterSpacing: "var(--ls-track-xl)", textTransform: "uppercase", color: "var(--text-muted)" }}>{caption}</caption> : null}
        <thead><tr>{columns.map(th)}</tr></thead>
        <tbody>
          {sorted.length === 0 ? (
            <tr><td colSpan={columns.length} style={{ padding: "40px 16px", textAlign: "center", color: "var(--text-subtle)", borderBottom: "1px solid var(--border)" }}>{emptyText}</td></tr>
          ) : sorted.map((r, ri) => {
            const hl = highlightRow != null && (typeof highlightRow === "function" ? highlightRow(r, ri) : highlightRow === ri);
            const bg = hl ? "var(--accent-wash)" : onRowClick && hoverRow === ri ? "var(--bg-container-low)" : "var(--bg)";
            return (
              <tr key={r.id ?? ri} onClick={onRowClick ? () => onRowClick(r) : undefined} onMouseEnter={() => setHoverRow(ri)} onMouseLeave={() => setHoverRow(-1)}
                style={{ cursor: onRowClick ? "pointer" : "default", transition: "background var(--dur-fast) var(--ease-standard)" }}>
                {columns.map((c, ci) => (
                  <td key={c.key} style={{ padding: `${padY}px 16px`, borderBottom: "1px solid var(--border)", textAlign: c.numeric ? "right" : "left", fontVariantNumeric: c.numeric ? "tabular-nums" : undefined, verticalAlign: "top", lineHeight: 1.5,
                    fontWeight: comparison && ci === 0 ? 500 : 400, color: c.muted ? "var(--text-muted)" : "var(--text)", background: bg,
                    position: comparison && ci === 0 ? "sticky" : undefined, left: comparison && ci === 0 ? 0 : undefined }}>
                    {c.render ? c.render(r) : r[c.key]}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
