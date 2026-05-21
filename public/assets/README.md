# Image assets

Drop product screenshots and logos here. Vite serves anything in `public/` from the site root, so a file at `public/assets/argus-hero.png` is reachable at `/assets/argus-hero.png`.

## Slots that are currently placeholders

| Page                 | Slot                              | Suggested name              |
| -------------------- | --------------------------------- | --------------------------- |
| Landing — Solution   | Platform overview screenshot      | `landing-platform.png`      |
| Argus — top of page  | Investigation graph screenshot    | `argus-hero.png`            |
| Case Manager — hero  | Alert summary screenshot          | `case-manager-hero.png`     |
| Case Manager — designer two-col | Page designer canvas    | `case-manager-designer.png` |
| Case Manager — workflow two-col | Workflow canvas         | `case-manager-workflow.png` |
| Case Manager — RBAC  | Policy editor                     | `case-manager-rbac.png`     |
| Case Manager — stack | Architecture diagram              | `case-manager-system.png`   |
| Faro — hero          | Operations dashboard              | `faro-hero.png`             |
| Faro — verdicts      | Verdict console                   | `faro-verdicts.png`         |

To swap a placeholder for a real image, pass `src` to the `<ScreenshotFrame />` instance, e.g.

```tsx
<ScreenshotFrame src="/assets/argus-hero.png" alt="Argus investigation graph" />
```
