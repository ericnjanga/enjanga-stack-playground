import type { Metadata } from "next";
import HeroDemo from "@/components/HeroDemo";
import DemoFooter from "@/components/DemoFooter";
import { getDemoByRoute } from "@/data/demos";

const demo = getDemoByRoute("/react-shopping-cart-reservation");

export const metadata: Metadata = {
  title: "React shopping cart reservation | Enjanga JS Playground",
};

export default function ShoppingCartReservationPage() {
  if (!demo) return null;

  const requirements = [
    "Show 5 products with an Add to cart button.",
    "Adding the same product again increases its quantity.",
    "Let users increase, decrease, and remove cart items.",
    "Display the total item count and total price—calculate these from the cart instead of storing them separately.",
    "Start a 2-minute countdown when the first item is added. At zero, clear the cart and show “Reservation expired.”",
    "A Checkout button clears the cart and shows a success message."
];

  return (
    <>
      <HeroDemo title={demo.title} description={demo.technicalOverview} practicalApplication={demo.practicalApplication} />
      <section className="wrapper pb-16" aria-labelledby="planned-behavior">
        <p className="mb-4 inline-block rounded-full border border-slate-600 px-3 py-1 text-sm text-slate-300">Planned demo</p>
        <h2 id="planned-behavior" className="mb-4">Planned behavior</h2>
        <ul className="list-disc space-y-3 pl-6 text-slate-300">
          {requirements.map((requirement) => <li key={requirement}>{requirement}</li>)}
        </ul>
      </section>
      <DemoFooter articles={demo?.relatedArticle} />
    </>
  );
}
