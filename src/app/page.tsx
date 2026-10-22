import HeroDemo from "@/components/HeroDemo";
import DemoCard from "@/components/DemoCard";

import { current, planned } from "@/data/demos";

export default function Home() {
  return (
    <>
      <HeroDemo
        title="Welcome to the Enjanga Stack Playground."
        description="A sandbox to experiment with different stacks and showcase how the same feature can be built in different ways."
        isBig={true}
      />
      <main className="wrapper">
        <h2 className="mb-2"> Current Demos</h2>
        <ul className="demo-card-wrapper mb-20">
          {current.map((demo) => (
            <li key={demo.route}>
              <DemoCard demo={demo} />
            </li>
          ))}
        </ul>

        <h2 className="mb-2">Planned demos</h2>
        <ul className="demo-card-wrapper">
          {planned.map((demo) => (
            <li key={demo.stack}>
              <DemoCard demo={demo} />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
