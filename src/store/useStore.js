import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set) => ({
      count: 0,
      setCount: () => set((state) => ({ count: state.count + 1 })),
    }),
    { name: "count-storage" }
  )
);
