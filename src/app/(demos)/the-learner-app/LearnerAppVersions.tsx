"use client";

import { useId, useState } from "react";
import DemoVersionContent from "@/components/DemoVersionContent";
import DemoVersionTabs from "@/components/DemoVersionTabs";
import ReactVersion from "./react-version";
import VanillaVersion from "./vanilla-version/VanillaVersion";

const versions = [
  { label: "Vanilla version", content: <VanillaVersion /> },
  { label: "React version", content: <ReactVersion /> },
];

export default function LearnerAppVersions() {
  const id = useId();
  const [selected, setSelected] = useState(0);

  return (
    <section className="demo-wrapper" aria-label="Learner App implementations">
      <div className="demo-nav">
        <DemoVersionTabs
          tabList={versions.map(({ label }) => label)}
          label="Learner App versions"
          idGen={id}
          selected={selected}
          setSelected={setSelected}
        />
      </div>
      <div className="demo-main">
        <div className="wrapper wrapper-main">
          <DemoVersionContent versions={versions} idGen={id} selected={selected} />
        </div>
      </div>
    </section>
  );
}
