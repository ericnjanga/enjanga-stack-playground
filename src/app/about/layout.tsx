import type { Metadata } from "next";
import Image from "next/image";
import ChapterNavigation from "./ChapterNavigation";

export const metadata: Metadata = {
  title: "About | Enjanga JS Playground",
  description: "Learn more about Eric Njanga and his journey in web engineering.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate">
      <div className="wrapper py-10 sm:py-16">
        <a href="#chapter-content" className="sr-only rounded-lg bg-sky-300 px-4 py-3 text-slate-950 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50">Skip to chapter</a>
        <header>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">Behind the playground</p>
          <h1 className="max-w-3xl text-3xl leading-tight tracking-tight sm:text-5xl">Connecting the dots,<br className="hidden sm:block" /> and following curiosity.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-400">Four chapters on engineering, curiosity, and finding a way forward.</p>
          <ChapterNavigation />
        </header>
        <div className="mt-10 grid items-start gap-8 lg:mt-14 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-14">
          <aside aria-label="About the author" className="rounded-2xl border border-slate-700 bg-slate-900/50 p-4 lg:sticky lg:top-6">
            <figure className="flex items-center gap-4 lg:block">
              <Image src="/eric-njanga-portrait.jpg" alt="Eric Njanga seated at an outdoor café, wearing a light pink blazer." width={1600} height={1537} sizes="(min-width: 1024px) 206px, 80px" preload className="size-20 shrink-0 rounded-xl object-cover lg:aspect-[4/5] lg:h-auto lg:w-full" />
              <figcaption className="min-w-0 lg:mt-5">
                <p className="font-semibold text-slate-100">Eric Njanga</p>
                <p className="mt-1 text-sm leading-6 text-slate-400">Software engineer,<br className="hidden lg:block" /> architect, and author.</p>
              </figcaption>
            </figure>
          </aside>
          <div className="min-w-0 max-w-[65ch]">{children}</div>
        </div>
      </div>
    </div>
  );
}
