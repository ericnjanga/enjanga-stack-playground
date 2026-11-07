import type { ReactNode } from "react";

export default function DemoVersionContent({ versions, idGen, selected }: {
  versions: readonly { label: string; content: ReactNode }[];
  idGen: string;
  selected: number;
}) {
  return versions.map(({ label, content }, index) => (
    <div
      key={label}
      role="tabpanel"
      id={`${idGen}-panel-${index}`}
      aria-labelledby={`${idGen}-tab-${index}`}
      hidden={selected !== index}
      tabIndex={0}
      className="rounded-2xl border border-slate-700 bg-slate-900/50 p-5 text-slate-200 focus-visible:outline-2 focus-visible:outline-sky-400 sm:p-8"
    >
      {selected === index && content}
    </div>
  ));
}
