
"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

import type { Product } from "@/lib/data";

type CartLine = {
  product: Product;
  quantity: number;
};

type CartContextType = {
  items: CartLine[];
  count: number;
  subtotal: number;
  add: (p: Product) => void;
  change: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const CART_KEY = "gb-cart";

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [items, setItems] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load cart after the component mounts in the browser
  useEffect(() => {
    let cancelled = false;

    const saved = localStorage.getItem(CART_KEY);

    let parsed: CartLine[] = [];

    try {
      const result = saved ? JSON.parse(saved) : [];
      parsed = Array.isArray(result) ? result : [];
    } catch {
      parsed = [];
    }

    queueMicrotask(() => {
      if (!cancelled) {
        setItems(parsed);
        setHydrated(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // Save cart only after loading the saved cart
  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  // Listen for cart changes from other browser tabs
  useEffect(() => {
    if (!hydrated) return;

    const handleStorage = (event: StorageEvent) => {
      if (event.key !== CART_KEY) return;

      try {
        const parsed = event.newValue
          ? JSON.parse(event.newValue)
          : [];

        setItems(Array.isArray(parsed) ? parsed : []);
      } catch {
        setItems([]);
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => {
      window.removeEventListener("storage", handleStorage);
    };
  }, [hydrated]);

  const value = useMemo<CartContextType>(
    () => ({
      items,

      count: items.reduce(
        (total, item) => total + item.quantity,
        0
      ),

      subtotal: items.reduce(
        (total, item) =>
          total + item.quantity * item.product.price,
        0
      ),

      add: (product) => {
        setItems((old) => {
          const existing = old.find(
            (item) => item.product.id === product.id
          );

          return existing
            ? old.map((item) =>
                item.product.id === product.id
                  ? {
                      ...item,
                      quantity: item.quantity + 1,
                    }
                  : item
              )
            : [...old, { product, quantity: 1 }];
        });
      },

      change: (id, qty) => {
        setItems((old) =>
          old.map((item) =>
            item.product.id === id
              ? {
                  ...item,
                  quantity: Math.max(1, qty),
                }
              : item
          )
        );
      },

      remove: (id) => {
        setItems((old) =>
          old.filter((item) => item.product.id !== id)
        );
      },

      clear: () => {
        setItems([]);
      },
    }),
    [items]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}
