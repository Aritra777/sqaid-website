# SqAId Website

Marketing website for SqAId — AI-powered risk and compliance platform.

## Stack

- **Vite + React 18** with TypeScript
- **React Router 6** for client-side routing
- **CSS** with design tokens, no UI library
- Inter (UI) + JetBrains Mono (code) via Google Fonts

## Local development

```bash
npm install
npm run dev
```

Visit http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/   — shared UI (Nav, Footer, primitives)
  pages/        — one folder per route (landing + product pages)
  styles/       — global.css + tokens.css
  App.tsx       — route table
  main.tsx      — entry
```

## Pages

- `/` — Landing
- `/products/argus` — Argus (financial-crime intelligence)
- `/products/case-manager` — Case Manager
- `/products/faro` — Faro (fraud + AML microservices)
- `/products/sentinel` — Fourth product (Coming soon)

## Image placeholders

Product screenshots are stubbed via `<ScreenshotFrame />` until real assets land in `public/assets/`.
