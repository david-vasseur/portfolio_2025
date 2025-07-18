import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

function CardButton({ arrow = false, inner1, inner2, href="#" }: { arrow: boolean, inner1: string, inner2: string, href: string }) {
	return (
		<a
			href={href}
			target="_blank"
			className="shadow-gray-800 shadow-lg sm:shadow-none card-button p-2 2xl:p-4 rounded-full font-black flex gap-2 justify-center items-center bg-gray-800/40 border-3 border-text-1 neon-icons sm:opacity-0 duration-300 transition-all"
		>
			<div className='card-button-contener inline-flex flex-col'>
				<span className="card-button-span font-black text-text-1">{inner1}</span>
				<span className="card-button-span font-black text-text-2">{inner2}</span>
			</div>
			{
				arrow && (
					<MdArrowForwardIos className="card-button-arrow hidden 2xl:block" />
				)
			}	
		</a>
	)
}

export default CardButton