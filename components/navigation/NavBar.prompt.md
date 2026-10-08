NavBar — the TABLE AI site header.

```jsx
<NavBar logoSrc="assets/logo/tableai-a2a-mark.svg" lang={lang} onToggleLang={toggle} glass={scrolled} height={80}
  items={[{href:"/protocol",label:"Protocol"},{href:"/network",label:"Network"},{href:"/business",label:"AI Labs"},{href:"/about",label:"About"}]}
  activeHref={path} onNavigate={setPath} />
```

- Transparent over the hero; `glass` once scrollY > 50. Active link = 1px deep-blue rule; hover lifts 1px.
