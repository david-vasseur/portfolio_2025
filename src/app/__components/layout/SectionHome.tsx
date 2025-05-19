"use client"

import Skills from "../features/Skills";
import { FaDocker, FaNode, FaReact, FaUbuntu } from "react-icons/fa6";
import { SiExpress, SiNginx, SiTailwindcss } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { IconType } from "react-icons";
import { TbBrandMongodb } from "react-icons/tb";

type FetchedSkillsProps = {
    id: number,
    name: string,
    content: IconType[]
}

export default function Page() {

    const fetchedSkills: FetchedSkillsProps[] = [
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

	return (
		<div className="flex flex-col gap-5 items-center">
			<h2>Section Home</h2>
            <div className="flex justify-around">
                {fetchedSkills.map(skill => (
                    <Skills key={skill.id} title={skill.name} icons={skill.content} />
                ))}
            </div>         
		</div>
	)
};