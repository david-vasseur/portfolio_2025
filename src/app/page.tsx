"use client";

import Wrapper from "./__components/features/Wrapper";
import SectionHome from "./__components/layout/SectionHome";
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
				<section id="section-1" className="h-[100dvh] w-full flex justify-center items-end">
					<SectionHome />
				</section>
				<section id="section-2" className="h-[100dvh] w-full flex justify-center items-center">
					<SectionWork />
				</section>
				<section id="section-3" className="h-[100dvh] w-full flex justify-center items-end">
					<SectionContact />
				</section>
			</Wrapper>	
		</main>
	);
}
