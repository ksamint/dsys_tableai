Button — deep-blue primary/outline actions; use variant="cta" (Sundial Gold) for exactly one conversion action on a view.

```jsx
<Button size="lg" iconRight="arrow-right">Explore AHA Architecture</Button>
<Button variant="outline" size="lg">Learn More</Button>
<Button variant="cta" iconRight="arrow-right">Join the Alliance</Button>
<Button variant="ghost" icon="copy">Copy</Button>  <Button variant="link">View all partners</Button>
<Button loading>Saving</Button>
```

- Sizes: sm 32 / md 40 / lg 56px; 2px radius; 14px medium, 0.02em tracking.
- Hover: primary lightens to deep-blue-muted; outline grows a 1px gold bottom line; active/pressed = gold border + gold-mist wash (design.md §4).
- Never put two cta buttons side by side; pair cta with outline or ghost.
