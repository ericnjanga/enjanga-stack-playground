import type { ReactNode } from "react";
import Link from "next/link";
import { chapters } from "./chapter-config";

export default function ChapterContent({ slug, title, children }: { slug: string; title: string; children: ReactNode }) {
  const index = chapters.findIndex((chapter) => chapter.slug === slug);
  const previous = chapters[index - 1];
  const next = chapters[index + 1];
  return (
    <article id="chapter-content" className="min-w-0 scroll-mt-8">
      <header className="mb-8 border-b border-slate-700 pb-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">Chapter {String(index + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}</p>
        <h2 className="text-2xl leading-tight tracking-tight text-slate-100 sm:text-3xl">{title}</h2>
        <div aria-hidden="true" className="mt-5 flex gap-1.5">
          {chapters.map((chapter, i) => <span key={chapter.slug} className={`h-1 flex-1 rounded-full ${i <= index ? "bg-sky-400" : "bg-slate-800"}`} />)}
        </div>
      </header>
      <div className="space-y-6 text-base leading-8 text-slate-300 sm:text-lg [&_section]:scroll-mt-8 [&_h3]:text-xl [&_h3]:leading-snug [&_h3]:tracking-tight [&_h3]:text-slate-100 [&_h4]:mt-6 [&_h4]:text-base [&_h4]:text-slate-100 [&_hr]:my-8 [&_hr]:border-slate-700 [&_blockquote]:rounded-r-xl [&_blockquote]:bg-sky-950/30 [&_blockquote]:py-4 [&_blockquote]:pr-4">
        {children}
      </div>
      <nav aria-label="Chapter pagination" className="mt-12 grid gap-3 border-t border-slate-700 pt-8 sm:grid-cols-2">
        {previous && <Link href={previous.href} rel="prev" className="rounded-xl border border-slate-700 p-5 transition-colors hover:bg-slate-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300 motion-reduce:transition-none">
          <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-slate-400">← Previous chapter</span>
          <span className="font-semibold text-slate-100">{previous.label}</span>
        </Link>}
        {next ? <Link href={next.href} rel="next" className="group rounded-xl border border-sky-400/40 bg-sky-950/40 p-5 transition-colors hover:border-sky-300 hover:bg-sky-900/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300 motion-reduce:transition-none sm:col-start-2">
          <span className="mb-2 flex items-center justify-between text-xs font-medium uppercase tracking-wider text-sky-300">Next chapter <span aria-hidden="true" className="transition-transform motion-safe:group-hover:translate-x-1">→</span></span>
          <span className="block font-semibold text-sky-100">{next.label}</span>
          <span className="mt-2 block text-sm leading-6 text-slate-300">{next.summary}</span>
        </Link> : <Link href="/publications" className="rounded-xl border border-sky-400/40 bg-sky-950/40 p-5 text-sky-100 hover:bg-sky-900/50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">
          <span className="mb-2 block text-xs uppercase tracking-wider text-sky-300">Keep exploring →</span>
          <span className="font-semibold">Read the newsletter</span>
        </Link>}
      </nav>
    </article>
  );
}
