import { createContext, useContext } from "react";

/**
 * Cart context shared across the storefront.
 *
 * Kept in its own module (without JSX) so the provider component stays the
 * only export of CartProvider.jsx — which keeps Fast Refresh happy.
 */
export const CartContext = createContext(null);

export function useCart() {
  const cart = useContext(CartContext);

  if (!cart) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return cart;
}
