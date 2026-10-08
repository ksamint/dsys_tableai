import React from "react";
import { Icon } from "../icons/Icon.jsx";

/**
 * One turn in an agent-to-agent / human-in-the-loop thread (from the website's AIChatBox). `role`: "agent" (left,
 * surface bubble, sparkles avatar), "human" (right, deep-blue bubble, user avatar), "system" (centered hairline note).
 * `meta` is a tracked eyebrow above the bubble — use it to name the agent or node ("AGENT · SETTLEMENT", "EXPERT · BASEL").
 */
export function ChatMessage({ role = "agent", children, meta, time, pending = false, avatar, maxWidth = "80%", style }) {
  if (role === "system") {
    return <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--font-sans)", fontSize: 11, letterSpacing: "var(--ls-track-md)", textTransform: "uppercase", color: "var(--text-subtle)", ...style }}><span style={{ flex: 1, height: 1, background: "var(--border)" }} />{children}<span style={{ flex: 1, height: 1, background: "var(--border)" }} /></div>;
  }
  const human = role === "human";
  const av = avatar || (
    <span style={{ width: 32, height: 32, borderRadius: "50%", flexShrink: 0, display: "inline-flex", alignItems: "center", justifyContent: "center", marginTop: meta ? 22 : 2,
      background: human ? "var(--bg-inverse)" : "var(--accent-wash)", color: human ? "var(--text-on-inverse)" : "var(--accent-text)", border: human ? "1px solid transparent" : "1px solid rgba(168,139,82,0.35)" }}>
      <Icon name={human ? "user" : "sparkles"} size={16} />
    </span>
  );
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", justifyContent: human ? "flex-end" : "flex-start", fontFamily: "var(--font-sans)", ...style }}>
      {!human ? av : null}
      <div style={{ display: "flex", flexDirection: "column", alignItems: human ? "flex-end" : "flex-start", gap: 6, maxWidth }}>
        {meta ? <span style={{ fontSize: 11, letterSpacing: "var(--ls-track-md)", textTransform: "uppercase", color: "var(--text-subtle)" }}>{meta}</span> : null}
        <div style={{ padding: "10px 16px", borderRadius: "var(--radius)", fontSize: 14, lineHeight: 1.6, whiteSpace: "pre-wrap", background: human ? "var(--bg-inverse)" : "var(--bg-container-low)", color: human ? "var(--text-on-inverse)" : "var(--text-body)", border: human ? "1px solid transparent" : "1px solid var(--border)" }}>
          {pending ? <Icon name="loader-circle" size={16} style={{ color: "var(--text-muted)", animation: "ta-spin 1s linear infinite", display: "block" }} /> : children}
        </div>
        {time ? <span style={{ fontSize: 11, color: "var(--text-subtle)" }}>{time}</span> : null}
      </div>
      {human ? av : null}
    </div>
  );
}
