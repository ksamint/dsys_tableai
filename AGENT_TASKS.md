# AGENT_TASKS — Table AI Design System

**Status (2026-10-06):** tasks 1, 2, 3, 5, 6, 7, 8 done in this project; task 4 partly done (pitch-deck and one-pager templates built, starting-point tags removed; website/admin not converted to templates); task 9 open — needs a commit to GitHub.

Open work for a coding agent (e.g. Claude Code with the `tableai-design` skill). Each task is self-contained; run them in order or one at a time ("Do task 3"). Read `README.md` and `SKILL.md` first. Ground rules for every task:

- Chinese copy is **Traditional (Hong Kong usage)**, 「」 quotes. English is a formal translation.
- No client names, deal status, prices or fundraising terms anywhere in the system.
- Colours/type/spacing come from `tokens/*.css` only. Gold ≤ ~8% of a view. Square cards, 2px controls, 4px dialogs.
- Components: `components/<group>/<Name>.jsx` + `<Name>.d.ts` + `<Name>.prompt.md`, one `@dsCard` HTML per directory. Never write `_ds_bundle.js`, `_ds_manifest.json`, `_adherence.oxlintrc.json`.
- After each task: update `README.md` (Components / Index), refresh `github.md` → `## Last sync`.

---

## 1. Heading roles (tokens)
Two heading systems coexist: the token scale (600–700 weight) and the website (300 light).
- Add to `tokens/typography.css`: `--type-marketing-*` (light 300, tight tracking: display, h1, h2, h3) and `--type-product-*` (600: h1 24px, h2 20px, h3 16px), each as size / weight / line-height / tracking tokens with `/* @kind */` comments.
- Update `guidelines/type-headlines.html` to show both rows side by side, labelled Marketing vs Product.
- Rule for README: marketing surfaces (site, decks, documents) use light; admin/product UI uses semibold.

## 2. Status colours
Only `--danger` exists. Add muted, on-brand success and warning:
- `--color-success:#2F5D4E`, `--color-success-container:#E3EEE9`, `--color-warning:#8A5A12`, `--color-warning-container:#F6EBD7` (check ≥4.5:1 text contrast; adjust if needed) + semantic aliases `--success`, `--success-bg`, `--warning`, `--warning-bg`.
- Update `Badge` (`success`, new `warning` variant), `Toast` (tone), `guidelines/colors-semantic.html`.

## 3. Missing components (for studio, investor and admin material)
Build in `components/data/` and `components/content/`:
- **DataTable** — hairline rows, tracked uppercase header, optional numeric right-align with tabular numerals, sortable header, zebra off. Variants: `compact`, `comparison` (first column sticky).
- **Steps** — numbered ladder/process (01 → 02 → 03), horizontal and vertical; hairline connectors; active step gold hairline.
- **Accordion** — lift from `ui_kits/website/pages.jsx` (`.acc` pattern) into a component.
- **PersonCard** — name, role, 2–3 line bio, optional square portrait slot (no circles except avatars).
- **Quote** — large light pull quote with attribution line.
- **BarChart / DonutChart** — minimal SVG, deep-blue ramp + one gold highlight, labels in tracked caps; no gridline clutter.
Add each to the relevant `@dsCard` and replace hand-built equivalents in the UI kits.

## 4. Templates (replace deprecated starting points)
Create `templates/<slug>/<Slug>.dc.html` Design Components with `<!-- @template … -->` first line and `ds-base.js`:
- `pitch-deck` — 16:9 deck: cover, section divider, statement, 3-up products, table, chart, team, closing. Bilingual-ready.
- `one-pager` — A4 printable company overview (Studio → proof → infrastructure → network).
- `website` and `admin` — convert `ui_kits/website/index.html` and `ui_kits/admin/index.html`.
Then remove all `@startingPoint` tags (Button, Card, Input, ChatMessage, website, admin).

## 5. Logo lockups
- Build `assets/logo/tableai-lockup-horizontal.svg` and `-stacked.svg` from `tableai-a2a-mark.svg` + "TABLE AI" wordmark (Manrope 500, 0.1em tracking) **converted to outlines** so the files need no font.
- Generate `favicon.ico` (16/32/48) from `assets/logo/favicon/favicon-32.png` source; add a `site.webmanifest`.
- Note: `tableai-a2a-mark.svg` is a programmatic trace of the PNG master. If an original vector exists, replace it and re-export `assets/logo/png/*` and `assets/logo/favicon/*`.

## 6. Admin kit gaps
`ui_kits/admin`: Users, Settings and Login screens are skeleton placeholders. Rebuild them from `ksamint/table-ai-website` → `client/src/pages/admin/*` (read the source; do not invent). Login: centred card, mark, email + password, primary button.

## 7. Accessibility pass
- Every interactive component: visible `:focus-visible` (2px gold, token `--focus-ring-width`), keyboard operation, ARIA roles (Tabs → `tablist/tab/tabpanel` with arrow keys; Dialog → focus trap + Esc + return focus; Tooltip → `aria-describedby`; Switch → `role="switch"`).
- Contrast audit of all text tokens on white/surface/deep blue; record ratios in `guidelines/colors-neutral.html`.

## 8. Documentation
- Add `guidelines/do-dont.html` (Brand group): gold overuse, rounded cards, coloured left borders, gradients, emoji, letter-spaced Chinese — each as a small do/don't pair.
- Add `guidelines/voice.html` (Brand group): 3 bilingual copy examples (headline, button, stat) following README → Content fundamentals.

## 9. Sync to GitHub
Commit everything except the generated files listed in `.gitignore` to `ksamint/dsys_tableai` (branch `main`, or open a PR). Record the resulting commit sha in `github.md` → `## Last sync` → `commit:`.
