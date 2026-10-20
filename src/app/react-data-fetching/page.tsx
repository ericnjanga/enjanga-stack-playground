import HeroDemo from "@/components/HeroDemo";
import DemoFooter from "@/components/DemoFooter";
import { current } from "@/data/demos";
import Comp from "./Comp";

const demo = current.find(({ route }) => route === "/react-data-fetching");

export default function ReactDataFetchingPage() {
  return (
    <main>
      {demo && <HeroDemo title={demo.title} description={demo.description} />}
      <Comp />
      <DemoFooter />
    </main>
  );
}
