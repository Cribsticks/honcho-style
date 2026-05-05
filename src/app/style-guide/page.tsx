import { Bell, Check, Copy, Sparkles } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const metadata = {
  title: "Style guide — honcho-style",
  description: "Tokens, utilities, components, and patterns for the honcho-style design system.",
};

const PALETTE: { name: string; token: string; note: string }[] = [
  { name: "background", token: "--background", note: "warm paper / deep slate" },
  { name: "foreground", token: "--foreground", note: "near-black / cool cream" },
  { name: "card", token: "--card", note: "lifted surface" },
  { name: "primary", token: "--primary", note: "ink / cream — solid CTA" },
  { name: "secondary", token: "--secondary", note: "subdued surface" },
  { name: "muted", token: "--muted", note: "low-emphasis fills" },
  { name: "muted-foreground", token: "--muted-foreground", note: "metadata text" },
  { name: "accent", token: "--accent", note: "honcho yellow / cool sky" },
  { name: "destructive", token: "--destructive", note: "danger / errors" },
  { name: "border", token: "--border", note: "fg @ 18% — translucent" },
  { name: "ring", token: "--ring", note: "focus outline" },
];

const RADII = [
  { label: "sm", value: "2px", token: "--radius-sm" },
  { label: "md", value: "4px", token: "--radius-md" },
  { label: "lg", value: "6px", token: "--radius-lg" },
  { label: "xl", value: "8px", token: "--radius-xl" },
  { label: "2xl", value: "12px", token: "--radius-2xl" },
];

const SHADOWS = [
  { label: "paper", token: "--shadow-paper", note: "subtle lift, hairline cards" },
  { label: "card", token: "--shadow-card", note: "default paper-card" },
  { label: "lift", token: "--shadow-lift", note: "floating overlays, popovers" },
];

const TYPE_SCALE = [
  { label: "Display", className: "text-5xl font-bold tracking-tight uppercase", sample: "Memory that reasons" },
  { label: "H1", className: "text-3xl font-semibold tracking-tight", sample: "Section heading" },
  { label: "H2", className: "text-2xl font-semibold tracking-tight", sample: "Subsection" },
  { label: "H3", className: "text-xl font-semibold", sample: "Card title" },
  { label: "Body", className: "text-base", sample: "Lead with the answer; background after." },
  { label: "Body sm", className: "text-sm text-muted-foreground", sample: "Supporting copy in muted-foreground." },
  { label: "Label", className: "text-xs uppercase tracking-widest text-muted-foreground", sample: "Layer 01 · token" },
  { label: "Mono kbd", className: "text-xs font-mono text-foreground/80", sample: "$ npx create-next-app" },
];

