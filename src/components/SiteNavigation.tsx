"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import FeatureDemosMenu from "./FeatureDemosMenu";

export default function SiteNavigation() {
  const pathname = usePathname();
  return (
    <nav aria-label="Main navigation" className="wrapper flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4">
      <Link href="/" className="rounded-lg text-base font-bold tracking-tight text-slate-100 hover:text-sky-300 sm:text-lg">
        Enjanga Stack Playground
      </Link>
      <div className="flex flex-wrap items-center gap-1 text-sm sm:gap-2">
        {[{ href: "/about", label: "About" }, { href: "/publications", label: "Publications" }].map(({ href, label }) => (
          <Link key={href} href={href} aria-current={pathname === href || pathname.startsWith(`${href}/`) ? "page" : undefined}
            className="inline-flex min-h-11 items-center rounded-lg px-3 font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white aria-[current=page]:bg-sky-400/10 aria-[current=page]:text-sky-300 motion-reduce:transition-none">
            {label}
          </Link>
        ))}
        <FeatureDemosMenu />
      </div>
    </nav>
  );
}
