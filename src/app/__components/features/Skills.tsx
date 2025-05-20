import React from 'react';
import { IconType } from 'react-icons';


function Skills({ title, icons }: { title: string, icons: IconType[] }) {

    return (
        <div className=" w-[30vw] flex flex-col justify-center items-center gap-2 2xl:gap-4">
            <h3 className="p-1 xl:p-2 text-md md:text-lg 2xl:text-3xl text-text-2 font-black border-b-1 border-b-[var(--text2)] border-l-1 border-l-[var(--text2)] shadow-subtitle">{title}</h3>
            <div className="flex gap-2">
                {icons.map((Icon: IconType, index) => {
                    return (
                        <Icon key={index} className="text-[1rem] 2xl:text-[2rem] text-text-1 neon-icons" />
                    )
                })}
            </div>
        </div>
    )
}

export default Skills;