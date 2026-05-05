# honcho-style — design system reference

The lived-in token + utility reference for the honcho-style aesthetic. Mirrors [honcho.dev](https://honcho.dev). Departure Mono everywhere, paper-warm light, olive-grey dark, hairline borders, soft shadows.

If you only read one thing: this repo is fork-and-reskin. The token names in `src/app/globals.css` are stable; the values are swappable. Don't rename tokens — recolour them.

---

## 1. Aesthetic in one paragraph

A terminal-meets-print register, low-contrast on purpose. The page is one font (Departure Mono), so character density and grid-feel do most of the heavy lifting. Borders are translucent foreground at 9-13% — almost imperceptible — so cards read as drawn-on-paper rather than filled. Radii are small (2-8px is the working range; 10-20px exists for one-off display surfaces). Shadows are wide, soft, low-opacity, never directional — they suggest lift, not depth. Light mode is *paper-warm cream* (`oklch(0.965 0.008 95)`); dark mode is *olive-grey* (`oklch(0.195 0.012 110)`) — greyer than near-black, faint olive-green undertone for warmth. The accent stays a single warm cream-yellow `oklch(0.88 0.115 90)` across both modes — no hue flip. A faint 32px graph-paper grid sits behind the body to anchor everything. Copy is terse, lowercase in chrome, uppercase for emphasis, middot-separated for metadata. Headlines opt into the `.pixel-display` utility, which disables anti-aliasing so Departure Mono's bitmap character renders crisp.

---

## 2. Colour tokens

All values are OKLCH. Defined twice — once in `:root` (light), once in `.dark`. Never hard-code colour in components; always reference a token.

### Surface

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--background` | `oklch(0.965 0.008 95)` | `oklch(0.195 0.012 110)` | Page background. Paper-warm vs olive-grey. |
| `--foreground` | `oklch(0.18 0.012 80)` | `oklch(0.93 0.01 95)` | All body text. |
| `--card` | `oklch(0.985 0.005 95)` | `oklch(0.225 0.012 110)` | Lifted surface for paper-card etc. |
| `--card-foreground` | mirrors fg | mirrors fg | Card text. |
| `--popover` / `--popover-foreground` | `oklch(0.985 0.005 95)` | `oklch(0.245 0.012 110)` | Floating overlays — one stop more lift than card. |

### Brand / signal

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--primary` | `oklch(0.18 0.012 80)` | `oklch(0.92 0.008 95)` | Solid CTA fill. |
| `--primary-foreground` | paper | olive | CTA text. |
| `--accent` | `oklch(0.88 0.115 90)` | `oklch(0.88 0.115 90)` | **Same warm cream-yellow in both modes.** Used for pricing-card border, badge highlight, ring on focus. No hue flip. |
| `--accent-foreground` | mirrors fg | mirrors bg | Text on accent fill. |
| `--destructive` | `oklch(0.55 0.22 27)` | `oklch(0.7 0.19 22)` | Errors / danger only. |

### Subdued

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--secondary` | `oklch(0.93 0.008 95)` | `oklch(0.27 0.012 110)` | Faint button fills, ghost surfaces. |
| `--muted` | as secondary | as secondary | Subtle background fills. |
| `--muted-foreground` | `oklch(0.5 0.012 85)` | `oklch(0.65 0.012 100)` | Metadata text — labels, kickers, supporting copy. |

### Structural

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--border` | `foreground / 13%` | `foreground / 11%` | Default divider — hairline translucent foreground. **Don't go heavier in marketing chrome.** |
| `--input` | `foreground / 17%` | `foreground / 15%` | Field outlines. |
| `--ring` | `foreground / 30%` | `foreground / 28%` | Focus ring. |

### Charts

`--chart-1` … `--chart-5` are calibrated to read as distinct in both modes. Used for data viz; rarely touch them in product UI.

### Pattern: hairline borders

The signature look is borders that aren't a separate "grey" colour — they're a translucent slice of the foreground at very low opacity. Use the `--border` token (or `border-border` in Tailwind) as the default. Reach for explicit `border-foreground/N` arbitrary opacity only when you intentionally need a stronger emphasis (and even then, stay ≤ 25%):

```tsx
<div className="border border-border ...">             // default — 11-13%
<div className="border border-foreground/25 ...">     // intentional emphasis (max)
```

Never use `border-foreground/40+` in marketing surfaces. It reads as too-noisy and pulls focus from copy.

---

## 3. Typography

| Token | Value | Use |
| --- | --- | --- |
| `--font-sans` | `var(--font-departure)` → Departure Mono | Default body. **Sans is mono on purpose — single font drives everything.** |
| `--font-mono` | same | Inline code, CLI snippets. |
| `--font-display` | same | Display headings — same face, different rendering. |

Departure Mono is loaded locally via `next/font/local`:

```tsx
const departureMono = localFont({
  src: "../fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure",
  display: "swap",
  weight: "400",
});
```

Fallback chain: `var(--font-departure), ui-monospace, "Geist Mono", monospace`.

### Scale

| Slot | Tailwind | Notes |
| --- | --- | --- |
| Display | `pixel-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase` | Hero only. **Add `pixel-display` for crisp bitmap rendering.** |
| H1 | `text-3xl sm:text-4xl font-semibold tracking-tight` | Page heading. |
| H2 | `text-2xl sm:text-3xl font-semibold tracking-tight` | Section heading. |
| H3 | `text-xl font-semibold` | Card title. |
| Body | `text-base` | Default paragraph. |
| Body-sm | `text-sm text-muted-foreground` | Supporting copy. |
| Label | `text-[11px] uppercase tracking-[0.3em] text-muted-foreground` | Kickers, metadata, table headers. Bracket-wrap (`[ kicker ]`) for honcho's signature label voice. |
| Mono kbd | `text-xs text-foreground/80` | CLI / code samples. Departure Mono is already mono. |

### Casing rules

- **Lowercase** for chrome (nav links, button labels, tab triggers, settings labels).
- **Uppercase** for emphasis (display headings, kicker labels, badges).
- **Bracket-wrap kickers**: `[ tier ]`, `[ aesthetic in five words ]`, `[ canonical ]` — honcho's signature label voice.
- **Title Case** rarely. Reserve for proper nouns and product names.

---

## 4. Radius scale

Sharp. 2-8px is the working range; larger values exist but are rarely the right answer.

| Token | Value | Use |
| --- | --- | --- |
| `--radius-sm` | `2px` | Inputs, switches, hairline tags. |
| `--radius-md` | `4px` | Buttons, badges, paper-card. |
| `--radius-lg` | `6px` | Default container radius. |
| `--radius-xl` | `8px` | shadcn `Card` (default). |
| `--radius-2xl` | `10px` | Large feature cards. |
| `--radius-3xl` | `14px` | Hero illustrations / image frames. |
| `--radius-4xl` | `20px` | Avatars, pills. |

`--radius` (the shadcn root) is `0.375rem` (6px) — drives the cascade.

---

## 5. Shadow scale

Three custom CSS variables, applied via `shadow-[var(--shadow-{name})]` (e.g. `shadow-[var(--shadow-card)]`). All shadows are wide, very low-opacity, no direction.

| Token | Value | Use |
| --- | --- | --- |
| `--shadow-paper` | `0 4px 18px -10px rgba(0,0,0,0.3)` | Subtle lift, hover-state cards. |
| `--shadow-card` | `0 8px 28px -14px rgba(0,0,0,0.4)` | Default `paper-card` resting state. |
| `--shadow-lift` | `0 20px 50px -28px rgba(0,0,0,0.55)` | Floating overlays, popovers, dialog content. |

---

## 6. Custom utilities

Defined as Tailwind v4 `@utility` blocks at the bottom of `src/app/globals.css`.

### `.paper-card`

The signature container. Use over composed shadcn `Card` for product / marketing surfaces.

```tsx
<div className="paper-card">
  <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">[ layer 01 ]</p>
  <h3 className="text-lg font-semibold">Paper card</h3>
</div>
```

Equivalent to: `bg-card text-card-foreground border border-border rounded-md shadow-[var(--shadow-paper)] p-6`.

### `.ledger-band`

Top + bottom hairline + translucent backdrop blur. Use for sticky headers, footers, callout strips.

```tsx
<header className="ledger-band sticky top-0 h-[68px] flex items-center">…</header>
```

### `.checkered-bg`

Very faint 32px graph-paper grid using foreground @ 3.5%. Applied globally to `<body>`. Add it to individual sections only when you want them to read as "primary surface."

### `.pixel-display`

Disables anti-aliasing and locks `letter-spacing` to 0. Apply to large headlines so Departure Mono's bitmap character renders crisp instead of being smoothed away.

```tsx
<h1 className="pixel-display text-7xl uppercase">TERMINAL × PRINT</h1>
```

---

## 7. Components

All shadcn primitives in `src/components/ui/`. **`base-nova` style — built on [Base UI](https://base-ui.com/)**, not Radix. Two API differences from older shadcn:

1. **No `asChild`.** Use Base UI's `render` prop instead:
   ```tsx
   <Button render={<Link href="/foo" />}>Go</Button>
   ```
2. **`Button` defaults to `nativeButton={true}`.** When you render it as anything other than a real `<button>`, also pass `nativeButton={false}`:
   ```tsx
   <Button nativeButton={false} render={<Link href="/foo" />}>Go</Button>
   ```
3. **`TooltipProvider`** takes `delay`, not `delayDuration`.

Components installed and themed in place: `button`, `card`, `input`, `label`, `badge`, `tabs`, `dialog`, `tooltip`, `separator`, `switch`. Add more with `npx shadcn@latest add <name>` — they inherit the theme automatically.

---

## 8. Patterns

These are composed examples that recur across honcho.dev. Don't formalise them as components until they appear in three places.

### Pricing tier card

```tsx
// Recommended tier — accent border at 60% opacity
<div className="border border-accent/60 bg-card p-5 rounded-md shadow-[var(--shadow-paper)]">
  <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">[ tier ]</span>
  <h4 className="mt-3 pixel-display text-2xl uppercase">Pro</h4>
  <p className="mt-1 pixel-display text-3xl">$20<span className="text-sm text-muted-foreground"> /mo</span></p>
</div>

// Other tiers — default border, hover-only emphasis
<div className="border border-border bg-card/40 p-5 rounded-md hover:border-foreground/25 transition-colors">
  …
</div>
```

### Key/value ledger

```tsx
<dl className="paper-card grid gap-2 text-sm sm:grid-cols-2">
  <div className="flex items-baseline justify-between border-b border-border py-1.5 last:border-0">
    <dt className="text-xs uppercase tracking-widest text-muted-foreground">Stack</dt>
    <dd>Next.js · Tailwind · shadcn</dd>
  </div>
</dl>
```

The dim-label / bright-value pattern. Builds scan-ability without a second colour.

### Terminal block

The CLI prompt strip — use for install instructions, code samples that need framing.

```tsx
<div className="flex items-center gap-3 border border-border bg-background/60 px-4 py-3">
  <span className="text-muted-foreground" aria-hidden>▸</span>
  <code className="flex-1 text-sm">npx create-next-app@latest my-app --ts</code>
  <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">copy</span>
</div>
```

### Bracket-wrapped kicker

A signature voice element. Use over plain uppercase labels in marketing surfaces.

```tsx
<p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
  [ aesthetic in five words ]
</p>
```

---

## 9. Voice

Copy that matches the visual register.

- **Terse, declarative.** Lead with the answer. Rarely use exclamation marks in chrome.
- **Lowercase navigation labels.** `style guide`, `source`, `showcase` — feels more terminal-native.
- **Uppercase for emphasis.** Display headings, kickers, badges.
- **Bracket-wrap kickers** (`[ canonical ]`, `[ tier ]`, `[ aesthetic in five words ]`) — honcho's signature label voice.
- **Dashes and middots for separators.** `v0.1 · canonical`, `memory — that — recurs`.
- **Avoid adjectives.** Honcho's marketing copy is verbs and nouns. "Memory that reasons" not "advanced memory system."

---

## 10. When to use this style — and when not

**Good fit:**
- Developer-facing surfaces (dashboards, docs, CLI marketing pages).
- AI / agent product pages where you want the page to feel "computed."
- Internal tools with dense data.
- Any product where the audience reads the screen.

**Bad fit:**
- Image-heavy commerce — mono captions on photos look engineering-y.
- Consumer-grade UX where warmth-of-personality matters more than precision.
- Children's / education product surfaces — too austere.
- Long-form prose reading apps — Departure Mono fatigues at body-length.

---

## 11. File map for fast reference

| Concern | File |
| --- | --- |
| All design tokens | `src/app/globals.css` `:root` + `.dark` |
| Custom utilities | `src/app/globals.css` `@utility` blocks at bottom |
| Body font + theme provider wiring | `src/app/layout.tsx` |
| Hero / showcase | `src/app/page.tsx` |
| Full style-guide UI | `src/app/style-guide/page.tsx` |
| Sticky header | `src/components/site-header.tsx` |
| Theme toggle | `src/components/theme-toggle.tsx` |
| shadcn primitives | `src/components/ui/*.tsx` |
| Departure Mono font + license | `src/fonts/` |

---

## 12. Updating this doc

Bump it when:
- A token changes value (record old → new with a date).
- A new utility is added to `globals.css`.
- A new pattern appears in three places (then formalise it in §8).
- The framework version changes materially (Next, Tailwind, shadcn).

Don't bump it for component additions or copy tweaks — the file map (§11) and `/style-guide` route already cover those.
