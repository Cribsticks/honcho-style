import Link from "next/link";
import { ArrowRight, BookOpenText, Component, Palette } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-border">
          <div className="mx-auto flex max-w-6xl flex-col items-center px-4 pt-24 pb-28 text-center sm:px-6 sm:pt-32 sm:pb-36">
            <p className="mb-8 text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              [ v0.1 · reusable design system ]
            </p>

            <h1 className="pixel-display text-5xl uppercase sm:text-6xl md:text-7xl lg:text-8xl">
              TERMINAL <span className="text-muted-foreground">×</span> PRINT
            </h1>

            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              A Next.js + Tailwind v4 + shadcn/ui design system mirroring{" "}
              <a
                href="https://honcho.dev"
                target="_blank"
                rel="noreferrer"
                className="text-foreground underline-offset-4 hover:underline"
              >
                honcho.dev
              </a>
              . Mono-everywhere, paper light, cool-blue dark, sharp rectangles, soft shadows. Fork it,
              theme it, ship it.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <Button nativeButton={false} render={<Link href="/style-guide" />} size="lg">
                View style guide <ArrowRight className="size-4" />
              </Button>
              <Button
                nativeButton={false}
                render={<a href="https://github.com/" target="_blank" rel="noreferrer" />}
                variant="outline"
                size="lg"
              >
                View source ↗
              </Button>
            </div>
          </div>
        </section>

        {/* Three-card showcase */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                What&apos;s inside
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Three layers, one voice.
              </h2>
            </div>
            <Link
              href="/style-guide"
              className="hidden text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground sm:inline-flex"
            >
              Browse all →
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            <ShowcaseCard
              icon={<Palette className="size-4" />}
              kicker="Layer 01"
              title="Tokens"
              body="Paper-warm light + cool-slate dark palette in OKLCH, sharp 2-8px radius scale, three custom shadow stops, mono font stack."
              cta={{ href: "/style-guide#tokens", label: "Inspect tokens" }}
            />
            <ShowcaseCard
              icon={<Component className="size-4" />}
              kicker="Layer 02"
              title="Components"
              body="shadcn primitives themed in place — Button, Card, Input, Badge, Tabs, Dialog, Tooltip, Switch — plus paper-card and ledger-band utilities."
              cta={{ href: "/style-guide#components", label: "See components" }}
            />
            <ShowcaseCard
              icon={<BookOpenText className="size-4" />}
              kicker="Layer 03"
              title="Reference"
              body="Lived-in DESIGN-SYSTEM.md + a /style-guide page. Future-Claude reads them; you fork the repo and reskin in an afternoon."
              cta={{ href: "/style-guide#reference", label: "Read the guide" }}
            />
          </div>
        </section>

        {/* Aesthetic strip — five words, no chrome. The words ARE the design. */}
        <section className="border-t border-border">
          <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              [ aesthetic in five words ]
            </p>
            <div className="mt-8 grid gap-y-2 text-2xl uppercase sm:grid-cols-5 sm:text-xl md:text-2xl">
              <span className="text-foreground">mono.</span>
              <span className="text-muted-foreground">paper.</span>
              <span className="text-foreground">slate.</span>
              <span className="text-muted-foreground">sharp.</span>
              <span className="text-foreground">soft.</span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}

function ShowcaseCard({
  icon,
  kicker,
  title,
  body,
  cta,
}: {
  icon: React.ReactNode;
  kicker: string;
  title: string;
  body: string;
  cta: { href: string; label: string };
}) {
  return (
    <div className="paper-card flex flex-col gap-4">
      <div className="flex items-center justify-between text-muted-foreground">
        <span className="flex size-8 items-center justify-center border border-border bg-background">
          {icon}
        </span>
        <span className="text-[11px] uppercase tracking-[0.3em]">[ {kicker} ]</span>
      </div>
      <div>
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{body}</p>
      </div>
      <Link
        href={cta.href}
        className="mt-auto inline-flex items-center gap-1 text-xs uppercase tracking-widest hover:underline underline-offset-4"
      >
        {cta.label} <ArrowRight className="size-3" />
      </Link>
    </div>
  );
}
