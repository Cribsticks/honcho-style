# honcho-style

A reusable **Next.js 16 + Tailwind v4 + shadcn/ui** design system that mirrors the visual identity of [honcho.dev](https://honcho.dev).

**Departure Mono** everywhere · paper-warm light · olive-grey dark · hairline borders · soft custom shadows · faint graph-paper background · `pixel-display` headlines.

> Fork it, retheme it, ship it. The token names in `globals.css` are stable; the values are swappable.

![License: MIT](https://img.shields.io/badge/license-MIT-black?style=flat-square) ![Font: MIT](https://img.shields.io/badge/font-MIT-black?style=flat-square) ![Stack: Next.js 16](https://img.shields.io/badge/Next.js-16-black?style=flat-square) ![Style: shadcn](https://img.shields.io/badge/shadcn-base--nova-black?style=flat-square)

---

## What's in here

```
src/
├── app/
│   ├── globals.css         ← all design tokens + custom utilities
│   ├── layout.tsx          ← Departure Mono, theme provider, tooltip provider
│   ├── page.tsx            ← hero / showcase
│   └── style-guide/
│       └── page.tsx        ← every token + utility + component, on one scrollable page
├── components/
│   ├── site-header.tsx     ← sticky ledger-band header
│   ├── site-footer.tsx     ← matching footer
│   ├── theme-provider.tsx  ← next-themes wrapper
│   ├── theme-toggle.tsx    ← sun/moon switcher
│   └── ui/                 ← shadcn primitives (base-nova style, base-ui under the hood)
├── fonts/
│   ├── DepartureMono-Regular.woff2
│   └── LICENSE.txt         ← OFL 1.1 + Departure Mono attribution
└── lib/utils.ts
```

Read [`DESIGN-SYSTEM.md`](./DESIGN-SYSTEM.md) for the full token + utility reference.

## Quickstart

```bash
git clone https://github.com/Cribsticks/honcho-style.git
cd honcho-style
npm install
npm run dev      # http://localhost:3000
```

- `/` — hero showcase
- `/style-guide` — every token, utility, component, and pattern on one scrollable page
- Theme toggle is top-right (system / light / dark; defaults to dark)

```bash
npm run build    # type-check + production build
npm run start    # serve the built output
npm run lint     # eslint
```

## Stack

- **Next.js 16** (App Router, Turbopack)
- **TypeScript 5**
- **Tailwind CSS v4** (CSS-variable theming)
- **shadcn/ui** (`base-nova` style, built on [Base UI](https://base-ui.com/))
- **[Departure Mono](https://departuremono.com/)** by Helena Zhang & Tobias Fried — single font, both display and body. Loaded locally via `next/font/local`. **MIT** licensed; the woff2 and license text are committed at `src/fonts/`.
- **next-themes** (system / light / dark)
- **lucide-react** (icons)

## The aesthetic in one paragraph

A terminal-meets-print register. The page is one font (Departure Mono), so character density and grid-feel do most of the heavy lifting. Borders are translucent foreground at 9-13% — almost imperceptible — so cards read as drawn-on-paper rather than filled. Radii are small (2-8px is the working range). Shadows are wide, soft, low-opacity, never directional. Light mode is paper-warm cream; dark mode is olive-grey (low contrast, faint olive-green undertone). The accent stays a single warm cream-yellow across both modes. A faint 32px graph-paper grid sits behind the body. Copy is terse, lowercase in chrome, uppercase for emphasis, middot-separated for metadata. Headlines use a `pixel-display` utility that disables anti-aliasing for crisp bitmap rendering.

## Forking for a new style

The system is intentionally narrow — five things define the look. Swap them and you have a new design system without touching component code.

1. **Recolour `:root` and `.dark`** in `src/app/globals.css`. Keep the token names; only swap the OKLCH values.
2. **Swap the body font** in `src/app/layout.tsx` and `--font-sans` / `--font-mono` / `--font-display` in `globals.css`. Drop a `.woff2` in `src/fonts/` and update the `localFont({ src })` path.
3. **Adjust the radius scale** at the top of `globals.css`. honcho-style is sharp (2-8px). For a softer system, push everything by 2-4px.
4. **Tweak the shadow scale** (`--shadow-paper`, `--shadow-card`, `--shadow-lift`) — colour, blur, and spread are the personality knobs.
5. **Edit the utilities** (`@utility paper-card`, `@utility ledger-band`, `@utility checkered-bg`, `@utility pixel-display`) or write new ones for surfaces that recur in the new style.

Then update `/style-guide` to render anything you add — that page is your receipt that the system holds together.

## shadcn `base-nova` API quirks

This project uses the new `base-nova` shadcn style, which sits on top of [Base UI](https://base-ui.com/) instead of Radix. Two API differences from older shadcn:

- **`asChild` is gone.** Use Base UI's `render` prop:
  ```tsx
  <Button render={<Link href="/foo" />}>Go</Button>
  ```
- **`Button` defaults to `nativeButton={true}`.** When you `render` it as anything other than a real `<button>` (e.g. a `<Link>` or `<a>`), pass `nativeButton={false}` to silence the runtime warning.
- **`TooltipProvider`** takes `delay`, not `delayDuration`.

## Add more components

```bash
npx shadcn@latest add <name>
```

They inherit the theme automatically — no per-component overrides needed.

## License

- **Project code**: [MIT](./LICENSE).
- **Departure Mono font**: [MIT](./src/fonts/LICENSE.txt). Copyright © 2024 Helena Zhang & Tobias Fried.

## Credit

This design system mirrors the visual identity of [honcho.dev](https://honcho.dev) by [Plastic Labs](https://plasticlabs.ai/). honcho-style is a reusable starter — not affiliated with Plastic Labs or Honcho. Visit honcho.dev for the source aesthetic.
