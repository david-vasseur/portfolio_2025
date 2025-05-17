"use client";
import { createContext, useContext, useState } from "react";

type PageContextType = {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

const PageContext = createContext<PageContextType | null>(null);

export const PageProvider = ({ children }: { children: React.ReactNode }) => {

    const [currentIndex, setCurrentIndex] = useState<number>(0);

    return (
        <PageContext.Provider value={{ currentIndex, setCurrentIndex }}>
            {children}
        </PageContext.Provider>
    )
}

export const usePage = () => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
};