"use client";

import { useRef } from "react";

export default function DemoVersionTabs({ tabList, idGen, selected, setSelected, label }: {
  tabList: readonly string[];
  idGen: string;
  selected: number;
  setSelected: (index: number) => void;
  label: string;
}) {
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);

  return (
    <div role="tablist" aria-label={label} className="mb-5 flex w-fit max-w-full flex-wrap gap-1 rounded-xl border border-slate-700 bg-slate-900 p-1">
      {tabList.map((label, index) => (
        <button
          key={label}
          ref={(button) => { tabs.current[index] = button; }}
          type="button"
          role="tab"
          id={`${idGen}-tab-${index}`}
          aria-controls={`${idGen}-panel-${index}`}
          aria-selected={selected === index}
          tabIndex={selected === index ? 0 : -1}
          onClick={() => setSelected(index)}
          onKeyDown={(event) => {
            let next: number;
            switch (event.key) {
              case "ArrowRight": next = (index + 1) % tabList.length; break;
              case "ArrowLeft": next = (index + tabList.length - 1) % tabList.length; break;
              case "Home": next = 0; break;
              case "End": next = tabList.length - 1; break;
              default: return;
            }
            event.preventDefault();
            setSelected(next);
            tabs.current[next]?.focus();
          }}
          className="min-h-11 rounded-lg px-4 py-2 text-sm font-medium text-slate-400 transition-colors hover:bg-slate-800 hover:text-white aria-selected:bg-slate-700 aria-selected:text-white motion-reduce:transition-none"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
