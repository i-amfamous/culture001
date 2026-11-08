import { useCallback, useEffect, useMemo, useState } from "react";
import { CartContext } from "./cart";
import { getFinalPrice } from "../components/data/products";

export const CART_STORAGE_KEY = "culture-cart";
export const TAX_RATE = 0.05;
export const DELIVERY_FEE = 25;

function toCartItem(product, quantity = 1) {
  return {
    id: product.id,
    name: product.name,
    price: getFinalPrice(product),
    coverImage: product.coverImage,
    quantity: Math.max(1, Math.floor(quantity)),
  };
}

function readStoredCart() {
  if (typeof window === "undefined") return [];

  try {
    const stored = JSON.parse(
      window.localStorage.getItem(CART_STORAGE_KEY) || "[]",
    );

    if (!Array.isArray(stored)) return [];

    return stored
      .filter((item) => item && item.id != null && item.name)
      .map((item) => ({
        id: item.id,
        name: String(item.name),
        price: Number(item.price) || 0,
        coverImage: item.coverImage || "",
        quantity: Math.max(1, Math.floor(Number(item.quantity) || 1)),
      }));
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredCart);

  // Persist on every change so the cart survives reloads.
  useEffect(() => {
    try {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage can be unavailable (private mode / quota). The in-memory cart
      // keeps working for the current session.
    }
  }, [items]);

  // Keep other tabs in sync with this one.
  useEffect(() => {
    const syncFromStorage = (event) => {
      if (event.key === CART_STORAGE_KEY) {
        setItems(readStoredCart());
      }
    };

    window.addEventListener("storage", syncFromStorage);
    return () => window.removeEventListener("storage", syncFromStorage);
  }, []);

  const addItem = useCallback((product, quantity = 1) => {
    const amount = Math.max(1, Math.floor(quantity));

    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + amount }
            : item,
        );
      }

      return [...current, toCartItem(product, amount)];
    });
  }, []);

  const setQuantity = useCallback((id, quantity) => {
    const next = Math.max(1, Math.floor(Number(quantity) || 1));

    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity: next } : item,
      ),
    );
  }, []);

  const increment = useCallback((id) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }, []);

  const decrement = useCallback((id) => {
    setItems((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity - 1) }
          : item,
      ),
    );
  }, []);

  const removeItem = useCallback((id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totals = useMemo(() => {
    const count = items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
    const tax = subtotal * TAX_RATE;
    const delivery = items.length > 0 ? DELIVERY_FEE : 0;

    return {
      count,
      subtotal,
      tax,
      delivery,
      total: subtotal + tax + delivery,
    };
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      totals,
      addItem,
      setQuantity,
      increment,
      decrement,
      removeItem,
      clearCart,
    }),
    [
      items,
      totals,
      addItem,
      setQuantity,
      increment,
      decrement,
      removeItem,
      clearCart,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
