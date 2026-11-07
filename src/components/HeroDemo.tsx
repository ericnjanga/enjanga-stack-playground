import type { ReactNode } from "react";

type HeroDemoProps = {
  title: string;
  description: ReactNode;
  isBig?: boolean;
};

export default function HeroDemo({ title, description, isBig }: HeroDemoProps) {
  return (
    <header className="border-b border-slate-800/70 py-10 sm:py-16">
      <div className="wrapper">
        <h1 className="mb-5 max-w-4xl text-balance">{title}</h1>
        <div className={`intro text-pretty leading-relaxed${isBig ? " intro-big" : ""}`}>{description}</div>
      </div>
    </header>
  );
}
