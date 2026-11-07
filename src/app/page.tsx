import HeroDemo from "@/components/HeroDemo";
import DemoCard from "@/components/DemoCard";

import { getCurrentDemos, getPlannedDemos } from "@/data/demos";

export default function Home() {
  return (
    <>
      <HeroDemo
        title="Welcome to the Enjanga Stack Playground."
        description="A sandbox to experiment with different JavaScript concepts and their practical application to real enterprise scenarios. Code built without AI."
        isBig={true}
      />
      <div className="wrapper py-10 sm:py-16">
        <h2 className="mb-3">Current demos</h2>
        <p className="mb-6 text-slate-400">Explore working examples and the code behind them.</p>
        <ul className="demo-card-wrapper mb-20">
          {getCurrentDemos().map((demo) => (
            <li key={demo.id}>
              <DemoCard demo={demo} />
            </li>
          ))}
        </ul>

        <h2 className="mb-3">Planned demos</h2>
        <p className="mb-6 text-slate-400">Coming next to the playground.</p>
        <ul className="demo-card-wrapper">
          {getPlannedDemos().map((demo) => (
            <li key={demo.id}>
              <DemoCard demo={demo} isPlanned />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
