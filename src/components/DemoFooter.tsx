import type { DemoShape } from "@/data/demos";

type DemoFooterProps = {
  articles?: DemoShape["relatedArticle"];
};

export default function DemoFooter({ articles = [] }: DemoFooterProps) {
  return (
    <footer className="pt-15 pb-15" aria-label="Related articles">
      <div className="wrapper wrapper-main">
        <h2 className="mt-0 mb-2">Related articles</h2>
        {articles.length > 0 ? (
          <ul className="space-y-3">
            {articles.map((article) => (
              <li key={article.url}>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-sky-300 underline underline-offset-4 hover:text-sky-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">
                  {article.title}
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
