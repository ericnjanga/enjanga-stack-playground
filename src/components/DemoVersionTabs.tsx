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
    <div role="tablist" aria-label={label} className="flex flex-wrap gap-2 border-b border-slate-600">
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
          className="border-b-2 border-transparent px-4 py-3 font-medium text-slate-300 hover:border-slate-400 hover:text-white focus-visible:outline-2 focus-visible:outline-sky-400 aria-selected:border-sky-400 aria-selected:text-sky-300"
        >
          {label}
        </button>
      ))}
    </div>
  );
}
