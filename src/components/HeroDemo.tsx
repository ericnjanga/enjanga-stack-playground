import type { ReactNode } from "react";

type HeroDemoProps = {
  title: string;
  description: ReactNode;
  isBig?: boolean;
};

export default function HeroDemo({ title, description, isBig }: HeroDemoProps) {
  return (
    <header className="pt-10 pb-10">
      <div className="wrapper mt-10">
        <h1 className="mb-4">{title}</h1>
        <div className={`intro${isBig ? " intro-big" : ""}`}>{description}</div>
      </div>
    </header>
  );
}
