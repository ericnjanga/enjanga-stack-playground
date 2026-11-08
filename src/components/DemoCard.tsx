import Link from "next/link";
import type { DemoShape } from "@/data/demos";

export default function DemoCard({ demo, isPlanned = false }: { demo: DemoShape; isPlanned?: boolean }) {
  const planned = isPlanned || !demo.route;
  const content = <>
    <div className="flex items-start">
      <span className={planned ? "status shrink-0 text-slate-400" : "status shrink-0 border-emerald-400/30 bg-emerald-400/10 text-emerald-300"}>{planned ? "Planned" : "Live"}</span>
    </div>
    <h3 className="mt-5 text-xl leading-snug text-slate-100 group-hover:text-sky-200 group-focus-visible:text-sky-200">{demo.title}</h3>
    <p className="mt-3 text-sm leading-7 text-slate-300">{demo.technicalOverview}</p>
    <div className="mt-auto pt-6">
      <div className="border-t border-slate-700/70 pt-4">
        <p className="text-xs font-medium tracking-wide text-slate-400">Available code versions</p>
        {demo.codeVersions.length > 0 ? (
          <ul className="mt-2 flex flex-wrap gap-2" aria-label="Available code versions">
            {demo.codeVersions.map((version) => (
              <li key={version} className="rounded-md border border-slate-600/70 bg-slate-800/70 px-2.5 py-1 text-xs font-medium text-slate-200">{version}</li>
            ))}
          </ul>
        ) : <p className="mt-2 text-xs text-slate-400">Coming soon</p>}
        <p className="mt-3 text-xs font-normal leading-5 text-slate-400">Stack: {demo.stack}</p>
        {!planned && (
          <span className="mt-5 flex items-center justify-between gap-3 text-sm font-semibold text-sky-300">
            Explore demo <span aria-hidden="true">→</span>
          </span>
        )}
      </div>
    </div>
  </>;
  const cardClass = "flex h-full flex-col rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6";
  return planned ? <div className={cardClass}>{content}</div> : (
    <Link href={demo.route!} className={`${cardClass} group transition-colors hover:border-sky-400/50 hover:bg-slate-800 motion-reduce:transition-none`}>{content}</Link>
  );
}
