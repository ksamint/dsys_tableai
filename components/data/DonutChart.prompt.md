Thin-ring donut for shares of a whole (allocation, mix, composition) with a legend.

```jsx
<DonutChart centerValue="100%" centerLabel="Allocation" highlight={0} unit="%"
  data={[{ label: "Product", value: 40 }, { label: "Experts", value: 25 }, { label: "Market", value: 20 }, { label: "Other", value: 15 }]} />
```

- Max ~5 segments (deep-blue ramp runs out after 4 + gold).
- `legend={false}` for small inline use.
