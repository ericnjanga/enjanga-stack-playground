export const products = [
  { id: "notebook", name: "Notebook", priceCents: 1200 },
  { id: "mug", name: "Coffee mug", priceCents: 1800 },
  { id: "bottle", name: "Water bottle", priceCents: 2500 },
  { id: "tote", name: "Canvas tote", priceCents: 1600 },
  { id: "pen", name: "Pen set", priceCents: 850 },
] as const;

export const formatPrice = (cents: number) =>
  new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(cents / 100);
