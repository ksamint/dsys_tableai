# UI kit — TABLE AI website

Click-through recreation of the public site in `ksamint/table-ai-website` (client/src/pages/*.tsx, Navbar.tsx, Footer.tsx), re-skinned with this design system's tokens (Manrope, Universe Deep Blue, Sundial Gold on the single closing CTA). All copy is verbatim from `server/seed.ts` and switches 中/EN with the header toggle.

| File | Recreates |
|---|---|
| `index.html` | Shell, layout CSS, script loading (`@dsCard`, `@startingPoint`) |
| `content.jsx` | `SITE` — every string as `{zh, en}` (seed.ts CMS rows, nav, footer, partners, locations) |
| `shell.jsx` | LangProvider, hash router, Reveal (useInView), Section/Container, PageHero, Overview, FeatureRows, CtaSection, Footer |
| `home.jsx` | Home.tsx — hero, stats strip, thresholds, AHA tiles, 1+1+X pillars, AI Labs cards, partners, CTA |
| `pages.jsx` | ProtocolPage, NetworkPage, BusinessPage (AI Labs, accordion), AboutPage (profile rows, node list, partner list) |
| `app.jsx` | Router + NavBar wiring, scroll progress bar, glass header after 50px |

Interactions: nav routing (`#/protocol` …), 中/EN toggle (persisted), scroll reveals, hover lifts, accordion (labs details, partners), glass header, count-up stats.

Not recreated: `WorldMap.tsx` (67 KB of country paths) — the About page keeps a labelled map slot with the seven nodes plotted by lat/lng; admin routes live in `../admin/`. The source site ships Inter + pure neutral greys; this kit applies the brand tokens instead (see root readme → "Source conflicts").
