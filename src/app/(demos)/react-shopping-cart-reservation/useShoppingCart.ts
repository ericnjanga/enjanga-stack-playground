"use client";

import { useEffect, useReducer } from "react";
import { products } from "./products";

const RESERVATION_MS = 120_000;
type CartState = {
  quantities: Record<string, number>;
  expiresAt: number | null;
  now: number;
  message: "Reservation expired." | "Checkout successful!" | null;
};
type CartAction = {
  type: "add" | "increase" | "decrease" | "remove" | "checkout" | "tick";
  productId?: string;
  now: number;
};
const initialState: CartState = { quantities: {}, expiresAt: null, now: 0, message: null };

function reducer(state: CartState, action: CartAction): CartState {
  const expired = state.expiresAt !== null && action.now >= state.expiresAt;
  const current: CartState = expired
    ? { ...initialState, now: action.now, message: "Reservation expired." }
    : { ...state, now: action.now };

  if (action.type === "tick") return current;
  if (action.type === "checkout") {
    if (!Object.keys(current.quantities).length) return current;
    return { ...initialState, now: action.now, message: "Checkout successful!" };
  }
  const id = action.productId;
  if (!id || !products.some((product) => product.id === id)) return current;
  const quantities = { ...current.quantities };
  if (action.type === "add") quantities[id] = (quantities[id] ?? 0) + 1;
  else if (!quantities[id]) return current;
  else if (action.type === "increase") quantities[id] += 1;
  else if (action.type === "decrease" && quantities[id] > 1) quantities[id] -= 1;
  else delete quantities[id];

  return {
    quantities,
    now: action.now,
    expiresAt: Object.keys(quantities).length ? current.expiresAt ?? action.now + RESERVATION_MS : null,
    message: current.message === "Reservation expired." && action.type !== "add" ? current.message : null,
  };
}

export function useShoppingCart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.expiresAt === null) return;
    const update = () => dispatch({ type: "tick", now: Date.now() });
    const interval = window.setInterval(update, 250);
    document.addEventListener("visibilitychange", update);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", update);
    };
  }, [state.expiresAt]);

  const items = products.filter((product) => state.quantities[product.id]).map((product) => ({
    ...product,
    quantity: state.quantities[product.id],
  }));
  return {
    items,
    itemCount: items.reduce((total, item) => total + item.quantity, 0),
    totalCents: items.reduce((total, item) => total + item.quantity * item.priceCents, 0),
    remainingSeconds: state.expiresAt === null ? 0 : Math.max(0, Math.ceil((state.expiresAt - state.now) / 1000)),
    message: state.message,
    act: (type: CartAction["type"], productId?: string) => dispatch({ type, productId, now: Date.now() }),
  };
}
