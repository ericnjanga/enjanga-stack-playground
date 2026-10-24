import HeroDemo from "@/components/HeroDemo";
import DemoFooter from "@/components/DemoFooter";
import { current } from "@/data/demos";
import ProductSearchDemo from "./ProductSearchDemo";

const demo = current.find(({ route }) => route === "/react-product-search");

export default function ReactProductSearchPage() {
  return (
    <>
      {demo && <HeroDemo title={demo.title} description={demo.description} />}

      <ProductSearchDemo />

      <DemoFooter article={demo?.relatedArticle} />
    </>
  );
}
