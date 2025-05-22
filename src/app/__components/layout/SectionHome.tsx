"use client"

import Skills from "../features/Skills";
import { FaDocker, FaGithub, FaLinkedin, FaNode, FaReact, FaUbuntu } from "react-icons/fa6";
import { SiExpress, SiNginx, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IconType } from "react-icons";
import { TbBrandMongodb } from "react-icons/tb";
import HomeTitle from "../features/HomeTitle";
import { FiPhone } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import ContactIcons from "../features/ContactIcons";
import ProfilePic from "../ux/ProfilePic";

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
            name: "DevOps",
            content: [SiNginx , FaUbuntu , FaDocker]
        }
    ];

    const jokes = [
        "I build fullstack apps like I cook: from scratch, spicy, and meant to be shared",
        "MongoDB keeps my data grounded, React keeps my UI flying — I live comfortably in the tension between the two",
        "I don't chase trends, I chase clarity — clean code, clean UX, and systems that age well",
        "I'm the kind of developer who doesn't just fix bugs — I make sure they regret ever showing up",
        "For me, MERN isn't just a stack — it's a playground, a workshop, and sometimes, a battlefield I genuinely enjoy returning to"
    ]

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
            href: "+33659127367",
            content: [FiPhone]
        }
    ];

	return (
		<div className="grid grid-rows-[10%_1fr_auto] sm:grid-rows-[15%_1fr_auto] h-[100%]">
            <div className="w-[100vw]"> 
            </div>
                <div className="w-[100vw] grid grid-cols-[1fr] grid-rows-[auto_auto_15svh] xl:grid-rows-[20svh_45svh] xl:grid-cols-[40vw_60vw] 2xl:grid-rows-2">
                    <div className="hidden xl:flex h-full w-full justify-center items-center">
                        <ProfilePic />
                    </div>

                    <div className="w-full flex justify-center items-center">
                        <HomeTitle />
                    </div>

                    <div className="gap-5 sm:gap-10 w-full flex justify-center items-end row-start-3 xl:row-start-2">
                        {fetchedContacts.map(contact => (
                                <ContactIcons key={contact.id} href={contact.href || '#'} icons={contact.content} />
                            ))}
                    </div>

                    <div className="w-full flex justify-center items-center sm:items-end 3xl:items-center">
                        <p className="bg-black/10 backdrop-blur-xl w-[90vw] xl:w-[45vw] 2xl:w-[40vw] font-black p-2  text-xs sm:text-sm 2xl:text-xl text-[var(--text1)] text-justify border-b-1 border-b-accent-2 border-l-1 border-l-accent-2 rounded-xs shadow-subtitle">Originally from Paris and now living in the Gard region, I come from a rich and diverse background in commerce. I climbed the ladder from salesperson to commercial director and site manager, discovering along the way a deep passion for computing and logic. Driven by an insatiable curiosity and a strong desire to learn, I naturally turned to web development. Algorithmic challenges and technical problem-solving motivate me, and I find great satisfaction in addressing complex issues through programming. Outside of development, I&apos;m passionate about 3D and modding, regularly exploring new ways to push the boundaries of technology. My atypical background allows me to bring a pragmatic and structured approach to every project I work on.</p>
                    </div>
                </div>

            <div className="flex justify-around">
                {fetchedSkills.map(skill => (
                    <Skills key={skill.id} title={skill.name || 'unnamed'} icons={skill.content} />
                ))}
            </div>   
		</div>
	)
};