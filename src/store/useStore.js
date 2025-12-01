import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      cart: [],
      count: 0,

      addItem: (itemId) =>
        set((state) => ({
          cart: [...state.cart, itemId],
          count: state.count + 1,
        })),

      removeItem: (itemId) =>
        set((state) => ({
          cart: state.cart.filter((id) => id !== itemId),
          count: Math.max(0, state.count - 1),
        })),

      toggleItem: (itemId) =>
        set((state) => {
          const exists = state.cart.includes(itemId);

          return exists
            ? {
                cart: state.cart.filter((id) => id !== itemId),
                count: Math.max(0, state.count - 1),
              }
            : {
                cart: [...state.cart, itemId],
                count: state.count + 1,
              };
        }),
    }),
    { name: "cart-storage" }
  )
);
