"use client";
import { usePage } from '@/hooks/pageContext';
import { createWheelHandler } from '@/lib/scrollHandlers';
import React, { useCallback, useEffect, useRef } from 'react'

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

    const handleTouchStart = (e: TouchEvent) => {
        touchStartY.current = e.touches[0].clientY;
    };

    const handleTouchMove = (e: TouchEvent) => {
        touchEndY.current = e.touches[0].clientY;
    };

    const handleTouchEnd = () => {
        if (touchStartY.current === null || touchEndY.current === null) return;
        if (isScrollingRef.current) return;

        const distance = touchStartY.current - touchEndY.current;
        const threshold = 50; 

        const maxIndex = React.Children.count(children) - 1;

        isScrollingRef.current = true;
        setTimeout(() => {
            isScrollingRef.current = false;
        }, 600);

        if (distance > threshold) {
            setCurrentIndex((prev: number) => Math.min(prev + 1, maxIndex));
        } else if (distance < -threshold) {
            setCurrentIndex((prev: number) => Math.max(prev - 1, 0));
        }

        touchStartY.current = null;
        touchEndY.current = null;
    };
    
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
        <div id="#wrapper" className="max-h-[300vh]" ref={containerRef}>
            <div id="#inner" className="h-[300vh] transition-transform duration-[.5s] ease-in-out overflow-y-hidden" style={{ transform: `translateY(-${currentIndex * 100}vh)` }}>
                {children}
            </div>
        </div>
    )
}

export default Wrapper;