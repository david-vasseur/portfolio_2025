"use client"

import Image from "next/image"
import { CardBody, CardContainer, CardItem } from "../ux/Card"
import TestSpan from "../ux/TestSpan"
import { MdArrowForwardIos } from "react-icons/md"
import { RiNextjsFill, RiReactjsFill } from "react-icons/ri"
import { SiElectron, SiExpress, SiSymfony, SiTailwindcss } from "react-icons/si"
import CardButton from "../ux/CardButton"

export default function Page() {

	return (
			<div className="h-[100%] grid grid-rows-[15svh_20svh_1fr]">
				<div className="text-center text-xl"></div>
				<div className="text-center font-black text-text-1 flex flex-col justify-around">
					<h2 className="xl:text-3xl 2xl:text-4xl">I'm learning a bit more every day by building projects</h2>
					<h3 className="xl:text-3xl 2xl:text-4xl">Here are a few concrete examples of what I've created so far</h3>
					<h3 className="xl:text-5xl 2xl:text-6xl text-text-2">simple, but made with care and curiosity</h3>
				</div>
				<div className="text-center text-xl flex flex-col xl:flex-row gap-5 justify-center bg-cards">
					<CardContainer className="w-[28vw] aspect-square rounded-lg">
						<CardBody className="w-[25vw] rounded-4xl p-2 grid grid-rows-[15%_auto_15%] 2xl:grid-rows-[20%_auto_20%] place-items-center card-hover bg-logo2">
							<div className="w-[90%] flex justify-between items-center">
								<CardItem
									className="text-white"
									translateZ={60}
									>
									<h2 className="text-xl 2xl:text-2xl text-text-2 font-bold">Photo-Share</h2>
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
							<CardItem className="w-[80%] rounded"
							translateZ={80}>
								<p className="p-1 font-black rounded-xl hovered-para 2xl:text-lg xl:text-sm">A fullstack desktop app to organize and share photos by album. It features a robust server-side security system with fingerprinting, signed URLs (GCS), and two-factor authentication for sensitive actions like account validation or password changes.
								</p>
							</CardItem>
							<div className="w-[90%] flex justify-between 2xl:justify-evenly items-center">
								<CardItem 
								translateZ={120}>
								<CardButton arrow={false} inner1="Github" inner2="Code Review" />
							</CardItem>
							<CardItem 
								translateZ={120}>
								<CardButton arrow={true} inner1="Download" inner2="Application" />
							</CardItem>
							</div>						
						</CardBody>
					</CardContainer>
					<CardContainer className="w-[28vw] aspect-square rounded-lg">
						<CardBody className="w-[25vw] rounded-4xl p-2 flex flex-col items-center justify-evenly card-hover bg-logo1">
							<div className="w-[90%] flex justify-between items-center">
								<CardItem
									className="text-white"
									translateZ={60}
									>
									<h2 className="text-2xl text-text-2 font-bold">O'ptits Oignons</h2>
								</CardItem>
								<div className="flex text-text-1 gap-4 [transform-style:preserve-3d]">
									<CardItem 
										className="text-[2rem] "
										translateZ={60}
									>
										<RiNextjsFill />									
									</CardItem>
									<CardItem 
										className="text-[2rem]"
										translateZ={50}
									>
										<SiTailwindcss />
										
									</CardItem>
									<CardItem 
										className="text-[2rem]"
										translateZ={40}
									>
										<SiSymfony />
										
									</CardItem>
									
								</div>								
							</div>	
							<CardItem className="w-[80%] rounded"
							translateZ={80}>
								<p className="p-1 font-black rounded-xl hovered-para 2xl:text-lg xl:text-sm">A web platform to find local producers near you using geolocation. Users can browse products, add them to a cart, and place orders, while producers manage inventory and listings through a built-in back-office system.
								</p>
							</CardItem>
							<div className="w-[90%] flex justify-evenly items-center">
								<CardItem 
								translateZ={120}>
								<CardButton arrow={false} inner1="GitHub" inner2="Code Review" />
							</CardItem>
							<CardItem 
								translateZ={120}>
								<CardButton arrow={true} inner1="Visit" inner2="WebSite"/>
							</CardItem>
							</div>						
						</CardBody>
					</CardContainer>
					<CardContainer className="w-[28vw] aspect-square rounded-lg card-hover">
						<CardBody className="w-[25vw] rounded-4xl p-2 flex flex-col items-center justify-evenly bg-logo">
							<div className="w-[90%] flex justify-between items-center">
								<CardItem
									className="text-white"
									translateZ={60}
									>
									<h2 className="text-2xl text-text-2 font-bold">Portfolio 2025</h2>
								</CardItem>
								<div className="flex text-text-1 gap-4 [transform-style:preserve-3d]">
									<CardItem 
										className="text-[2rem] "
										translateZ={60}
									>
										<RiNextjsFill />									
									</CardItem>
									<CardItem 
										className="text-[2rem]"
										translateZ={50}
									>
										<SiTailwindcss />
										
									</CardItem>
									<CardItem 
										className="text-[2rem]"
										translateZ={40}
									>
										<Image src={"/logo_aceternity_portfolio.png"} height={32} width={32} alt="lo ace"/>
										
									</CardItem>
									
								</div>								
							</div>							
							<CardItem className="w-[80%] rounded"
							translateZ={80}>
								<p className="p-1 font-black rounded-xl hovered-para 2xl:text-lg xl:text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, quod voluptates blanditiis facilis nihil rem atque quae ratione accusantium odit dolorum cupiditate incidunt commodi, hic, amet distinctio eligendi tempore soluta iste nisi animi vel natus sequi. Obcaecati architecto natus iusto.
								</p>
							</CardItem>
							<div className="w-[90%] flex justify-evenly items-center">
								<CardItem 
								translateZ={120}>
								<button 
									className="p-4 rounded-full w-[12rem] h-[3.5rem] font-black flex gap-2 justify-center items-center bg-gray-800/40 border-3 border-text-1 neon-icons started"
								>
									<TestSpan />
									<MdArrowForwardIos />
								</button>
							</CardItem>
							<CardItem 
								translateZ={120}>
								<button 
									className="p-4 rounded-full w-[12rem] h-[3.5rem] font-black flex gap-2 justify-center items-center bg-gray-800/40 border-3 border-text-1 neon-icons started"
								>
									<TestSpan />
									<MdArrowForwardIos />
								</button>
							</CardItem>
							</div>
						</CardBody>
					</CardContainer>
				</div>
			</div>
	)
};