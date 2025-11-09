"use client";

import { createContext, useCallback, useContext, useMemo, useState } from "react";
import type { Product } from "@/app/data/products";

type CartItem = Product & { quantity: number };

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product) => void;
  removeItem: (name: string) => void;
  clear: () => void;
  total: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = useCallback((product: Product) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.name === product.name);
      if (existing) {
        return prev.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  }, []);

  const removeItem = useCallback((name: string) => {
    setItems((prev) => prev.filter((item) => item.name !== name));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const total = useMemo(
    () =>
      items.reduce((sum, item) => {
        const price = Number(item.price.replace(/[^0-9.]/g, ""));
        return sum + price * item.quantity;
      }, 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, addItem, removeItem, clear, total }),
    [items, addItem, removeItem, clear, total]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
