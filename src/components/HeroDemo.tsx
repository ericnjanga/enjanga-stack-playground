import type { ReactNode } from "react";

type HeroDemoProps = {
  title: string;
  description: ReactNode;
  practicalApplication?: ReactNode;
  isBig?: boolean;
};

export default function HeroDemo({ title, description, practicalApplication, isBig }: HeroDemoProps) {
  return (
    <header className="border-b border-slate-800/70 py-10 sm:py-16">
      <div className="wrapper">
        <h1 className="mb-5 max-w-4xl text-balance">{title}</h1>
        <div className={`intro text-pretty leading-relaxed${isBig ? " intro-big" : ""}`}>{description}</div>
        {practicalApplication && (
          <details className="mt-6 max-w-3xl rounded-xl border border-slate-700 bg-slate-900/60 p-4">
            <summary className="cursor-pointer rounded-sm font-medium text-sky-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">Read the practical application</summary>
            <div className="mt-3 text-pretty leading-7 text-slate-300">{practicalApplication}</div>
          </details>
        )}
      </div>
    </header>
  );
}
