import DemoCard from "@/components/DemoCard";

import { current, planned } from "@/data/demos";

export default function Home() {
  return (
    <main>
      <h1>Welcome to the Enjanga Stack Playground</h1>
      
      <p className="intro">A sandbox to experiment with different stacks and showcase how the same feature can be built in different ways.</p>
      <h2> Current Demos</h2>
      <ul>
        {current.map((demo) => (
          <li key={demo.route}>
            <DemoCard demo={demo} />
          </li>
        ))}
      </ul>


      <h2>Planned demos</h2>
      <ul>
        {planned.map((demo) => (
          <li key={demo.stack}>
            <DemoCard demo={demo} />
          </li>
        ))}
      </ul>
    </main>
  );
}
