import type { Metadata } from "next";
import HeroDemo from "@/components/HeroDemo";
import publications from "@/data/publications.json";

export const metadata: Metadata = {
  title: "Publications | Enjanga Stack Playground",
  description: "Modern UI Architecture newsletter editions by Eric Njanga.",
};

export default function PublicationsPage() {
  return (
    <>
      <HeroDemo title="Publications" description="Explore Modern UI Architecture: the engineering decisions behind modern web applications." />
      <section className="wrapper pb-20" aria-label="Newsletter editions">
        <p className="mb-6 text-slate-400">{publications.length} editions · All articles open in a new tab.</p>
        <ul className="divide-y divide-slate-700 rounded-lg border border-slate-700">
          {publications.map((article) => (
            <li key={article.url}>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 px-5 py-4 text-sky-300 transition-colors hover:bg-slate-800 hover:text-sky-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300">
                <span>{article.title}<span className="sr-only"> (opens in a new tab)</span></span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
