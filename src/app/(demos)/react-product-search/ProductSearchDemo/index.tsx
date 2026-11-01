"use client";

import { useState } from "react";
import { DemoStateControls } from "./DemoStateControls";
import ProductSearch from "./ProductSearch";
import type { DemoScenarioType } from "./types";

export default function ProductSearchDemo() {
  const [scenario, setScenario] = useState<DemoScenarioType>("normal");

  return (
    <div>
      <div className="mx-auto w-full max-w-[1050px] rounded-lg px-6 py-6 text-orange-100">
        <h3 className="text-orange-200">Care to simulate the different states of this app?</h3>
        <DemoStateControls value={scenario} onChange={setScenario} />
      </div>
      <section className="demo-main">
        <div className="wrapper wrapper-main">
          <ProductSearch scenario={scenario} />
        </div>
      </section>
    </div>
  );
}
