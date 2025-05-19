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
		<div className="flex flex-col gap-5 items-center justify-evenly h-[90%]">
			<HomeTitle />
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <p className="w-[90vw] sm:w-[60vw] text-xs sm:text-xl text-[var(--text1)] acc2 text-justify">Originally from Paris and now living in the Gard region, I come from a rich and diverse background in commerce. I climbed the ladder from salesperson to commercial director and site manager, discovering along the way a deep passion for computing and logic. Driven by an insatiable curiosity and a strong desire to learn, I naturally turned to web development. Algorithmic challenges and technical problem-solving motivate me, and I find great satisfaction in addressing complex issues through programming. Outside of development, I&apos;m passionate about 3D and modding, regularly exploring new ways to push the boundaries of technology. My atypical background allows me to bring a pragmatic and structured approach to every project I work on.</p>
                <div className="flex sm:flex-col gap-4">
                    {fetchedContacts.map(contact => (
                        <ContactIcons key={contact.id} href={contact.href || '#'} icons={contact.content} />
                    ))}
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