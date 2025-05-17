"use client"

import { useState } from 'react'
import PopUp from './PopUp'

export default function Page() {
	const [pop, setPop] = useState(false)

	return (
		<div className="flex flex-col gap-5">
				<h1 className="abbb1 text-2xl lg:text-4xl text-[#FFC9FF] text-justify lg:text-left p-1 -translate-x-10">
					I&apos;m open to any exciting opportunities and would love to connect.
				</h1>
				<h2 className="text-3xl lg:text-5xl text-[#F7F] text-justify lg:text-left p-1 translate-x-10 font-bold shad">
					Feel free to reach out to me here!
				</h2>

				{pop && (
					<PopUp title="Thanks !!" message="Your message has been sent" onClose={() => setPop(false)} />
				)}
		</div>
	)
}
