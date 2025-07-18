"use client"

import Skills from "../features/Skills";
import { FaDocker, FaGithub, FaLinkedin, FaNode, FaReact, FaUbuntu } from "react-icons/fa6";
import { SiExpress, SiNginx, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IconType } from "react-icons";
import { TbBrandMongodb } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";
import { MdAlternateEmail, MdArrowForwardIos } from "react-icons/md";
import ContactIcons from "../features/ContactIcons";
import { FlipWords } from "../ui/FlipWord";
import TestSpan from "../ui/TestSpan";
import { BiSolidQuoteLeft, BiSolidQuoteRight } from "react-icons/bi";
import { usePageIndexStore } from "@/hooks/store/pageIndexStore";

type FetchedIconsProps = {
    id: number,
    name?: string,
    href?: string,
    content: IconType[]
}

export default function Page() {

    const fetchedSkills: FetchedIconsProps[] = [
        {
            id: 0,
            name: "Front-end",
            content: [FaReact , SiTailwindcss , RiNextjsFill]
        },
        {
            id: 1,
            name: "Back-end",
            content: [FaNode , SiExpress , TbBrandMongodb]
        },
        {
            id: 2,
            name: "Dev-ops",
            content: [SiNginx , FaUbuntu , FaDocker]
        }
    ];

    const { currentIndex } = usePageIndexStore();

    const words = ["FRONT", "BACK", "MERN"];

    const fetchedContacts: FetchedIconsProps[] = [
        {
            id: 0,
            href: "https://www.linkedin.com/in/david-vasseur-724439306/",
            content: [FaLinkedin]
        },
        {
            id: 1,
            href: "https://github.com/david-vasseur",
            content: [FaGithub]
        },
        {
            id: 2,
            href: "mailto:'p5y4@laposte.net'",
            content: [MdAlternateEmail]
        },
        {
            id: 3,
            href: "tel:+33659127367",
            content: [FiPhone]
        }
    ];

	return (
		<div className="grid grid-rows-[10%_auto_auto_auto] h-[100%]">
            
            <div className="w-full"> 
            </div>
            
            <div className="mx-auto xl:w-[80%] 2xl:w-[60%] flex flex-col gap-10 justify-center items-center">
                <div className="mb-15 title3xl">
                    <h1 className={`${currentIndex === 0 ? "title anime-opacity" : ""} text-[2.5rem] xl:text-8xl font-black opacity-0 text-text-1 border-b-2 border-b-accent-2`}>DAVID VASSEUR</h1>
                    <h2 className="mt-2 text-[2rem] xl:text-5xl 2xl:text-7xl font-black text-text-1 transition-all duration-[2s]"><FlipWords words={words} />DEVELOPER</h2>
                </div>

                <div className="w-[100%] flex flex-col xl:flex-row justify-evenly 2xl:justify-between items-center">
                    <div className="gap-5 sm:gap-10 flex justify-center items-end row-start-3 xl:row-start-2 mb-4 xl:mb-0">
                        {fetchedContacts.map(contact => (
                                <ContactIcons key={contact.id} href={contact.href || '#'} icons={contact.content} />
                            ))}
                    </div>
                    <div className="flex h-full flex-col gap-1 justify-center items-center">
                        <a 
                            href="/cv.pdf"
                            target="_blank"
                            className="p-4 rounded-full w-[12rem] h-[3.5rem] font-black flex gap-2 justify-center items-center bg-gray-800/40 border-3 border-text-1 neon-icons started" 
                        >
                            <TestSpan />
                            <MdArrowForwardIos />
                        </a>
                        <a 
                            className="hidden p-4 rounded-full w-[12rem] h-[3.5rem] font-black xl:flex gap-2 justify-center items-center bg-gray-800/40 border-3 border-text-1 reflect-button"
                        >
                            <TestSpan />
                            <MdArrowForwardIos />
                        </a>
                    </div>
                </div>
            </div>
            
            <div  className="bg-gradient-to-br from-accent-2/30 to-text-2/10 rounded-bl-2xl rounded-tr-2xl rounded-tl-sm rounded-br-sm shadow-gray-800 shadow-2xl p-2 sm:p-4 grid grid-cols-[auto_auto_auto] place-items-center xl:w-[60%] 2xl:w-[35%] mx-auto xl:text-3xl 2xl:text-4xl font-black line-5 text-text-1 items-center">
                <BiSolidQuoteLeft className="self-start quote-shadow" />
                <h3 className="text-md sm:text-3xl self-center w-fit text-text-2"><em>Full control, full stack, fully MERN<br/>I build where tech meets vision</em></h3>
                <BiSolidQuoteRight className="self-end quote-shadow" />
            </div>

            <div className="flex justify-around xl:w-[80%] 2xl:w-[60%] mx-auto">
                {fetchedSkills.map(skill => (
                    <Skills key={skill.id} title={skill.name || 'unnamed'} icons={skill.content} />
                ))}
            </div>   
		</div>
	)
};