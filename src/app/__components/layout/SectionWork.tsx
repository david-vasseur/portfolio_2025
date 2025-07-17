"use client"

import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ux/Card";
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
import { SiElectron, SiExpress, SiMongodb, SiSymfony, SiTailwindcss } from "react-icons/si";
import CardButton from "../ux/CardButton";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Page({ isMobile }: { isMobile: boolean | undefined }) {

	const [indexCard, setIndexCard] = useState(1);
	const [isAnimating, setIsAnimating] = useState(true);
	const [isReseting, setIsReseting] = useState(false);

	const realCards = [
		{
			title: "Photo-Share",
			text: "A fullstack desktop app to organize and share photos by album. It features a robust server-side security system with fingerprinting, signed URLs (GCS), and two-factor authentication for sensitive actions like account validation or password changes.",
			inner1: "Code Review",
			inner2: "Download App",
			button1: "https://github.com/david-vasseur/electron-back/tree/master",
			button2: "https://github.com/david-vasseur/electron-back/releases/tag/v0.1.3",
			background: "bg-logo2"
		},
		{
			title: "O'ptits Oignons",
			text: "A web platform to find local producers near you using geolocation. Users can browse products, add them to a cart, and place orders, while producers manage inventory and listings through a built-in back-office system.",
			inner1: "Code Review",
			inner2: "Visit Website",
			button1: "https://github.com/O-clock-Nem/projet-8-o-petits-oignons-front",
			button2: "https://www.opetitsoignons.io/",
			background: "bg-logo1"
		},
		{
			title: "Daikoomyo",
			text: "I built this as my first real professional project. A full-stack Next.js website for a therapist, featuring a MongoDB/Prisma backend, client-side iPhone event interactions, and SEO-ready architecture.",
			inner1: "Code Review",
			inner2: "Visit Website",
			button1: "https://github.com/david-vasseur/daikoomyo_v2",
			button2: "https://www.daikoomyo.fr",
			background: "bg-logo"
		}
	];

	const cards = [
		realCards[realCards.length - 1], 
		...realCards,                    
		realCards[0],                    
	];

	console.log(cards);
	console.log(indexCard);

	useEffect(() => {
		if (!isReseting) {
			if (indexCard === 0) {
			setTimeout(() => {
				setIsReseting(true);
				setIsAnimating(false);
				setIndexCard(3);
			}, 250)
			
			setTimeout(() => {
				setIsReseting(false);
				setIsAnimating(true);
			}, 270)
		} else if (indexCard === 3) {
			setTimeout(() => {
				setIsReseting(true);
				setIsAnimating(false);
				setIndexCard(0);
			}, 250)
			
			setTimeout(() => {
				setIsReseting(false);
				setIsAnimating(true);
			}, 270)
		}
	}
		
	}, [indexCard])
	

	const moveLeft = () => {
		if (isReseting) {
			return;
		} 
		if (indexCard === 0) {
			setIndexCard(2);
		}
		setIndexCard(prev => prev -1);
	}

	const moveRight = () => {
		if (isReseting) {
			return;
		}
		if (indexCard === 3) {
			setIndexCard(0);
		}
		setIndexCard(prev => prev + 1);
	}

	return (
		<>
			{!isMobile && (
				<div className="h-[100%] grid grid-rows-[15svh_20svh_1fr]">
					<div className="text-center text-xl"></div>
						<div className="text-center font-black text-text-1 flex flex-col justify-around">
							<h2 className="xl:text-3xl 2xl:text-4xl">I&apos;m learning a bit more every day by building projects</h2>
							<h3 className="xl:text-3xl 2xl:text-4xl">Here are a few concrete examples of what I&apos;ve created so far</h3>
							<h3 className="xl:text-5xl 2xl:text-6xl text-text-2">simple, but made with care and curiosity</h3>
						</div>					
					<div className="hidden text-center text-xl sm:flex flex-col xl:flex-row gap-5 justify-center items-center ">
						<CardContainer className="w-[30vw] aspect-square rounded-lg bg-cards text-hovered">
							<CardBody className="xl: w-[28vw] 2xl:w-[25vw] rounded-4xl p-2 grid grid-rows-[15%_auto_15%] 2xl:grid-rows-[20%_auto_20%] place-items-center card-hover bg-logo2 shadow-gray-800 shadow-md hover:shadow-2xl duration-100 transition-all">
								<div className="w-[90%] flex justify-between items-center">
									<CardItem
										className="text-white"
										translateZ={60}
										>
										<h2 className="text-2xl text-text-2 font-bold">Photo-Share</h2>
									</CardItem>
									<div className="flex text-text-1 gap-4 [transform-style:preserve-3d]">
										<CardItem 
											className="text-[1.5rem] 2xl:text-[2rem] "
											translateZ={60}
										>
											<RiReactjsFill />									
										</CardItem>
										<CardItem 
											className="text-[1.5rem] 2xl:text-[2rem]"
											translateZ={50}
										>
											<SiExpress />
											
										</CardItem>
										<CardItem 
											className="text-[1.5rem] 2xl:text-[2rem]"
											translateZ={40}
										>
											<SiElectron />
											
										</CardItem>
										
									</div>								
								</div>	
								<CardItem className="w-[90%] 2xl:w-[80%] rounded"
								translateZ={80}>
									<p className="p-1 font-black rounded-xl hovered-para paragraph">A fullstack desktop app to organize and share photos by album. It features a robust server-side security system with fingerprinting, signed URLs (GCS), and two-factor authentication for sensitive actions like account validation or password changes.
									</p>
								</CardItem>
								<div className="w-[90%] flex justify-around 2xl:justify-evenly items-center">
									<CardItem 
									translateZ={120}>
									<CardButton arrow={false} inner1="Github" inner2="Code Review" href="https://github.com/david-vasseur/electron-back/tree/master" />
								</CardItem>
								<CardItem 
									translateZ={120}>
									<CardButton arrow={true} inner1="Download" inner2="Application" href="https://github.com/david-vasseur/electron-back/releases/tag/v0.1.3" />
								</CardItem>
								</div>						
							</CardBody>
						</CardContainer>
						<CardContainer className="w-[30vw] aspect-square rounded-lg bg-cards text-hovered">
							<CardBody className="xl: w-[28vw] 2xl:w-[25vw] rounded-4xl p-2 grid grid-rows-[15%_auto_15%] 2xl:grid-rows-[20%_auto_20%] place-items-center card-hover bg-logo1 shadow-gray-800 shadow-md hover:shadow-2xl duration-100 transition-all">
								<div className="w-[90%] flex justify-between items-center">
									<CardItem
										className="text-white"
										translateZ={60}
										>
										<h2 className="text-2xl text-text-2 font-bold">O&apos;ptits Oignons</h2>
									</CardItem>
									<div className="flex text-text-1 gap-4 [transform-style:preserve-3d]">
										<CardItem 
											className="text-[1.4rem] 2xl:text-[2rem]"
											translateZ={60}
										>
											<RiNextjsFill />									
										</CardItem>
										<CardItem 
											className="text-[1.4rem] 2xl:text-[2rem]"
											translateZ={50}
										>
											<SiTailwindcss />
											
										</CardItem>
										<CardItem 
											className="text-[1.4rem] 2xl:text-[2rem]"
											translateZ={40}
										>
											<SiSymfony />
											
										</CardItem>
										
									</div>								
								</div>	
								<CardItem className="w-[90%] 2xl:w-[80%] rounded"
								translateZ={80}>
									<p className="p-1 font-black rounded-xl hovered-para paragraph">A web platform to find local producers near you using geolocation. Users can browse products, add them to a cart, and place orders, while producers manage inventory and listings through a built-in back-office system.
									</p>
								</CardItem>
								<div className="w-[90%] flex justify-around 2xl:justify-evenly items-center">
									<CardItem 
									translateZ={120}>
									<CardButton arrow={false} inner1="GitHub" inner2="Code Review" href="https://github.com/O-clock-Nem/projet-8-o-petits-oignons-front" />
								</CardItem>
								<CardItem 
									translateZ={120}>
									<CardButton arrow={true} inner1="Visit" inner2="WebSite" href="https://www.opetitsoignons.io/"/>
								</CardItem>
								</div>						
							</CardBody>
						</CardContainer>
						<CardContainer className="w-[30vw] aspect-square rounded-lg card-hover bg-cards text-hovered">
							<CardBody className="xl: w-[28vw] 2xl:w-[25vw] rounded-4xl p-2 grid grid-rows-[15%_auto_15%] 2xl:grid-rows-[20%_auto_20%] place-items-center card-hover bg-logo shadow-gray-800 shadow-md hover:shadow-2xl duration-100 transition-all">
								<div className="w-[90%] flex justify-between items-center">
									<CardItem
										className="text-white"
										translateZ={60}
										>
										<h2 className="text-2xl text-text-2 font-bold">Daikoomyo</h2>
									</CardItem>
									<div className="flex text-text-1 gap-4 [transform-style:preserve-3d]">
										<CardItem 
											className="text-[1.5rem] 2xl:text-[2rem]"
											translateZ={60}
										>
											<RiNextjsFill />									
										</CardItem>
										<CardItem 
											className="text-[1.5rem] 2xl:text-[2rem]"
											translateZ={50}
										>
											<SiMongodb />
											
										</CardItem>
										<CardItem 
											className="text-[1.5rem] 2xl:text-[2rem]"
											translateZ={40}
										>
											<Image src={"/logo_aceternity_portfolio.png"} height={32} width={32} className="xl:scale-[0.65] xl:translate-y-[-15%] 2xl:translate-y-0 2xl:scale-[1]" alt="lo ace"/>
											
										</CardItem>
										
									</div>								
								</div>							
								<CardItem className="w-[90%] 2xl:w-[80%] rounded"
								translateZ={80}
								>
									<p className="p-1 font-black rounded-xl hovered-para paragraph">I built this as my first real professional project. A full-stack Next.js website for a therapist, featuring a MongoDB/Prisma backend, client-side iPhone event interactions, and SEO-ready architecture.
									</p>
								</CardItem>
								<div className="w-[90%] flex justify-around 2xl:justify-evenly items-center">
									<CardItem 
									translateZ={120}
									>
									<CardButton arrow={false} inner1="GitHub" inner2="Code Review" href="https://github.com/david-vasseur/daikoomyo_v2" />
								</CardItem>
								<CardItem 
									translateZ={120}>
									<CardButton arrow={true} inner1="Visit" inner2="WebSite" href="https://www.daikoomyo.fr"/>
								</CardItem>
								</div>
							</CardBody>
						</CardContainer>
					</div>
				</div>
			)}
			{isMobile && (
				<div className="h-[100%] grid grid-rows-[15svh_65svh_1fr]">
					<div className="text-center text-xl"></div>
					<div className="px-4 h-full">
						<div className={`${indexCard === 1 ? realCards[2].background : indexCard === 2 ? realCards[0].background : realCards[1].background} h-[90%] rounded-4xl p-2 grid grid-rows-[15%_auto_15%] place-items-center transition-all duration-75 shadow-gray-800 shadow-lg`}>
							<div className="w-[90%] flex justify-between items-center">
								<div className="text-white">
									<h2 className="text-2xl text-text-2 font-bold">{indexCard === 1 ? realCards[2].title : indexCard === 2 ? realCards[0].title : realCards[1].title}</h2>
								</div>
								<div className="flex text-text-1 gap-4 [transform-style:preserve-3d]">
									<div className="text-[1.5rem] 2xl:text-[2rem]">
										{indexCard === 1 ? <RiNextjsFill /> : indexCard === 2 ? <RiReactjsFill /> : <RiNextjsFill />}									
									</div>
									<div className="text-[1.5rem] 2xl:text-[2rem]">
										{indexCard === 1 ? <SiMongodb /> : indexCard === 2 ? <SiExpress /> : <SiTailwindcss />}
									</div>
									<div className="text-[1.5rem] 2xl:text-[2rem]">
										{indexCard === 1 ? <SiTailwindcss /> : indexCard === 2 ? <SiElectron /> : <SiSymfony />}
									</div>
								</div>								
							</div>	
							<div className="w-[90%] 2xl:w-[80%] rounded">
								<p className="p-1 text-center font-black rounded-xl backdrop-blur-[5px]">
									{
										indexCard === 1 ? realCards[2].text : indexCard === 2 ? realCards[0].text : realCards[1].text
									}
								</p>
							</div>
							<div className="w-[90%] flex justify-between items-center">
								<CardButton arrow={false} inner1={indexCard === 1 ? realCards[2].inner1 : indexCard === 2 ? realCards[0].inner1 : realCards[1].inner1} inner2="Code Review" href={indexCard === 1 ? realCards[2].button1 : indexCard === 2 ? realCards[0].button1 : realCards[1].button1} />
								<CardButton arrow={true} inner1={indexCard === 1 ? realCards[2].inner2 : indexCard === 2 ? realCards[0].inner2 : realCards[1].inner2} inner2="Application" href={indexCard === 1 ? realCards[2].button2 : indexCard === 2 ? realCards[0].button2 : realCards[1].button2} />
							</div>						
						</div>
					</div>
					<div className="px-4 w-[100%] max-w-[100vw] flex justify-between items-center">
						<ChevronLeft className="w-10 h-10" style={{ strokeWidth: 3} } onClick={() => moveLeft()} />
						<div className="w-[70vw] overflow-hidden p-2">
							<div className={`flex gap-[2.8vw] ${isAnimating ? "transition-all duration-200" : "" }`} style={{ transform: `translateX(-${indexCard * 34.8}vw)` }}>
								{cards.map((c, i) => (
									<div key={i} className="relative rounded-2xl h-[32vw] w-[32vw] min-w-[32vw] flex justify-center items-center shadow-gray-800 shadow-md overflow-hidden">
										<div className={`${c.background} absolute inset-0 opacity-50 blur-[2px]`} />
										<h2 className="relative text-xl text-center text-text-2 font-bold z-10">
											{c.title}
										</h2>
									</div>
								))}

							</div>
						</div>	
						<ChevronRight className="w-10 h-10" style={{ strokeWidth: 3 }} onClick={() => moveRight()} />
					</div>
				</div>
			)}
		</>
	)
};