import type { Metadata } from "next";
import SiteNavigation from "@/components/SiteNavigation";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Enjanga JS Playground",
  description: "A sandbox showcasing code demos across React, TypeScript, JavaScript, and Next.js.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="flex min-h-dvh flex-col">
        <a href="#main-content" className="sr-only z-50 rounded-lg bg-sky-300 px-5 py-3 font-semibold text-slate-950 focus:not-sr-only focus:absolute focus:top-3 focus:left-3">Skip to content</a>
        <header className="border-b border-slate-800 bg-slate-900/80">
          <SiteNavigation />
        </header>
        <main id="main-content" tabIndex={-1} className="min-w-0 flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
