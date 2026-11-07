import ExternalLinkIcon from "@/components/ExternalLinkIcon";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-900/60">
      <div className="mx-auto flex max-w-[1050px] flex-col gap-5 px-6 py-8 text-sm text-slate-400 lg:flex-row lg:items-center lg:justify-between">
        <p>© {new Date().getFullYear()} Eric Njanga. All rights reserved.</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-3">
          <a target="_blank" rel="noopener noreferrer" href="https://enjanga.com" className="transition-colors hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">Visit my website<span className="sr-only"> (opens in a new tab)</span> <ExternalLinkIcon className="ml-2" /></a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/ericnjanga/enjanga-stack-playground" className="transition-colors hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">GitHub repository<span className="sr-only"> (opens in a new tab)</span> <ExternalLinkIcon className="ml-2" /></a>
          <Link href="/publications" className="transition-colors hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">Publications</Link>
        </nav>
      </div>
    </footer>
  );
}
