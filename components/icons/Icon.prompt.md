Lucide stroke icon (1.5px, currentColor) — use for every glyph; never hand-draw SVGs or use emoji.

```jsx
<Icon name="arrow-right" size={16} />
<Icon name="globe" size={20} style={{ color: "var(--text-muted)" }} />
<Icon name="loader-circle" style={{ animation: "ta-spin 1s linear infinite" }} />
```

- Names available: arrow-left, arrow-right, arrow-up-right, bell, bot, check, chevron-down, chevron-right, circle-alert, circle-check, copy, cpu, database, external-link, eye, file-text, globe, handshake, info, languages, layout-dashboard, loader-circle, lock, log-out, mail, map-pin, menu, minus, pencil, plus, search, send, settings, shield, sparkles, trash, user, users, x, zap.
- Sizes used in product: 12 (inline in eyebrow), 14–16 (buttons, nav), 20 (tile headers). Never fill icons; the brand is hairline strokes.
- Need another glyph? Copy its SVG from lucide-icons/lucide into assets/icons/lucide/ and regenerate ICON_PATHS.
