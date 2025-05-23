import React from 'react';
import { IconType } from 'react-icons';


function Skills({ title, icons }: { title: string, icons: IconType[] }) {

    return (
        <div className="py-4 w-[30vw] flex flex-col justify-center items-center gap-2 2xl:gap-4">
            <h3 className="p-1 px-2 xl:p-2 text-md md:text-lg 2xl:text-3xl text-text-2 font-black shadow-subtitle rounded-bl-[15px]">{title}</h3>
            <div className="flex gap-2 3xl:gap-3">
                {icons.map((Icon: IconType, index) => {
                    return (
                        <Icon key={index} className="mt-2 text-[1rem] xl:text-[1.5rem] 2xl:text-[2rem] skill3xl text-text-1 neon-icons" />
                    )
                })}
            </div>
        </div>
    )
}

export default Skills;