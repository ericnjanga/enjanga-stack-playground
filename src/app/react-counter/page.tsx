import type { Metadata } from "next";
import HeroDemo from "@/components/HeroDemo";
import DemoFooter from "@/components/DemoFooter";
import { planned } from "@/data/demos";

const demo = planned.find((demo) => "route" in demo && demo.route === "/react-counter");

export const metadata: Metadata = {
  title: "react counter | Enjanga Stack Playground",
  description: "A flexible, customizable, and scalable react counter",
};

export default function ReactCounterPage() {
  if (!demo) return null;

  return (
    <>
      <HeroDemo title={demo.title} description={demo.blurb ?? demo.description} />
      <section className="wrapper pb-16" aria-labelledby="planned-counter">
        <p className="mb-4 inline-block rounded-full border border-slate-600 px-3 py-1 text-sm text-slate-300">Planned demo</p>
        <h2 id="planned-counter" className="mb-4">About this demo</h2>
        <p className="text-slate-300">{demo.description}</p>
      </section>
      <DemoFooter />
    </>
  );
}
