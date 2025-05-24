import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

function CardButton({ arrow = false, inner1, inner2 }: { arrow: boolean, inner1: string, inner2: string }) {
	return (
		<button 
			className="card-button p-2 2xl:p-4 rounded-full font-black flex gap-2 justify-center items-center bg-gray-800/40 border-3 border-text-1 neon-icons"
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
		</button>
	)
}

export default CardButton