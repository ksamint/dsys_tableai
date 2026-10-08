import React from "react";

/**
 * Team / advisor card. Square portrait slot (never circular), name, role in tracked caps, short bio.
 * Without `photo` a hairline square with the initial stands in — no stock faces.
 */
export function PersonCard({ name, role, bio, photo, initial, tags = [], layout = "vertical", style }) {
  const horizontal = layout === "horizontal";
  const portrait = photo
    ? <img src={photo} alt={typeof name === "string" ? name : ""} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) contrast(1.05)", display: "block" }} />
    : <span style={{ fontSize: horizontal ? 28 : 40, fontWeight: 200, color: "var(--text-subtle)" }}>{initial || (typeof name === "string" ? name.trim()[0] : "")}</span>;
  return (
    <article style={{ display: horizontal ? "grid" : "flex", gridTemplateColumns: horizontal ? "96px 1fr" : undefined, flexDirection: "column", gap: horizontal ? 24 : 20, fontFamily: "var(--font-sans)", color: "var(--text)", ...style }}>
      <div style={{ aspectRatio: horizontal ? "1 / 1" : "4 / 5", width: "100%", border: "1px solid var(--border)", background: "var(--bg-container-low)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        {portrait}
      </div>
      <div style={{ minWidth: 0 }}>
        <h4 style={{ margin: "0 0 6px", fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1.3 }}>{name}</h4>
        {role ? <p style={{ margin: "0 0 12px", fontSize: 11, letterSpacing: "var(--ls-track-md)", textTransform: "uppercase", color: "var(--text-muted)", lineHeight: 1.5 }}>{role}</p> : null}
        {bio ? <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)" }}>{bio}</p> : null}
        {tags.length ? (
          <ul style={{ listStyle: "none", margin: "16px 0 0", padding: 0, display: "flex", flexWrap: "wrap", gap: 6 }}>
            {tags.map(t => <li key={t} style={{ fontSize: 11, padding: "3px 8px", border: "1px solid var(--border)", borderRadius: "var(--radius-sm)", color: "var(--text-muted)" }}>{t}</li>)}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
