"use client";

import { usePageIndexStore } from '@/hooks/store/pageIndexStore';
import { createTouchHandler, createWheelHandler } from '@/lib/scroll/scrollHandlers';
import React, { useCallback, useEffect, useMemo, useRef } from 'react';

function Wrapper({ children }: { children: React.ReactNode }) {
  const { currentIndex, setCurrentIndex, hasHydrated } = usePageIndexStore();

  const touchStartY = useRef<number | null>(null);
  const touchEndY = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isScrollingRef = useRef<boolean>(false);

  const pageCount = React.Children.count(children);

  useEffect(() => {
    if (hasHydrated && currentIndex >= pageCount) {
      setCurrentIndex(pageCount - 1);
    }
  }, [hasHydrated, currentIndex, pageCount, setCurrentIndex]);

  const handleWheel = useCallback(
    createWheelHandler(setCurrentIndex, pageCount, isScrollingRef),
    [setCurrentIndex, pageCount]
  );

  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useMemo(
    () =>
      createTouchHandler(
        setCurrentIndex,
        pageCount,
        touchStartY,
        touchEndY,
        isScrollingRef
      ),
    [setCurrentIndex, pageCount]
  );

  useEffect(() => {
    const node = containerRef.current;
    if (!node || !hasHydrated) return;

    node.addEventListener('wheel', handleWheel, { passive: false });
    node.addEventListener('touchstart', handleTouchStart, { passive: true });
    node.addEventListener('touchmove', handleTouchMove, { passive: true });
    node.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      node.removeEventListener('wheel', handleWheel);
      node.removeEventListener('touchstart', handleTouchStart);
      node.removeEventListener('touchmove', handleTouchMove);
      node.removeEventListener('touchend', handleTouchEnd);
    };
  }, [handleWheel, hasHydrated]);

  if (!hasHydrated) return null; // ⛔ Bloque le rendu avant hydratation

  return (
    <div id="#wrapper" className="max-h-[300svh]" ref={containerRef}>
      <div
        id="#inner"
        className="h-[300svh] transition-transform duration-[.5s] ease-in-out overflow-y-hidden"
        style={{ transform: `translateY(-${currentIndex * 100}svh)` }}
      >
        {children}
      </div>
    </div>
  );
}

export default Wrapper;
