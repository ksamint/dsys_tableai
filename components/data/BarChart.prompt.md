Minimal bar chart for comparisons and rankings in decks, documents and dashboards.

```jsx
<BarChart unit="%" highlight="Product & Engineering"
  data={[{ label: "Product & Engineering", value: 40 }, { label: "Expert Network", value: 25 }, { label: "Market", value: 20 }]} />
```

- `orientation="vertical"` for time series (set `height`).
- Gold only on the one bar the story is about; everything else deep blue.
