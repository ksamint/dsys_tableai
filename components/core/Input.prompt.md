Input — hairline text field with tracked uppercase label; gold focus state.

```jsx
<Input label="Email" placeholder="you@company.com" icon="mail" />
<Input label="Node name" hint="Shown on the network map" required />
<Input label="Amount" prefix="HK$" error="Enter a positive amount" defaultValue="-4" />
```

- 40px tall (sm = 32), 2px radius, 14px text, placeholder in ink-variant.
- Use FieldLabel to wrap custom controls with the same label/hint/error treatment.
