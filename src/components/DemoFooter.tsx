import ExternalLinkIcon from "@/components/ExternalLinkIcon";
import type { DemoShape } from "@/data/demos";

type DemoFooterProps = {
  articles?: DemoShape["relatedArticle"];
};

export default function DemoFooter({ articles = [] }: DemoFooterProps) {
  return (
    <footer className="border-t border-slate-800 py-10 sm:py-14" aria-label="Related articles">
      <div className="wrapper">
        <h2 className="mt-0 mb-5 text-xl">Related articles</h2>
        {articles.length > 0 ? (
          <ul className="list-disc space-y-3 pl-6 marker:text-sky-300">
            {articles.map((article) => (
              <li key={article.url}>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="break-words text-sky-300 underline underline-offset-4 hover:text-sky-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">
                  {article.title}
                  <ExternalLinkIcon className="ml-2" />
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-slate-400">Related articles coming soon.</p>
        )}
      </div>
    </footer>
  );
}
