"use client";

import { useState } from "react";
import { DemoStateControls } from "./DemoStateControls";
import ProductSearch from "./ProductSearch";
import type { DemoScenarioType } from "./types";

export default function ProductSearchDemo() {
  const [scenario, setScenario] = useState<DemoScenarioType>("normal");

  return (
    <div>
      <div className="wrapper my-6">
        <div className="rounded-2xl border border-orange-400/25 bg-orange-400/5 p-5 sm:flex sm:items-center sm:justify-between sm:gap-6">
          <div><h2 className="text-base text-orange-200">Explore the app states</h2><p className="mt-1 text-sm text-slate-400">Preview loading, empty, and error states.</p></div>
          <DemoStateControls value={scenario} onChange={setScenario} />
        </div>
      </div>
      <section className="demo-main">
        <div className="wrapper wrapper-main">
          <ProductSearch scenario={scenario} />
        </div>
      </section>
    </div>
  );
}
