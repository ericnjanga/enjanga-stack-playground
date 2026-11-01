import type { DemoScenarioType } from "./types";

type DemoStateControlsProps = {
  value: DemoScenarioType;
  onChange: (value: DemoScenarioType) => void;
};

export const DemoStateControls = ({ value, onChange }: DemoStateControlsProps) => (
  <section>
    <label htmlFor="demo-scenario" className="sr-only">Simulation state</label>
    <select
      className="mt-3 rounded border border-orange-700 bg-orange-950 p-2 text-orange-100 transition-colors hover:border-orange-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-400 [&>option]:bg-orange-950 [&>option]:text-orange-100"
      id="demo-scenario"
      value={value}
      onChange={(event) => {
        const next = event.target.value;
        if (next === "normal" || next === "error" || next === "loading" || next === "empty") onChange(next);
      }}
    >
      <option value="normal">Normal</option>
      <option value="error">Fetching error</option>
      <option value="loading">Pending ...</option>
      <option value="empty">Empty list</option>
    </select>
  </section>
);
