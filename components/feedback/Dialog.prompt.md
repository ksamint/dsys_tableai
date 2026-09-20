Dialog / ConfirmDialog — focused decisions; keep to one primary action.

```jsx
<Dialog open={open} onClose={close} eyebrow="Partners" title="Add partner" actions={<><Button variant="ghost" onClick={close}>Cancel</Button><Button>Save</Button></>}>
  <Input label="Name (EN)" />
</Dialog>
<ConfirmDialog open={del} danger title="Delete location?" description="This removes the node from the map." confirmLabel="Delete" onConfirm={…} onClose={…} />
```
