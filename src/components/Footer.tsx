export default function Footer() {
  return (
    <footer className="mt-auto bg-slate-900 border border-slate-700">
      <div className="mx-auto flex max-w-[1050px] flex-col gap-3 px-6 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Eric Njanga. All rights reserved.</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-5">
          <a target="_blank" rel="noopener noreferrer" href="https://enjanga.com" className="transition-colors hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">enjanga.com</a>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/ericnjanga/enjanga-stack-playground" className="transition-colors hover:text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">GitHub repository</a>
        </nav>
      </div>
    </footer>
  );
}
