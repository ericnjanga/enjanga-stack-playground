import HeroDemo from "@/components/HeroDemo";
import DemoCard from "@/components/DemoCard";

import { getCurrentDemos, getPlannedDemos } from "@/data/demos";

export default function Home() {
  return (
    <>
      <HeroDemo
        title="Welcome to the Enjanga Stack Playground."
        description="A sandbox to experiment with different stacks and showcase how the same feature can be built in different ways. Code built without AI."
        isBig={true}
      />
      <main className="wrapper">
        <h2 className="mb-2"> Current Demos</h2>
        <ul className="demo-card-wrapper mb-20">
          {getCurrentDemos().map((demo) => (
            <li key={demo.id}>
              <DemoCard demo={demo} />
            </li>
          ))}
        </ul>

        <h2 className="mb-2">Planned demos</h2>
        <ul className="demo-card-wrapper">
          {getPlannedDemos().map((demo) => (
            <li key={demo.id}>
              <DemoCard demo={demo} isPlanned />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
