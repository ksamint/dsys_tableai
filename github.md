repo: ksamint/dsys_tableai
branch: main
path: TABLEAI

## Last sync
date: 2026-09-20T08:16:36Z
### Updated in this project
- Checked upstream: TABLEAI/tokens/tableai.tokens.json and TABLEAI/TableAI_DESIGN.md unchanged since previous sync — no token or guideline drift
- No files rebuilt this sync

## Sync history
### 2026-09-20T05:20:00Z
- Tokens rebuilt from TABLEAI/tokens/tableai.tokens.json and TableAI_DESIGN.md front-matter (colors, type, spacing, radius)
- Brand assets pulled from data/assets.json media URLs (A2A logo ×2, brand hero)
- Component states (default / hover / active / loading) implemented per TableAI_DESIGN.md §4
- Website + admin UI kits recreated from the sibling repo ksamint/table-ai-website (pages, Navbar, Footer, seed copy)

## Screen map
| Screen / file | Repo files |
|---|---|
| tokens/colors.css | TABLEAI/tokens/tableai.tokens.json, TABLEAI/TableAI_DESIGN.md (front-matter colors), data/theme.json |
| tokens/typography.css, tokens/spacing.css, tokens/radius.css | TABLEAI/tokens/tableai.tokens.json, TABLEAI/TableAI_DESIGN.md |
| assets/logo/*.png, assets/brand/tableai-brand-hero.png | data/assets.json (mediaUrl) |
| guidelines/states.html, components/* | TABLEAI/TableAI_DESIGN.md §4 组件状态 |
| ui_kits/website/* | ksamint/table-ai-website: client/src/pages/{Home,ProtocolPage,NetworkPage,BusinessPage,AboutPage}.tsx, components/{Navbar,Footer}.tsx, server/seed.ts, client/src/index.css |
| ui_kits/admin/* | ksamint/table-ai-website: client/src/components/AdminLayout.tsx, client/src/pages/admin/AdminDashboard.tsx, server/seed.ts |
| components/a2a/* | ksamint/table-ai-website: client/src/components/AIChatBox.tsx |
| components/icons/* , assets/icons/lucide | lucide-icons/lucide icons/*.svg (set used by table-ai-website) |
| assets/fonts/Manrope[wght].ttf | google/fonts ofl/manrope |
