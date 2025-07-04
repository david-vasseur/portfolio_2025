import React from 'react';
import { FlipWords } from '../ux/FlipWord';
import { usePageIndexStore } from '@/hooks/store/pageIndexStore';

function HomeTitle() {

    const words = ["FRONT", "BACK", "MERN"];

    const { currentIndex } = usePageIndexStore();

    return (
        <div>
            <h1 className={`${currentIndex === 1 ? "title" : ""} title-responsive font-black text-text-1 border-b-2 border-b-accent-2`}>DAVID VASSEUR</h1>
			<h2 className="mt-2 subtitle-responsive font-black text-text-1"><FlipWords words={words} />DEVELOPPER</h2>
        </div>
    )
}

export default HomeTitle;