---
name: tableai-design
description: Use this skill to generate well-branded interfaces and assets for TABLE AI (Agent-to-Agent alliance, international think tank), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the readme.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

Quick rules (details in readme.md):
- White ground. Universe Deep Blue `#0A1626` for text and structure. Sundial Dark Gold `#A88B52` only for the one conversion action, active states and a single key figure — never more than ~8% of what is visible.
- Manrope everywhere (Noto Sans SC for 中文). Big type is light (300) and tight (−0.03em); labels are 12px uppercase tracked 0.3em.
- Hairlines, not boxes: 1px `#C5C6CD` rules and 1px-gap tile grids. Square cards; 2px control radius; no shadows.
- Motion: one easing `cubic-bezier(0.16,1,0.3,1)`; reveal = fade + rise + de-blur; hover lifts 2–4px; press scales 0.98.
- Icons: Lucide stroke set in `assets/icons/lucide/` via the `Icon` component. No emoji, no filled icons.
