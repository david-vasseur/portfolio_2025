"use client";
import { usePage } from '@/hooks/pageContext';
import React, { useEffect, useRef } from 'react'

function Wrapper({ children }: { children :React.ReactNode }) {

    const { currentIndex, setCurrentIndex } = usePage();
    console.log(currentIndex);
    
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isScrollingRef = useRef<boolean>(false); 

    const handleWheel = (e: WheelEvent) => {
            if (isScrollingRef.current) return;
    
            isScrollingRef.current = true;

            const maxIndex = React.Children.count(children) - 1;
    
            setTimeout(() => {
            isScrollingRef.current = false;
            }, 600); 
    
            if (e.deltaY > 0) {
            
            setCurrentIndex((prev: number) => Math.min(prev + 1, maxIndex));
            } else {
            
            setCurrentIndex((prev: number) => Math.max(prev - 1, 0));
            }
        };
    
        useEffect(() => {
            const node = containerRef.current;
            if (node) {
                node.addEventListener('wheel', handleWheel, { passive: false });
                return () => node.removeEventListener('wheel', handleWheel);
            }
            
        }, []);

    return (
        <div id="#wrapper" className="max-h-[300vh]" ref={containerRef}>
            <div id="#inner" className="h-[300vh] transition-transform duration-[.5s] ease-in-out overflow-y-hidden" style={{ transform: `translateY(-${currentIndex * 100}vh)` }}>
                {children}
            </div>
        </div>
    )
}

export default Wrapper;