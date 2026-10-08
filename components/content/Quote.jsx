import React from "react";

/** Pull quote: large light type, optional gold 48px hairline above, tracked attribution line. */
export function Quote({ children, author, role, accent = true, size = "lg", align = "left", style }) {
  const fs = { md: "clamp(20px,2.2vw,26px)", lg: "clamp(24px,3vw,40px)" }[size] || size;
  return (
    <figure style={{ margin: 0, fontFamily: "var(--font-sans)", color: "var(--text)", textAlign: align, ...style }}>
      {accent ? <span aria-hidden="true" style={{ display: "block", width: 48, height: 1, background: "var(--accent)", margin: align === "center" ? "0 auto 32px" : "0 0 32px" }}></span> : null}
      <blockquote style={{ margin: 0, fontSize: fs, fontWeight: 300, lineHeight: 1.35, letterSpacing: "-0.02em", textWrap: "pretty" }}>{children}</blockquote>
      {author ? (
        <figcaption style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 4, alignItems: align === "center" ? "center" : "flex-start" }}>
          <span style={{ fontSize: 14, fontWeight: 500 }}>{author}</span>
          {role ? <span style={{ fontSize: 11, letterSpacing: "var(--ls-track-md)", textTransform: "uppercase", color: "var(--text-muted)" }}>{role}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
