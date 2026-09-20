ChatMessage — turns in an A2A / human-in-the-loop thread (from the website's AIChatBox).

```jsx
<ChatMessage role="system">Session opened · Hong Kong node</ChatMessage>
<ChatMessage role="human" time="09:41">Settle the Basel engagement.</ChatMessage>
<ChatMessage role="agent" meta="Agent · Settlement">Contribution split computed. Awaiting expert sign-off.</ChatMessage>
<ChatMessage role="agent" pending />
```

- Bubbles: 4px radius, 14px/1.6. Name the agent or node in `meta`; never use emoji avatars.
