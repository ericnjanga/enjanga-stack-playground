"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { chapters } from "./chapter-config";

export default function ChapterNavigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="About me chapters" className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
      {chapters.map((chapter, index) => (
        <Link key={chapter.href} href={chapter.href} aria-current={pathname === chapter.href ? "page" : undefined}
          className="group flex min-h-16 items-center gap-3 rounded-xl border border-slate-700 bg-slate-900/60 p-4 text-sm font-medium text-slate-300 transition-colors hover:border-slate-500 hover:bg-slate-800 aria-[current=page]:border-sky-400/60 aria-[current=page]:bg-sky-950/60 aria-[current=page]:text-sky-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300 motion-reduce:transition-none">
          <span aria-hidden="true" className="font-mono text-xs text-slate-500 group-aria-[current=page]:text-sky-300">0{index + 1}</span>
          <span>{chapter.label}</span>
          {pathname === chapter.href && <span aria-hidden="true" className="ml-auto size-1.5 shrink-0 rounded-full bg-sky-300" />}
        </Link>
      ))}
    </nav>
  );
}
