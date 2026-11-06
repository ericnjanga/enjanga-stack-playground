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
      className="py-6 text-slate-200 focus-visible:outline-2 focus-visible:outline-sky-400"
    >
      {selected === index && content}
    </div>
  ));
}
