"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import publications from "@/data/publications.json";

const filters = [
  { value: "all", label: "All" },
  { value: "javascript", label: "JavaScript" },
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
  { value: "others", label: "Others" },
] as const;

export default function PublicationList() {
  const searchParams = useSearchParams();
  const requestedFilter = searchParams.get("filter");
  const query = searchParams.get("q") ?? "";
  const activeFilter = filters.find((item) => item.value === requestedFilter) ?? filters[0];
  const filter = activeFilter.value;
  const normalizedQuery = query.trim().toLowerCase();

  function updateSearch(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set("q", value);
    else params.delete("q");
    const suffix = params.toString();
    window.history.replaceState(null, "", `/publications${suffix ? `?${suffix}` : ""}`);
  }

  // Keep the JSON's newest-first order. Uncategorized entries belong to Others.
  const articles = publications.filter((article) => {
    const categories: string[] = article.categories ?? [];
    if (!article.title.toLowerCase().includes(normalizedQuery)) return false;
    if (filter === "all") return true;
    if (filter === "others") return !categories.some((category) => ["javascript", "react", "nextjs"].includes(category));
    return categories.includes(filter);
  });
  return (
    <section className="wrapper pb-20" aria-label="Newsletter editions">

      <div role="search" className="mb-4">
        {/* <label htmlFor="publication-search" className="mb-2 block text-sm font-medium text-[var(--foreground)]">
          Search by title
        </label> */}
        <input
          id="publication-search"
          type="search"
          value={query}
          onChange={(event) => updateSearch(event.target.value)}
          placeholder={`Search ${filter === "all" ? "all" : activeFilter.label} publications…`}
          aria-controls="publication-results"
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--foreground)] placeholder:text-[var(--muted)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
        />
      </div>

      <nav aria-label="Publication categories" className="mb-8 flex flex-wrap gap-2 border-slate-700 pb-3">
        {filters.map((item) => (
          <Link
            key={item.value}
            href={`/publications?${new URLSearchParams({ filter: item.value, ...(query ? { q: query } : {}) }).toString()}`}
            scroll={false}
            aria-current={filter === item.value ? "page" : undefined}
            className="rounded-lg px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-white aria-[current=page]:bg-sky-400 aria-[current=page]:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
          >
            {item.label}
          </Link>
        ))}
      </nav>
 
      <p aria-live="polite" aria-atomic="true" className="mb-2 text-slate-400">
        <span className="text-white">{articles.length} of {publications.length} editions. </span>
        All articles open in a new tab.
      </p>


      <ul id="publication-results" className="divide-y divide-slate-700 rounded-lg border border-slate-700">
        {articles.map((article) => (
          <li key={article.url}>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between gap-4 px-5 py-4 text-sky-300 transition-colors hover:bg-slate-800 hover:text-sky-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300">
              <span>{article.title}<span className="sr-only"> (opens in a new tab)</span></span>
              <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
      {articles.length === 0 && <p className="mt-4 text-slate-400">{normalizedQuery ? "No publications match your search in this category." : "No articles in this category yet."}</p>}
    </section>
  );
}
