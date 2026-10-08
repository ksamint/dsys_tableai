Hairline data table for benchmarks, feature matrices, admin lists and any tabular figures.

```jsx
<DataTable sortable caption="Products"
  columns={[{ key: "name", label: "Product" }, { key: "buyer", label: "Buyer", muted: true }, { key: "weeks", label: "Weeks", numeric: true }]}
  rows={[{ id: 1, name: "Expert Evals", buyer: "Financial institutions", weeks: 6 }]} />
```

- `variant`: `default` (16px rows) · `compact` (admin) · `comparison` (sticky bold first column).
- `highlightRow` marks one row with the gold wash — e.g. "Table AI" in a comparison. Never more than one.
- `render(row)` for cells holding Badge/Tag/Switch. Numbers: always `numeric`.
