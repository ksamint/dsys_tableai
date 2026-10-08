Hairline accordion for FAQs, scenario details, partner bios — anything secondary that should stay collapsed.

```jsx
<Accordion items={[
  { title: "Core Strategy", content: "…" },
  { title: "Core Capability", content: "…" },
]} />
```

- `indicator="chevron"` in lists where rows carry other content (partner list pattern).
- `multiple` to allow several open; `defaultOpen={[0]}` to open the first.
