"use client"

import GuestBookForm from "../features/GuestBookForm"
import { AuroraBackground } from "../ux/AuroraBackground"

export default function Page() {

	return (
		<AuroraBackground>
			<div className="flex flex-col gap-5 h-[90%]">
				<div className="flex w-[90vw] sm:w-[60vw] p-4 aspect-square md:aspect-[1.76] border-2 border-[var(--accent2)] rounded-2xl shadow-xl">
					<GuestBookForm />
				</div>
			</div>
		</AuroraBackground>
	)
};
