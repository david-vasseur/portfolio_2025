"use client";

import Wrapper from "../lib/scroll/Wrapper";
import HomeTest from "./__components/layout/SectionHome";
import SectionWork from "./__components/layout/SectionWork";
import SectionContact from "./__components/layout/SectionContact";
import Transitions from "./__components/features/Transitions";
import { useEffect, useRef, useState } from "react";
import { usePageIndexStore } from "@/hooks/store/pageIndexStore";
import { AuroraBackground } from "./__components/ui/AuroraBackground";

export default function Home() {

	const [isOpen, setIsOpen] = useState(false);
	const [isMobile, setIsMobile] = useState<boolean | undefined>();
	const { currentIndex } = usePageIndexStore();
	const isFirstRender = useRef(true);

	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}

		const goTransition = () => {
			setIsOpen((prev) => !prev);
        	setTimeout(() => {setIsOpen((prev) => !prev)}, 1000);
		};

		if (currentIndex !== null) {
			goTransition();
		}
	}, [currentIndex]);

	useEffect(() => { 

        function reportWindowSize() {
            const width = window.innerWidth;
            setIsMobile(width <= 640);     
        }

        reportWindowSize()

        window.addEventListener("resize", reportWindowSize );

        return () => {
            window.removeEventListener("resize", reportWindowSize) 
        }

    }, []);


	return (		
		<main className={`${isMobile ? "bg-[linear-gradient(to_top_left,_#6E56CF_0%,_#6E56CF_2%,_#1B1525_90%,_#1B1525_100%)]" : ""} w-full`}>
			{!isMobile && <AuroraBackground />}
			<Transitions isOpen={isOpen} onClose={() => setIsOpen(false)} />
			<Wrapper>
				<section id="section-1" className="h-[100svh] w-full">
					<HomeTest />
				</section>
				<section id="section-2" className="h-[100svh] w-full">
					<SectionWork isMobile={isMobile} />
				</section>
				<section id="section-3" className="h-[100svh] w-full">
					<SectionContact isMobile={isMobile} />
				</section>
			</Wrapper>	
		</main>
	);
}
