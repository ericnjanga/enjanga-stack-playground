import Link from "next/link";
import type { DemoShape } from "@/data/demos";

export default function DemoCard({ demo, isPlanned = false }: { demo: DemoShape; isPlanned?: boolean }) {
  const planned = isPlanned || !demo.route;
  const content = <>
    <div className="flex items-start justify-between gap-3">
      <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">{demo.stack}</span>
      <span className={planned ? "status shrink-0 text-slate-400" : "status shrink-0 border-emerald-400/30 bg-emerald-400/10 text-emerald-300"}>{planned ? "Planned" : "Live"}</span>
    </div>
    <h3 className="mt-5 text-xl leading-snug text-slate-100 group-hover:text-sky-200">{demo.title}</h3>
    <p className="mt-3 text-sm leading-7">{demo.blurb ?? demo.description}</p>
    {demo.route && <code className="mt-auto block pt-6 text-xs break-all text-slate-400">{demo.route}</code>}
    {!planned && <span className="mt-4 text-sm font-semibold text-sky-300">Explore demo <span aria-hidden="true">→</span></span>}
  </>;
  const cardClass = "flex h-full flex-col rounded-2xl border border-slate-700/80 bg-slate-900/70 p-6";
  return planned ? <div className={cardClass}>{content}</div> : (
    <Link href={demo.route!} className={`${cardClass} group transition-colors hover:border-sky-400/50 hover:bg-slate-800 motion-reduce:transition-none`}>{content}</Link>
  );
}
