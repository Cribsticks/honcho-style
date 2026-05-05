import type { Metadata } from "next";
import localFont from "next/font/local";

import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

import "./globals.css";

const departureMono = localFont({
  src: "../fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "honcho-style — terminal × print design system",
  description:
    "A reusable Next.js + Tailwind v4 + shadcn/ui design system mirroring honcho.dev. Bitmap pixel mono everywhere, paper light, near-black dark, hairline borders.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${departureMono.variable} h-full`}
    >
      <body className="checkered-bg min-h-full flex flex-col font-mono antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <TooltipProvider delay={120}>{children}</TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
