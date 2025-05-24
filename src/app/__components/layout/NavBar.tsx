"use client"
import { usePage } from '@/hooks/pageContext';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react'

function NavBar({ className }: { className: string }) {

    const divRef = useRef<HTMLDivElement>(null);
    const homeRef = useRef<HTMLAnchorElement>(null);
    const workRef = useRef<HTMLAnchorElement>(null);
    const contactRef = useRef<HTMLAnchorElement>(null);
    const { currentIndex, setCurrentIndex } = usePage();

    useEffect(() => {
        if (homeRef.current && divRef.current && currentIndex === 0) {
            moveSpan(homeRef.current)
        }
        if (workRef.current && divRef.current && currentIndex === 1) {
            moveSpan(workRef.current)
        }
        if (contactRef.current && divRef.current && currentIndex === 2) {
            moveSpan(contactRef.current)
        }
    }, [currentIndex])

    const [leftPosition, setLeftPosition] = useState<number>()
    const [spanWidth, setSpanWidth] = useState<number>();    
    
    const moveSpan = (ref: HTMLAnchorElement | null) => {
        if (!ref || !divRef.current) return;
        const width = ref.offsetWidth;
        const left = ref.offsetLeft + width / 2;
        setSpanWidth(width + 24); 
        setLeftPosition(left);
    };
    

	return (
        <div className={className}>        
            <div className={`relative h-[50px] px-[1.3rem] py-[1rem] rounded-4xl flex justify-around items-center gap-6 bg-gray-800/30 backdrop-blur-sm shadow-2xl border-1 border-border-1 nav-filter test-border`} ref={divRef}>
                <Link 
                    href="#" 
                    className={`block link-nav ${currentIndex === 0 ? "text-accent-1" : ""} font-bold text-sm sm:text-lg z-3`} 
                    onClick={() => {
                        setCurrentIndex(0); 
                        moveSpan(homeRef.current)}} 
                        ref={homeRef}>
                            Home
                </Link>
                <Link 
                    href="#" 
                    className={`block link-nav ${currentIndex === 1 ? "text-accent-1" : ""} font-bold text-sm sm:text-lg z-3`} 
                    onClick={() => {
                        setCurrentIndex(1); 
                        moveSpan(workRef.current)}} 
                        ref={workRef}>
                            Work
                </Link>
                <Link 
                    href="#" 
                    className={`block link-nav ${currentIndex === 2 ? "text-accent-1" : ""} font-bold text-sm sm:text-lg z-3`} 
                    onClick={() => {
                        setCurrentIndex(2); 
                        moveSpan(contactRef.current)}} 
                        ref={contactRef}>
                            Contact
                </Link>
                <span 
                    className={`span-nav absolute h-8 bg-text-2/50 z-2 rounded-2xl transition-all ease-out duration-500`}
                    style={{ width: `${spanWidth}px`, left: `${leftPosition}px`, transform: "translateX(-50%)" }}
                >
                </span>
            </div>
        </div>
	)
}

export default NavBar;