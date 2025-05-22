"use client";
import { usePage } from '@/hooks/pageContext';
import { createTouchHandler, createWheelHandler } from '@/lib/scrollHandlers';
import React, { useCallback, useEffect, useMemo, useRef } from 'react'

function Wrapper({ children }: { children :React.ReactNode }) {

    const { currentIndex, setCurrentIndex } = usePage();
    console.log(currentIndex);

    const touchStartY = useRef<number | null>(null);
    const touchEndY = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isScrollingRef = useRef<boolean>(false); 

    const handleWheel = useCallback(
        createWheelHandler(setCurrentIndex, React.Children.count(children), isScrollingRef),
        [setCurrentIndex, children]
    );

    const { handleTouchStart, handleTouchMove, handleTouchEnd } = useMemo(
        () => createTouchHandler(setCurrentIndex, React.Children.count(children), touchStartY, touchEndY, isScrollingRef),
        [setCurrentIndex, children, touchStartY, touchEndY]
    );
    
    useEffect(() => {
        const node = containerRef.current;
        if (node) {
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
        }
        
    }, [handleWheel]);

    return (
        <div id="#wrapper" className="max-h-[300svh]" ref={containerRef}>
            <div id="#inner" className="h-[300svh] transition-transform duration-[.5s] ease-in-out overflow-y-hidden" style={{ transform: `translateY(-${currentIndex * 100}svh)` }}>
                {children}
            </div>
        </div>
    )
}

export default Wrapper;