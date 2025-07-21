import { create } from "zustand";
import { persist } from "zustand/middleware";

type PageState = {
  currentIndex: number;
  setCurrentIndex: (index: number | ((prev: number) => number)) => void;
  hasHydrated: boolean;
  setHasHydrated: () => void;
};

export const usePageIndexStore = create<PageState>()(
  persist(
    (set, get) => ({
      currentIndex: 0,
      setCurrentIndex: (indexOrUpdater) => {
        const value =
          typeof indexOrUpdater === "function"
            ? indexOrUpdater(get().currentIndex)
            : indexOrUpdater;
        set({ currentIndex: value });
      },
      hasHydrated: false,
      setHasHydrated: () => set({ hasHydrated: true }),
    }),
    {
      name: "page-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated();
      },
    }
  )
);
