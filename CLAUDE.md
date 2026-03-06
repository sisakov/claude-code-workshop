# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server (localhost:5173)
npm run build     # Type-check + build to dist/
npm run lint      # ESLint with zero warnings allowed
npm run preview   # Preview the production build locally
```

There are no tests in this project.

## Architecture

Single-page application: a Claude Code workshop reference site deployed to GitHub Pages.

**Routing**: `HashRouter` (no basename) wraps everything in `main.tsx`. All routes are defined in `App.tsx` and rendered inside `AppShell`, which provides the sidebar + main content layout.

**Data layer**: All content lives in `src/data/` as typed TypeScript arrays — not fetched from any API. To add or edit workshop content, edit the relevant data file:
- `topics.ts` — sidebar nav items (drives both `Sidebar` and `App.tsx` routes)
- `commands.ts` — slash commands reference
- `mcpTools.ts` — MCP tools reference
- `exercises.ts` — practice exercises

**Pages** (`src/pages/`) are thin components that import from the data files and render using shared components. Adding a new page requires: (1) a new entry in `topics.ts`, (2) a new file in `src/pages/`, (3) a new `<Route>` in `App.tsx`.

**UI components** (`src/components/ui/`) are shadcn/ui components that were created manually — do not use the shadcn CLI (it fails on non-empty directories). Copy the component source from shadcn docs and place it in `src/components/ui/`.

**Shared components** (`src/components/shared/`): `CodeBlock` (syntax-highlighted code with copy button), `CopyButton`, `ExternalLink`.

## Critical Configuration

- `vite.config.ts` sets `base: "/claude-code-workshop/"` — required for GitHub Pages asset paths; do not remove or change
- `main.tsx` uses `<HashRouter>` with no `basename` prop — the Vite `base` handles the URL prefix
- `components.json` sets `"rsc": false` — prevents "use client" directives incompatible with Vite
- Tailwind v3 (not v4) — shadcn/ui targets v3; do not upgrade

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds and deploys `dist/` to GitHub Pages automatically. Live at `https://sisakov.github.io/claude-code-workshop/`.
