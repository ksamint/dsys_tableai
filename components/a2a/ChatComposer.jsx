import React from "react";
import { Textarea } from "../core/Textarea.jsx";
import { IconButton } from "../core/IconButton.jsx";
import { Tag } from "../display/Tag.jsx";

/**
 * Message input for the chat box: auto-growing textarea + deep-blue send button, hairline top rule.
 * Enter sends, Shift+Enter breaks a line. `suggestions` render as Tag chips above the field (empty-state prompts).
 */
export function ChatComposer({ onSend, placeholder = "Type your message...", disabled = false, loading = false, suggestions = [], value: controlled, onChange, style }) {
  const [inner, setInner] = React.useState("");
  const value = controlled ?? inner;
  const set = v => { onChange ? onChange(v) : setInner(v); };
  const send = text => { const t = (text ?? value).trim(); if (!t || disabled || loading) return; onSend && onSend(t); set(""); };
  return (
    <div style={{ borderTop: "1px solid var(--border)", background: "rgba(255,255,255,0.5)", padding: 16, display: "flex", flexDirection: "column", gap: 12, fontFamily: "var(--font-sans)", boxSizing: "border-box", ...style }}>
      {suggestions.length ? <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>{suggestions.map(s => <Tag key={s} size="sm" onClick={() => send(s)} disabled={disabled || loading}>{s}</Tag>)}</div> : null}
      <form onSubmit={e => { e.preventDefault(); send(); }} style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
        <Textarea rows={1} autoGrow maxHeight={128} value={value} onChange={e => set(e.target.value)} placeholder={placeholder} disabled={disabled} containerStyle={{ flex: 1 }}
          onKeyDown={e => { if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); send(); } }} />
        <IconButton icon="send" label="Send" variant="primary" loading={loading} disabled={!value.trim() || disabled} onClick={() => send()} style={{ height: 38, width: 38 }} />
      </form>
    </div>
  );
}
