"use client"

import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "../ux/Card"
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri"
import { SiElectron, SiExpress, SiMongodb, SiSymfony, SiTailwindcss } from "react-icons/si"
import CardButton from "../ux/CardButton"
import { useEffect, useRef, useState } from "react"

export default function Page() {


	const cardRef1 = useRef<HTMLDivElement>(null);
	const cardRef2 = useRef<HTMLDivElement>(null);
	const cardRef3 = useRef<HTMLDivElement>(null);

	const [active, setActive] = useState(1);
	console.log(active);
	

	useEffect(() => {
		const handleSwitch = (active: number) => {
			if (cardRef1.current && cardRef2.current && cardRef3.current) {
				switch (active) {
					case 2:
						cardRef1.current.classList.remove("z-[30]", "z-[40]", "z-[50]", "top-1", "top-4", "top-8", "left-2", "left-12", "left-22");
						cardRef1.current.classList.add("z-[30]", "top-8", "left-22");
						cardRef2.current.classList.remove("z-[30]", "z-[40]", "z-[50]", "top-1", "top-4", "top-8", "left-2", "left-12", "left-22");
						cardRef2.current.classList.add("z-[50]", "top-1", "left-2");
						cardRef3.current.classList.remove("z-[30]", "z-[40]", "z-[50]", "top-1", "top-4", "top-8", "left-2", "left-12", "left-22");
						cardRef3.current.classList.add("z-[40]", "top-4", "left-12");
						break;
					case 3:
						cardRef1.current.classList.remove("z-[30]", "z-[40]", "z-[50]", "top-1", "top-4", "top-8", "left-2", "left-12", "left-22");
						cardRef1.current.classList.add("z-[40]", "top-4", "left-12");
						cardRef2.current.classList.remove("z-[30]", "z-[40]", "z-[50]", "top-1", "top-4", "top-8", "left-2", "left-12", "left-22");
						cardRef2.current.classList.add("z-[30]", "top-8", "left-22");
						cardRef3.current.classList.remove("z-[30]", "z-[40]", "z-[50]", "top-1", "top-4", "top-8", "left-2", "left-12", "left-22");
						cardRef3.current.classList.add("z-[50]", "top-1", "left-2");
						break;
					default: 
						cardRef1.current.classList.remove("z-[30]", "z-[40]", "z-[50]", "top-1", "top-4", "top-8", "left-2", "left-12", "left-22");
						cardRef1.current.classList.add("z-[50]", "top-1", "left-2");
						cardRef2.current.classList.remove("z-[30]", "z-[40]", "z-[50]", "top-1", "top-4", "top-8", "left-2", "left-12", "left-22");
						cardRef2.current.classList.add("z-[40]", "top-4", "left-12");
						cardRef3.current.classList.remove("z-[30]", "z-[40]", "z-[50]", "top-1", "top-4", "top-8", "left-2", "left-12", "left-22");
						cardRef3.current.classList.add("z-[30]", "top-8", "left-22");
						break;
				}
			}
		}
		handleSwitch(active)
	}, [active])

	return (
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
			<div className="sm:hidden mt-6 relative">
				<div className="absolute w-[75vw] rounded-2xl bg-cards text-hovered transition-all duration-400 delay-50" onClick={() => setActive(1)} ref={cardRef1}>
					<div className="h-[50vh] p-2 rounded-2xl grid grid-rows-[15%_auto_15%] 2xl:grid-rows-[20%_auto_20%] place-items-center bg-logo2 shadow-gray-800 shadow-md hover:shadow-2xl duration-100 transition-all">
						<div className="w-[90%] flex justify-between items-center">
							<div
								className="text-white">
								<h2 className="text-2xl text-text-2 font-bold">Photo-Share</h2>
							</div>
							<div className="flex text-text-1 gap-4 [transform-style:preserve-3d]">
								<div 
									className="text-[1.5rem] 2xl:text-[2rem] ">
									<RiReactjsFill />									
								</div>
								<div 
									className="text-[1.5rem] 2xl:text-[2rem]">
									<SiExpress />
									
								</div>
								<div 
									className="text-[1.5rem] 2xl:text-[2rem]">
									<SiElectron />
									
								</div>
								
							</div>								
						</div>	
						<div className="w-[90%] 2xl:w-[80%] rounded">
							<p className="p-2 font-black rounded-xl paragraph backdrop-blur-[10px]">A fullstack desktop app to organize and share photos by album. It features a robust server-side security system with fingerprinting, signed URLs (GCS), and two-factor authentication for sensitive actions like account validation or password changes.
							</p>
						</div>
						<div className="w-[90%] flex justify-around 2xl:justify-evenly items-center">
							<div>
								<CardButton arrow={false} inner1="Github" inner2="Code Review" href="https://github.com/david-vasseur/electron-back/tree/master" />
							</div>
							<div>
								<CardButton arrow={true} inner1="Download" inner2="Application" href="https://github.com/david-vasseur/electron-back/releases/tag/v0.1.3" />
							</div>
						</div>						
					</div>
				</div>
				<div className="absolute w-[75vw] rounded-2xl bg-cards text-hovered transition-all duration-400 delay-100" onClick={() => setActive(2)} ref={cardRef2}>
					<div className="h-[50vh] p-2 rounded-2xl grid grid-rows-[15%_auto_15%] 2xl:grid-rows-[20%_auto_20%] place-items-center bg-logo1 shadow-gray-800 shadow-md hover:shadow-2xl duration-100 transition-all">
						<div className="w-[90%] flex justify-between items-center">
							<div
								className="text-white">
								<h2 className="text-2xl text-text-2 font-bold">Photo-Share</h2>
							</div>
							<div className="flex text-text-1 gap-4 [transform-style:preserve-3d]">
								<div 
									className="text-[1.5rem] 2xl:text-[2rem] ">
									<RiReactjsFill />									
								</div>
								<div 
									className="text-[1.5rem] 2xl:text-[2rem]">
									<SiExpress />
									
								</div>
								<div 
									className="text-[1.5rem] 2xl:text-[2rem]">
									<SiElectron />
									
								</div>
								
							</div>								
						</div>	
						<div className="w-[90%] 2xl:w-[80%] rounded">
							<p className="p-1 font-black rounded-xl paragraph">A fullstack desktop app to organize and share photos by album. It features a robust server-side security system with fingerprinting, signed URLs (GCS), and two-factor authentication for sensitive actions like account validation or password changes.
							</p>
						</div>
						<div className="w-[90%] flex justify-around 2xl:justify-evenly items-center">
							<div>
								<CardButton arrow={false} inner1="Github" inner2="Code Review" href="https://github.com/david-vasseur/electron-back/tree/master" />
							</div>
							<div>
								<CardButton arrow={true} inner1="Download" inner2="Application" href="https://github.com/david-vasseur/electron-back/releases/tag/v0.1.3" />
							</div>
						</div>						
					</div>
				</div>
				<div className="absolute w-[75vw] rounded-2xl bg-cards text-hovered transition-all duration-400 delay-150" onClick={() => setActive(3)} ref={cardRef3}>
					<div className="h-[50vh] p-2 rounded-2xl grid grid-rows-[15%_auto_15%] 2xl:grid-rows-[20%_auto_20%] place-items-center bg-logo shadow-gray-800 shadow-md hover:shadow-2xl duration-100 transition-all">
						<div className="w-[90%] flex justify-between items-center">
							<div
								className="text-white">
								<h2 className="text-2xl text-text-2 font-bold">Photo-Share</h2>
							</div>
							<div className="flex text-text-1 gap-4 [transform-style:preserve-3d]">
								<div 
									className="text-[1.5rem] 2xl:text-[2rem] ">
									<RiReactjsFill />									
								</div>
								<div 
									className="text-[1.5rem] 2xl:text-[2rem]">
									<SiExpress />
									
								</div>
								<div 
									className="text-[1.5rem] 2xl:text-[2rem]">
									<SiElectron />
									
								</div>
								
							</div>								
						</div>	
						<div className="w-[90%] 2xl:w-[80%] rounded">
							<p className="p-1 font-black rounded-xl paragraph">A fullstack desktop app to organize and share photos by album. It features a robust server-side security system with fingerprinting, signed URLs (GCS), and two-factor authentication for sensitive actions like account validation or password changes.
							</p>
						</div>
						<div className="w-[90%] flex justify-around 2xl:justify-evenly items-center">
							<div>
								<CardButton arrow={false} inner1="Github" inner2="Code Review" href="https://github.com/david-vasseur/electron-back/tree/master" />
							</div>
							<div>
								<CardButton arrow={true} inner1="Download" inner2="Application" href="https://github.com/david-vasseur/electron-back/releases/tag/v0.1.3" />
							</div>
						</div>						
					</div>
				</div>
			</div>
		</div>
	)
};