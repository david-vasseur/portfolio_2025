import React from 'react';
import { IconType } from 'react-icons';


function Skills({ title, icons }: { title: string, icons: IconType[] }) {

    return (
        <div className=" w-[30vw] flex flex-col justify-center items-center gap-4 acc5">
            <h3 className="p-2 xs:text-xl sm:text-3xl text-[var(--text2)] font-black border-b-1 border-b-[var(--text-2)] border-l-1 border-l-[var(--text-2)]">{title}</h3>
            <div className="flex gap-2">
                {icons.map((Icon: IconType, index) => {
                    return (
                        <Icon key={index} className="text-[1rem] sm:text-[2rem] text-[#FFC9FF] neon-icons" />
                    )
                })}
            </div>
        </div>
    )
}

export default Skills;