export default function StyleGuide() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Page header */}
        <section className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Reference</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
              Style guide
            </h1>
            <p className="mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
              Every token, utility, component, and pattern in the honcho-style system. Toggle the
              theme top-right to see both modes. Anchors below for deep links.
            </p>

            <nav className="mt-6 flex flex-wrap gap-2 text-xs uppercase tracking-widest">
              {[
                { href: "#tokens", label: "Tokens" },
                { href: "#utilities", label: "Utilities" },
                { href: "#components", label: "Components" },
                { href: "#patterns", label: "Patterns" },
                { href: "#voice", label: "Voice" },
                { href: "#reference", label: "Reference" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="border border-border bg-background px-3 py-1.5 hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </section>

        {/* TOKENS */}
        <Section id="tokens" kicker="01" title="Tokens" lede="Colour, type, radius, shadow.">
          <h3 className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">Palette</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PALETTE.map((p) => (
              <PaletteSwatch key={p.token} {...p} />
            ))}
          </div>

          <Separator className="my-12" />

          <h3 className="text-sm uppercase tracking-widest text-muted-foreground">Type scale</h3>
          <div className="mt-4 paper-card flex flex-col gap-4">
            {TYPE_SCALE.map((t) => (
              <div key={t.label} className="flex items-baseline justify-between gap-6 border-b border-border pb-3 last:border-0 last:pb-0">
                <span className={t.className}>{t.sample}</span>
                <span className="shrink-0 text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t.label}
                </span>
              </div>
            ))}
          </div>

          <Separator className="my-12" />

          <h3 className="text-sm uppercase tracking-widest text-muted-foreground">Radius scale</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-5">
            {RADII.map((r) => (
              <div key={r.label} className="flex flex-col items-center gap-2">
                <div
                  className="size-20 border border-border bg-card shadow-[var(--shadow-paper)]"
                  style={{ borderRadius: `var(${r.token})` }}
                />
                <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {r.label} · {r.value}
                </span>
              </div>
            ))}
          </div>

          <Separator className="my-12" />

          <h3 className="text-sm uppercase tracking-widest text-muted-foreground">Shadow scale</h3>
          <div className="mt-4 grid gap-6 sm:grid-cols-3">
            {SHADOWS.map((s) => (
              <div key={s.label} className="flex flex-col gap-3">
                <div
                  className="h-28 rounded-md border border-border bg-card"
                  style={{ boxShadow: `var(${s.token})` }}
                />
                <div className="flex items-baseline justify-between text-xs">
                  <span className="font-semibold uppercase tracking-widest">{s.label}</span>
                  <code className="text-muted-foreground">{s.token}</code>
                </div>
                <p className="text-xs text-muted-foreground">{s.note}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* UTILITIES */}
        <Section
          id="utilities"
          kicker="02"
          title="Utilities"
          lede="Three custom @utility classes layered on top of shadcn."
        >
          <div className="grid gap-5 md:grid-cols-3">
            <Utility
              name=".paper-card"
              note="Card surface + foreground/50 border + soft card shadow + low radius. The signature container."
            >
              <div className="paper-card">
                <p className="text-xs uppercase tracking-widest text-muted-foreground">Layer 01</p>
                <h4 className="mt-2 text-lg font-semibold">Paper card</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  The default container for product surfaces.
                </p>
              </div>
            </Utility>

            <Utility
              name=".ledger-band"
              note="Top + bottom hairline + translucent backdrop blur. Headers, footers, sticky nav."
            >
              <div className="ledger-band p-4 text-xs uppercase tracking-widest">
                Sticky header sample · v0.1
              </div>
            </Utility>

            <Utility
              name=".checkered-bg"
              note="Subtle 24px graph-paper grid using foreground @ 6%. Applied globally to the body."
            >
              <div className="checkered-bg h-32 border border-border" />
            </Utility>
          </div>
        </Section>

        {/* COMPONENTS */}
        <Section
          id="components"
          kicker="03"
          title="Components"
          lede="shadcn primitives themed in place."
        >
          <ComponentBlock title="Button">
            <div className="flex flex-wrap items-center gap-3">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button>Default</Button>
              <Button size="lg">Large</Button>
              <Button size="icon" aria-label="bell">
                <Bell className="size-4" />
              </Button>
            </div>
          </ComponentBlock>

          <ComponentBlock title="Badge">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>Default</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
              <Badge variant="outline" className="uppercase tracking-widest text-[10px]">
                v0.1 · canonical
              </Badge>
            </div>
          </ComponentBlock>

          <ComponentBlock title="Card (shadcn)">
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>Default shadcn card</CardTitle>
                <CardDescription>
                  For product UI when you want stock shadcn behaviour. For marketing surfaces use the
                  <code className="mx-1">.paper-card</code> utility instead.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Theme tokens cascade through this primitive — no per-component overrides needed.
                </p>
              </CardContent>
            </Card>
          </ComponentBlock>

          <ComponentBlock title="Input + Label">
            <form className="grid max-w-md gap-3">
              <div className="grid gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="api-key">API key</Label>
                <Input id="api-key" placeholder="sk-…" />
              </div>
            </form>
          </ComponentBlock>

          <ComponentBlock title="Switch">
            <div className="flex items-center gap-3">
              <Switch id="cache" defaultChecked />
              <Label htmlFor="cache">Cache responses</Label>
            </div>
          </ComponentBlock>

          <ComponentBlock title="Tabs">
            <Tabs defaultValue="tokens" className="max-w-lg">
              <TabsList>
                <TabsTrigger value="tokens">Tokens</TabsTrigger>
                <TabsTrigger value="components">Components</TabsTrigger>
                <TabsTrigger value="patterns">Patterns</TabsTrigger>
              </TabsList>
              <TabsContent value="tokens" className="paper-card mt-4">
                <p className="text-sm text-muted-foreground">
                  Colour, type, radius, shadow.
                </p>
              </TabsContent>
              <TabsContent value="components" className="paper-card mt-4">
                <p className="text-sm text-muted-foreground">
                  shadcn primitives themed in place.
                </p>
              </TabsContent>
              <TabsContent value="patterns" className="paper-card mt-4">
                <p className="text-sm text-muted-foreground">
                  Composed examples — pricing tier, feature row, key/value ledger.
                </p>
              </TabsContent>
            </Tabs>
          </ComponentBlock>

          <ComponentBlock title="Dialog">
            <Dialog>
              <DialogTrigger render={<Button variant="outline" />}>Open dialog</DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Promote to wiki</DialogTitle>
                  <DialogDescription>
                    Move this entry to <code>thoughts/wiki/</code> with a frontmattered tag. Future
                    sessions will be able to grep for it by primary tag.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="design-style-honcho" />
                </div>
                <DialogFooter>
                  <Button variant="ghost">Cancel</Button>
                  <Button>Promote</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </ComponentBlock>

          <ComponentBlock title="Tooltip">
            <div className="flex items-center gap-3">
              <Tooltip>
                <TooltipTrigger render={<Button variant="outline" size="icon" aria-label="copy" />}>
                  <Copy className="size-4" />
                </TooltipTrigger>
                <TooltipContent>Copy install command</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger render={<Button variant="ghost" size="icon" aria-label="check" />}>
                  <Check className="size-4" />
                </TooltipTrigger>
                <TooltipContent>Marked complete</TooltipContent>
              </Tooltip>
            </div>
          </ComponentBlock>
        </Section>

        {/* PATTERNS */}
        <Section
          id="patterns"
          kicker="04"
          title="Patterns"
          lede="Three composed examples that live downstream."
        >
          {/* Pricing tier */}
          <div className="grid gap-5 md:grid-cols-3">
            {[
              { tier: "Hobby", price: "$0", best: false, note: "1 project · 10k tokens / mo" },
              { tier: "Pro", price: "$20", best: true, note: "5 projects · 1M tokens / mo" },
              { tier: "Team", price: "$120", best: false, note: "Unlimited · seat-based" },
            ].map((t) => (
              <div
                key={t.tier}
                className={
                  t.best
                    ? "border border-accent/60 bg-card p-5 rounded-md shadow-[var(--shadow-paper)]"
                    : "border border-border bg-card/40 p-5 rounded-md hover:border-foreground/25 transition-colors"
                }
              >
                <div className="flex items-baseline justify-between">
                  <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                    [ tier ]
                  </span>
                  {t.best && (
                    <Badge className="uppercase tracking-widest text-[10px]">
                      <Sparkles className="size-3" /> recommended
                    </Badge>
                  )}
                </div>
                <h4 className="mt-3 pixel-display text-2xl uppercase">{t.tier}</h4>
                <p className="mt-1 pixel-display text-3xl">
                  {t.price}
                  <span className="text-sm text-muted-foreground"> /mo</span>
                </p>
                <p className="mt-3 text-sm text-muted-foreground">{t.note}</p>
                <Button className="mt-5 w-full" variant={t.best ? "default" : "outline"}>
                  Choose {t.tier}
                </Button>
              </div>
            ))}
          </div>

          <Separator className="my-12" />

          {/* Key/value ledger */}
          <div className="paper-card">
            <h4 className="text-sm uppercase tracking-widest text-muted-foreground">
              Key / value ledger
            </h4>
            <p className="mt-1 text-xs text-muted-foreground">
              Dim label · bright value. The honcho way to display structured data without a second
              colour.
            </p>
            <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
              {[
                ["Stack", "Next.js 16 · Tailwind v4 · shadcn"],
                ["Theme", "system · light · dark"],
                ["Tokens", "OKLCH · CSS variables"],
                ["Type", "Departure Mono"],
                ["Radius", "2 · 4 · 6 · 8 · 10 · 14 · 20"],
                ["Shadows", "paper · card · lift"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex items-baseline justify-between border-b border-border py-1.5 last:border-0"
                >
                  <dt className="text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Separator className="my-12" />

          {/* Terminal block — honcho's signature CLI prompt strip */}
          <div className="paper-card">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              [ terminal block ]
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              Use a single mono line with a translucent prompt symbol for CLI / install instructions.
              The whole site is already mono — the prompt just frames it.
            </p>
            <div className="mt-4 flex items-center gap-3 border border-border bg-background/60 px-4 py-3">
              <span className="text-muted-foreground" aria-hidden>
                ▸
              </span>
              <code className="flex-1 text-sm">npx create-next-app@latest my-app --ts</code>
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                copy
              </span>
            </div>
          </div>
        </Section>

        {/* VOICE */}
        <Section
          id="voice"
          kicker="05"
          title="Voice"
          lede="Copy that matches the visual register."
        >
          <div className="paper-card grid gap-3 text-sm">
            <p>
              <span className="font-semibold">Terse, declarative.</span> Lead with the answer.
              Rarely use exclamation marks in chrome copy.
            </p>
            <p>
              <span className="font-semibold">Lowercase navigation labels</span> (style guide,
              source, showcase) — feels more terminal-native than Title Case.
            </p>
            <p>
              <span className="font-semibold">Uppercase for emphasis</span> (display headings, kicker
              labels) — caps are the emphasis tool when you only have one font.
            </p>
            <p>
              <span className="font-semibold">Dashes and middots for separators</span> (
              <code>v0.1 · canonical</code>, <code>memory — that — reasons</code>).
            </p>
            <p>
              <span className="font-semibold">Numbers carry weight.</span> Section kickers (
              <code>01</code>, <code>02</code>) aren&apos;t decorative — they make the page feel
              indexed.
            </p>
          </div>
        </Section>

        {/* REFERENCE */}
        <Section
          id="reference"
          kicker="06"
          title="Reference"
          lede="How to fork this for the next project."
        >
          <ol className="paper-card space-y-3 text-sm list-decimal list-inside">
            <li>
              Copy the repo: <code>cp -R ~/Projects/honcho-style ~/Projects/&lt;new-app&gt;</code>.
            </li>
            <li>
              Update <code>app/layout.tsx</code> metadata + <code>SiteHeader</code> brand string.
            </li>
            <li>
              Recolour <code>:root</code> + <code>.dark</code> in <code>globals.css</code>. Keep the
              token names — only swap values.
            </li>
            <li>
              Add product components alongside <code>src/components/ui/*</code>. Use the{" "}
              <code>.paper-card</code> utility to inherit the rectangle + shadow + border treatment.
            </li>
            <li>
              Update this <code>/style-guide</code> page to render anything you add — it&apos;s your
              receipt that the system holds together.
            </li>
          </ol>

          <p className="mt-6 text-xs text-muted-foreground">
            Future Claude sessions: this repo is the canonical home of the honcho-style aesthetic.
            See <code>DESIGN-SYSTEM.md</code> for the full token + utility reference. The wiki entry
            <code className="mx-1">thoughts/wiki/design-style-honcho.md</code> is a brief stub that
            points back here.
          </p>
        </Section>
      </main>

      <SiteFooter />
    </>
  );
}

function Section({
  id,
  kicker,
  title,
  lede,
  children,
}: {
  id: string;
  kicker: string;
  title: string;
  lede: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="border-t border-border scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">{kicker}</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{lede}</p>
          </div>
        </div>
        {children}
      </div>
    </section>
  );
}

function PaletteSwatch({ name, token, note }: { name: string; token: string; note: string }) {
  return (
    <div className="flex items-stretch gap-3 border border-border bg-background overflow-hidden">
      <div className="w-16 shrink-0" style={{ background: `var(${token})` }} aria-hidden />
      <div className="flex flex-col justify-center py-2 pr-3 text-xs">
        <span className="font-semibold">{name}</span>
        <code className="text-muted-foreground">{token}</code>
        <span className="text-muted-foreground">{note}</span>
      </div>
    </div>
  );
}

function Utility({
  name,
  note,
  children,
}: {
  name: string;
  note: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <div>{children}</div>
      <div className="flex items-baseline justify-between text-xs">
        <code className="font-semibold">{name}</code>
      </div>
      <p className="text-xs text-muted-foreground">{note}</p>
    </div>
  );
}

function ComponentBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-12 last:mb-0">
      <h3 className="mb-4 text-sm uppercase tracking-widest text-muted-foreground">{title}</h3>
      <div className="paper-card">{children}</div>
    </div>
  );
}
