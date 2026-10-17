import type { Metadata } from "next";
import Link from "next/link";
import FeatureDemosMenu from "@/components/FeatureDemosMenu";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "enjanga-stack-playground",
  description: "A sandbox showcasing code demos across React, TypeScript, JavaScript, and Next.js.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="flex min-h-dvh flex-col">
        <header className="border-b border-slate-700 bg-slate-900">
          <nav aria-label="Main navigation" className="mx-auto flex max-w-[1050px] items-center justify-between gap-4 max-sm:flex-wrap px-6 py-4">
            <Link href="/" className="break-all text-lg font-bold text-slate-100 transition-colors hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">
              Enjanga Stack Playground
            </Link>


            <FeatureDemosMenu />
          </nav>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}
