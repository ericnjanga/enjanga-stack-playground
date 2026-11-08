"use client";

import ExternalLinkIcon from "@/components/ExternalLinkIcon";
import { useRef, type CSSProperties } from "react";
import { useSearchParams } from "next/navigation";
import publications from "@/data/publications.json";

const filters = [
  { value: "all", label: "All categories" },
  { value: "javascript", label: "JavaScript" },
  { value: "typescript", label: "TypeScript" },
  { value: "react", label: "React" },
  { value: "nextjs", label: "Next.js" },
  { value: "others", label: "Others" },
] as const;

const categoryAccents: Record<string, string> = {
  javascript: "#facc15",
  typescript: "#38bdf8",
  react: "#a3e635",
  nextjs: "#a78bfa",
  others: "#fb7185",
};

const tagAccents: Record<string, string> = {
  "editorial-vision": "#c4b5fd",
  "component-rendering": "#bef264",
  "asynchronous-programming": "#fcd34d",
  "ai-assisted-web-engineering": "#fda4af",
};

const tags = [
  { value: "editorial-vision", label: "Editorial vision" },
  { value: "component-rendering", label: "Component Rendering" },
  { value: "asynchronous-programming", label: "Asynchronous Programming" },
  { value: "ai-assisted-web-engineering", label: "AI-assisted web engineering" },
] as const;

export default function PublicationList() {
  const searchInput = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const requestedFilter = searchParams.get("filter");
  const activeTag = tags.find((tag) => tag.value === searchParams.get("tag"));
  const query = searchParams.get("q") ?? "";
  const activeFilter = filters.find((item) => item.value === requestedFilter) ?? filters[0];
  const filter = activeFilter.value;
  const normalizedQuery = query.trim().toLowerCase();

  function updateFilter(key: string, value: string, replace = false) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    const suffix = params.toString();
    const url = `/publications${suffix ? `?${suffix}` : ""}`;
    if (replace) window.history.replaceState(null, "", url);
    else window.history.pushState(null, "", url);
  }

  // Keep the JSON's newest-first order. Uncategorized entries belong to Others.
  const articles = publications.filter((article) => {
    const categories: string[] = article.categories ?? [];
    if (activeTag && !article.tags.includes(activeTag.value)) return false;
    if (!article.title.toLowerCase().includes(normalizedQuery)) return false;
    if (filter === "all") return true;
    if (filter === "others") return !categories.some((category) => filters.some((item) => item.value === category));
    return categories.includes(filter);
  });
  return (
    <section className="wrapper py-10 sm:py-14" aria-label="Newsletter editions">

      <div role="search" className="mb-5 flex w-full rounded-xl border border-slate-600 bg-slate-800/80 focus-within:border-violet-400 focus-within:ring-2 focus-within:ring-violet-400/20">
        <div className="relative min-w-0 flex-1">
          <svg aria-hidden="true" className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[var(--muted)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" /><path d="m16 16 4 4" />
          </svg>
          <input
            ref={searchInput}
            id="publication-search"
            aria-label="Search by title"
            type="search"
            value={query}
            onChange={(event) => updateFilter("q", event.target.value, true)}
            placeholder={`Search ${filter === "all" ? "all" : activeFilter.label} publications…`}
            aria-controls="publication-results"
            className="w-full rounded-l-xl bg-transparent py-3 pr-3 pl-10 text-sm text-[var(--foreground)] placeholder:text-[var(--muted)] focus:outline-none [&::-webkit-search-cancel-button]:appearance-none sm:text-base"
          />
        </div>
        {(query || activeTag || filter !== "all") && (
          <button
            type="button"
            aria-label="Clear filters"
            title="Clear all filters"
            aria-controls="publication-results"
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString());
              ["q", "tag", "filter"].forEach((key) => params.delete(key));
              const suffix = params.toString();
              window.history.pushState(null, "", `/publications${suffix ? `?${suffix}` : ""}`);
              searchInput.current?.focus();
            }}
            className="my-1.5 mr-2 inline-flex min-h-9 shrink-0 items-center justify-center gap-1.5 rounded-full border border-rose-400/30 bg-rose-400/10 px-2.5 text-sm font-medium text-rose-200 transition-colors hover:border-rose-300 hover:bg-rose-400/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
          >
            <svg aria-hidden="true" className="size-4" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 6 8 8M14 6l-8 8" /></svg>
            <span className="hidden sm:inline">Clear filters</span>
          </button>
        )}
        <div className="relative shrink-0 border-l border-slate-600">
          <select
            aria-label="Publication category"
            aria-controls="publication-results"
            value={filter}
            onChange={(event) => updateFilter("filter", event.target.value)}
            className="h-full w-32 appearance-none rounded-r-xl bg-violet-600 py-3 pr-8 pl-3 text-base font-medium text-white transition-colors hover:bg-violet-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 sm:w-44 sm:pl-4"
          >
            {filters.map((item) => <option key={item.value} value={item.value}>{item.label}</option>)}
          </select>
          <svg aria-hidden="true" className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-slate-300" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="m6 8 4 4 4-4" /></svg>
        </div>
      </div>

      <div role="group" aria-label="Publication tags" className="mb-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag.value}
            style={{ "--tag-accent": tagAccents[tag.value] } as CSSProperties}
            type="button"
            aria-pressed={activeTag?.value === tag.value}
            onClick={() => updateFilter("tag", activeTag?.value === tag.value ? "" : tag.value)}
            className="inline-flex items-center gap-2 rounded-full border border-[color:var(--tag-accent)]/30 bg-[color:var(--tag-accent)]/5 px-4 py-2 text-sm font-medium text-[color:var(--tag-accent)] transition-colors hover:border-[color:var(--tag-accent)] hover:bg-[color:var(--tag-accent)]/15 aria-pressed:border-[color:var(--tag-accent)] aria-pressed:bg-[color:var(--tag-accent)] aria-pressed:text-slate-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--tag-accent)]"
          >
            <span aria-hidden="true" className="size-1.5 rounded-full bg-current" />
            {tag.label}
          </button>
        ))}
      </div>

      <p aria-live="polite" aria-atomic="true" className="mb-5 text-sm text-slate-400">
        <span className="text-white">{articles.length} of {publications.length} editions. </span>
        All articles open in a new tab.
      </p>


      <ul id="publication-results" className="divide-y divide-slate-700 overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/50">
        {articles.map((article) => (
          <li key={article.url} style={{ "--article-accent": categoryAccents[article.categories[0]] ?? categoryAccents.others } as CSSProperties}>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="group relative flex items-center justify-between gap-4 px-6 py-5 text-slate-200 transition-colors before:absolute before:inset-y-4 before:left-0 before:w-1 before:rounded-r-full before:bg-[color:var(--article-accent)] hover:bg-slate-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[color:var(--article-accent)]">
              <span>{article.title}<span className="sr-only"> (opens in a new tab)</span></span>
              <span className="shrink-0 text-[color:var(--article-accent)] transition-transform group-hover:translate-x-0.5"><ExternalLinkIcon /></span>
            </a>
          </li>
        ))}
      </ul>
      {articles.length === 0 && <p className="mt-4 rounded-xl border border-dashed border-slate-600 p-6 text-slate-400">{normalizedQuery || activeTag ? "No publications match your selected filters." : "No articles in this category yet."}</p>}
    </section>
  );
}
