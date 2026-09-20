# UI kit — TABLE AI admin panel (CMS)

Recreation of the website's admin area (`client/src/components/AdminLayout.tsx`, `client/src/pages/admin/AdminDashboard.tsx`) plus data screens composed from the drizzle schema (`cms_content`: sectionKey, titleZh/En, sortOrder, isPublished; `locations`; `partners`).

| Screen | Source | Status |
|---|---|---|
| Sidebar layout | AdminLayout.tsx | recreated (256px, hairline, shield mark, user footer) |
| Dashboard | AdminDashboard.tsx | recreated (3 tiles, dashed “Initialize Content” card, seed action) |
| Content | AdminContent.tsx (not read) | composed from schema — table, publish switch, edit dialog with 中/EN tabs |
| Locations / Partners | AdminLocations.tsx / AdminPartners.tsx (not read) | composed from seed data — tables, category tags, active switch |
| Users / Settings / Login | not read | deep-blue skeleton placeholder |

Interactions: sidebar routing (`#content` …), publish/active switches with toasts, search + tabs filter, edit/create dialog, delete confirm, seed button loading state.

Design-system mapping: active nav = gold wash + gold hairline (design.md §4 “Active”); radii 2–4px instead of the source's 8px; hairline `--border-line` for the sidebar.
