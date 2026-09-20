Card + TileGrid — square hairline containers; tiles sit in a 1px-gap grid.

```jsx
<TileGrid columns={3}>
  <Card variant="tile" number="01" eyebrow="Crossing Trust Threshold" title="The First '1'" description="A zero-trust, self-iterating settlement system" footer="Learn more →" arrow href="/protocol" />
  <Card variant="tile" number="02" … />
  <Card variant="tile" number="03" … />
</TileGrid>
<Card interactive title="X1 — Compliant Business Travel" description="…" />
<Card variant="dark" eyebrow="Node" title="Hong Kong" />
```

- No shadows, no rounded corners. Hover = border darkens + 2px lift (`.min-card`), tiles tint to surface-container-low.
- Padding 32 (lg 48). Keep copy short; the grid lines do the structuring.
