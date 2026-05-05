import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="ledger-band sticky top-0 z-40 h-[68px] flex items-center">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-baseline gap-2 group">
          <span className="text-base font-semibold tracking-tight uppercase">honcho-style</span>
          <span className="text-xs text-muted-foreground tracking-widest uppercase">
            v0.1
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/"
            className="px-3 py-1.5 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            Showcase
          </Link>
          <Link
            href="/style-guide"
            className="px-3 py-1.5 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            Style guide
          </Link>
          <a
            href="https://honcho.dev"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
          >
            Source ↗
          </a>
          <div className="ml-1">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
