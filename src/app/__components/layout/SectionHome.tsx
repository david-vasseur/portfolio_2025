"use client"

import { useState } from "react";
import Transitions from "../features/Transitions"

export default function Page() {

    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen);
    

    const handleClick = () => {
        setIsOpen((prev) => !prev);
        setTimeout(() => {setIsOpen((prev) => !prev)}, 1000);
    }

	return (
		<div className="flex flex-col gap-5">
			<h2 onClick={() => handleClick()}>Section Home</h2>
            <Transitions isOpen={isOpen} onClose={() => setIsOpen(false)} />
		</div>
	)
};