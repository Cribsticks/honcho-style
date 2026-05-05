export function SiteFooter() {
  return (
    <footer className="ledger-band mt-24 py-6">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-2 px-4 text-xs text-muted-foreground sm:px-6">
        <span>honcho-style — reusable design system, mirroring honcho.dev</span>
        <span className="flex items-center gap-3">
          <span className="uppercase tracking-widest">v0.1</span>
          <span aria-hidden>·</span>
          <span>Next.js · Tailwind v4 · shadcn/ui</span>
        </span>
      </div>
    </footer>
  );
}
