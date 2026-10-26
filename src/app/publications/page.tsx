import type { Metadata } from "next";
import Link from "next/link";
import HeroDemo from "@/components/HeroDemo";
import publications from "@/data/publications.json";

export const metadata: Metadata = {
  title: "Publications | Enjanga Stack Playground",
  description: "Modern UI Architecture newsletter editions by Eric Njanga.",
};

const filters = [
  { value: "all", label: "All" },
  { value: "javascript", label: "JavaScript" },
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
  { value: "others", label: "Others" },
] as const;

export default async function PublicationsPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string | string[] }>;
}) {
  const { filter: requestedFilter } = await searchParams;
  const filter = typeof requestedFilter === "string" && filters.some((item) => item.value === requestedFilter)
    ? requestedFilter
    : "all";
  // Keep the JSON's newest-first order. Uncategorized entries belong to Others.
  const articles = publications.filter((article) => {
    const categories: string[] = article.categories ?? [];
    if (filter === "all") return true;
    if (filter === "others") return !categories.some((category) => ["javascript", "react", "nextjs"].includes(category));
    return categories.includes(filter);
  });
  return (
    <>
      <HeroDemo title="Publications" description="Explore Modern UI Architecture: the engineering decisions behind modern web applications." />
      <section className="wrapper pb-20" aria-label="Newsletter editions">
        <nav aria-label="Publication categories" className="mb-6 flex flex-wrap gap-2 border-b border-slate-700 pb-3">
          {filters.map((item) => (
            <Link
              key={item.value}
              href={`/publications?filter=${item.value}`}
              scroll={false}
              aria-current={filter === item.value ? "page" : undefined}
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white aria-[current=page]:bg-sky-400 aria-[current=page]:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <p className="mb-6 text-slate-400">{articles.length} of {publications.length} editions · All articles open in a new tab.</p>
        <ul className="divide-y divide-slate-700 rounded-lg border border-slate-700">
          {articles.map((article) => (
            <li key={article.url}>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 px-5 py-4 text-sky-300 transition-colors hover:bg-slate-800 hover:text-sky-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300">
                <span>{article.title}<span className="sr-only"> (opens in a new tab)</span></span>
                <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>
        {articles.length === 0 && <p className="mt-4 text-slate-400">No articles in this category yet.</p>}
      </section>
    </>
  );
}
