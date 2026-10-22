type DemoFooterProps = {
  articleUrl?: string;
};

export default function DemoFooter({ articleUrl }: DemoFooterProps) {
  return (
    <footer className="pt-15 pb-15" aria-label="Related articles">
      <div className="wrapper wrapper-main">
        <h2 className="mt-0 mb-2">Related articles</h2>
        {articleUrl ? (
          <ul>
            <li>
              <a href={articleUrl} target="_blank" rel="noopener noreferrer" className="text-sky-300 underline underline-offset-4 hover:text-sky-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">
                Read the full article
              </a>
            </li>
          </ul>
        ) : (
          <p className="text-slate-400">Related articles coming soon.</p>
        )}
      </div>
    </footer>
  );
}
