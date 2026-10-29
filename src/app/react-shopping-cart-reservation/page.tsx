import type { Metadata } from "next";
import HeroDemo from "@/components/HeroDemo";
import DemoFooter from "@/components/DemoFooter";
import { getDemoByRoute } from "@/data/demos";

const demo = getDemoByRoute("/react-shopping-cart-reservation");

export const metadata: Metadata = {
  title: "React shopping cart reservation | Enjanga Stack Playground",
};

export default function ShoppingCartReservationPage() {
  if (!demo) return null;

  const requirements = demo.description.split("\n").filter((line) => line.startsWith("- "));

  return (
    <>
      <HeroDemo title={demo.title} description={demo.blurb ?? demo.description} />
      <section className="wrapper pb-16" aria-labelledby="planned-behavior">
        <p className="mb-4 inline-block rounded-full border border-slate-600 px-3 py-1 text-sm text-slate-300">Planned demo</p>
        <h2 id="planned-behavior" className="mb-4">Planned behavior</h2>
        <ul className="list-disc space-y-3 pl-6 text-slate-300">
          {requirements.map((requirement) => <li key={requirement}>{requirement.slice(2)}</li>)}
        </ul>
      </section>
      <DemoFooter />
    </>
  );
}
