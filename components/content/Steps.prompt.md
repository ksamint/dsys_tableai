Numbered process or ladder — methodology, onboarding, engagement tiers, timelines.

```jsx
<Steps active={1} items={[
  { title: "Diagnosis / Evaluation", meta: "One-off" },
  { title: "Coaching / Data Subscription", meta: "Annual" },
  { title: "Agent Deployment", meta: "Multi-year" },
]} />
```

- Omit `active` for a static process (all steps ink, no gold).
- `orientation="vertical"` for timelines and narrow columns (dot + hairline rail).
