import React from 'react';
import { FlipWords } from '../ux/FlipWord';
import { usePage } from '@/hooks/pageContext';

function HomeTitle() {

    const words = ["FRONT", "BACK", "MERN"];

    const { currentIndex } = usePage();

    return (
        <div>
            <h1 className={`${currentIndex === 1 ? "title" : ""} title-responsive font-black text-text-1 border-b-2 border-b-accent-2`}>DAVID VASSEUR</h1>
			<h2 className="mt-2 subtitle-responsive font-black text-text-1"><FlipWords words={words} />DEVELOPPER</h2>
        </div>
    )
}

export default HomeTitle;