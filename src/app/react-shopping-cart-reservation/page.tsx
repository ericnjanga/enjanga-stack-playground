import type { Metadata } from "next";
import HeroDemo from "@/components/HeroDemo";
import DemoFooter from "@/components/DemoFooter";
import { planned } from "@/data/demos";
import ShoppingCartDemo from "./ShoppingCartDemo";

const demo = planned.find(({ title }) => title === "Shopping cart reservation");
export const metadata: Metadata = { title: "Shopping cart reservation | Enjanga Stack Playground" };

export default function ShoppingCartReservationPage() {
  return (
    <>
      {demo && <HeroDemo title={demo.title} description={demo.description} />}
      <ShoppingCartDemo />
      <DemoFooter />
    </>
  );
}
