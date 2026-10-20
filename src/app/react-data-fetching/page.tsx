import HeroDemo from "@/components/HeroDemo";
import DemoFooter from "@/components/DemoFooter";
import { current } from "@/data/demos";

const demo = current.find(({ route }) => route === "/react-data-fetching");

export default function ReactDataFetchingPage() {
  return (
    <main>
      {demo && <HeroDemo title={demo.title} description={demo.description} />}
      <p className="text-slate-400">The data fetching example will be added here.</p>
      <DemoFooter />
    </main>
  );
}
