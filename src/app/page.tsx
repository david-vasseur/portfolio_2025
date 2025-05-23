"use client";

import Wrapper from "../lib/scroll/Wrapper";
import HomeTest from "./__components/layout/HomeTest";
import SectionWork from "./__components/layout/SectionWork";
import SectionContact from "./__components/layout/SectionContact";
import Transitions from "./__components/features/Transitions";
import { useEffect, useRef, useState } from "react";
import { usePage } from "@/hooks/pageContext";

export default function Home() {

	const [isOpen, setIsOpen] = useState(false);
	const { currentIndex } = usePage();
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


	return (		
		<main className="w-full">
			<Transitions isOpen={isOpen} onClose={() => setIsOpen(false)} />
			<Wrapper>
				<section id="section-1" className="h-[100svh] w-full">
					{/* <SectionHome /> */}
					<HomeTest />
				</section>
				<section id="section-2" className="h-[100svh] w-full">
					<SectionWork />
				</section>
				<section id="section-3" className="h-[100svh] w-full">
					<SectionContact />
				</section>
			</Wrapper>	
		</main>
	);
}
