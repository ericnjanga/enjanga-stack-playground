"use client";

import Alert from "@/components/Alert";
import { products, formatPrice } from "./products";
import { useShoppingCart } from "./useShoppingCart";

const buttonClass = "rounded-lg border border-slate-600 px-3 py-2 text-sm font-medium transition-colors hover:bg-slate-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 disabled:cursor-not-allowed disabled:opacity-50";

export default function ShoppingCartDemo() {
  const { items, itemCount, totalCents, remainingSeconds, message, act } = useShoppingCart();
  const timer = `${Math.floor(remainingSeconds / 60)}:${String(remainingSeconds % 60).padStart(2, "0")}`;

  return (
    <div className="wrapper pb-20">
      <p className="mb-6 text-sm text-slate-400">Demo only: prices are in CAD. The cart and reservation reset when you reload.</p>
      {message && <Alert variant={message === "Reservation expired." ? "warning" : "success"}>{message}</Alert>}
      <div className="grid gap-8 lg:grid-cols-2">
        <section aria-labelledby="products-title">
          <h2 id="products-title" className="mb-4">Products</h2>
          <ul className="space-y-3">
            {products.map((product) => (
              <li key={product.id} className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-slate-700 bg-slate-900 p-4">
                <div><h3>{product.name}</h3><p>{formatPrice(product.priceCents)}</p></div>
                <button type="button" aria-label={`Add ${product.name} to cart`} onClick={() => act("add", product.id)} className={buttonClass}>Add to cart</button>
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="cart-title" className="rounded-xl border border-slate-700 bg-slate-900 p-5">
          <h2 id="cart-title" className="mb-4">Shopping cart</h2>
          <p className="mb-4 text-amber-200">{items.length ? <>Reservation remaining: <span role="timer" aria-label="Reservation time remaining">{timer}</span></> : "Your two-minute reservation starts when you add an item."}</p>
          {!items.length ? <p className="text-slate-400">Your cart is empty.</p> : (
            <ul className="divide-y divide-slate-700">
              {items.map((item) => (
                <li key={item.id} className="py-4">
                  <h3>{item.name}</h3>
                  <p className="mb-3">{formatPrice(item.priceCents)} each · {formatPrice(item.priceCents * item.quantity)}</p>
                  <div className="flex flex-wrap items-center gap-3">
                    <button type="button" aria-label={`Decrease ${item.name} quantity`} onClick={() => act("decrease", item.id)} className={buttonClass}>−</button>
                    <span aria-label={`${item.name} quantity`}>{item.quantity}</span>
                    <button type="button" aria-label={`Increase ${item.name} quantity`} onClick={() => act("increase", item.id)} className={buttonClass}>+</button>
                    <button type="button" onClick={() => act("remove", item.id)} aria-label={`Remove ${item.name}`} className={`${buttonClass} text-red-300`}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="mt-6 border-t border-slate-700 pt-4" aria-live="polite" aria-atomic="true">
            <p>Total items: <span data-testid="cart-count">{itemCount}</span></p>
            <p className="mt-1 text-lg font-bold">Total price: <span data-testid="cart-total">{formatPrice(totalCents)}</span></p>
          </div>
          <button type="button" disabled={!items.length} onClick={() => act("checkout")} className={`${buttonClass} mt-5 w-full bg-sky-800 text-white hover:bg-sky-700`}>Checkout</button>
        </section>
      </div>
    </div>
  );
}
