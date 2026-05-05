<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# honcho-style — agent orientation

This repo is a **GitHub template repository**. Two readers land here:

1. **Working in `honcho-style` itself** — extending the design system, adding components, fixing bugs.
2. **Working in a project scaffolded FROM this template** — `gh repo create my-thing --template Cribsticks/honcho-style` clones this same `AGENTS.md` into the new repo.

In both cases, the canonical docs are:

- [`README.md`](./README.md) — stack, quickstart, the **"Forking for a new style"** five-step recipe (recolour `:root`, swap font, adjust radius, tweak shadows, edit utilities), shadcn `base-nova` API quirks.
- [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md) — every token, utility, and component reference.
- `src/app/style-guide/page.tsx` — live receipt that the system holds together. After any token / utility change, render this page and confirm nothing regressed.

## When scaffolding a new project from this template

1. Read README's "Forking for a new style" before touching anything — the system is intentionally narrow (5 knobs).
2. Keep the token names in `globals.css` stable; only swap values. Components depend on the names.
3. Update `/style-guide` to render anything new you add. That page is the contract.
4. Update this `AGENTS.md` and `README.md` for the new project's identity once retheming is done.

## Canonical wiki backlink

The vault entry `wiki/design-style-honcho.md` (in `~/Projects/thoughts/`) is the discovery breadcrumb — it points here. Don't duplicate the recipe there; extend the repo docs instead.
