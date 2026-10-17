"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { current, planned } from "@/data/demos";

export default function FeatureDemosMenu() {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [isOpen]);

  function openMenu() {
    dialogRef.current?.showModal();
    setIsOpen(true);
  }

  function closeMenu() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        type="button"
        onClick={openMenu}
        aria-expanded={isOpen}
        aria-controls="feature-demos-sidebar"
        aria-haspopup="dialog"
        className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-slate-600 bg-slate-800 px-3 py-2 text-sm font-medium text-slate-100 transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300"
      >
        Feature Demos
        <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-5">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <dialog
        ref={dialogRef}
        id="feature-demos-sidebar"
        aria-labelledby="feature-demos-title"
        onClose={() => setIsOpen(false)}
        className="fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none bg-transparent p-0 text-slate-100 backdrop:bg-black/60"
      >
        <div className="relative flex h-full justify-end">
          <button type="button" tabIndex={-1} aria-label="Dismiss feature demos" onClick={closeMenu} className="absolute inset-0 cursor-default" />
          <aside className="relative h-full w-full max-w-sm overflow-y-auto border-l border-slate-700 bg-slate-900 p-6 shadow-2xl">
            <div className="flex items-center justify-between gap-4">
              <h2 id="feature-demos-title" className="m-0 text-xl font-bold">Feature Demos</h2>
              <button type="button" onClick={closeMenu} aria-label="Close feature demos" className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white focus-visible:outline-2 focus-visible:outline-sky-300">
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="size-5"><path d="m6 6 12 12M18 6 6 18" /></svg>
              </button>
            </div>
            <nav aria-label="Feature demos" className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-400">Current</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {current.map((demo) => (
                  <li key={demo.route} className="rounded-lg border-0 bg-transparent p-0">
                    <Link href={demo.route} onClick={closeMenu} className="block rounded-lg px-3 py-3 transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-sky-300">
                      <span className="block font-medium">{demo.title}</span>
                      <span className="text-sm text-slate-400">{demo.stack}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-slate-400">Planned</h3>
              <ul className="mt-3 flex flex-col gap-2">
                {planned.map((demo) => (
                  <li key={demo.title} className="cursor-not-allowed rounded-lg border-0 bg-transparent px-3 py-3 text-slate-400 opacity-60">
                    <span aria-disabled="true" className="block">
                      <span className="block font-medium">{demo.title}</span>
                      <span className="text-sm">{demo.stack} · Planned</span>
                    </span>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </dialog>
    </>
  );
}
