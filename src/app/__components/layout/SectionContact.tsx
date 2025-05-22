"use client"
import GuestBookForm from "../features/GuestBookForm";

export default function Page() {

	return (
		<div className="h-[100%] grid grid-rows-[10svh_auto]">
			<div></div>
			<div className="w-[100vw] flex justify-center items-center border-2 border-[var(--accent2)] rounded-2xl shadow-xl">
				<GuestBookForm />
			</div>
		</div>
	)
};
