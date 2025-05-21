import React from 'react';
import { FlipWords } from '../ux/FlipWord';

function HomeTitle() {

    const words = ["BACK", "FRONT", "MERN"];

    return (
        <div>
            <h1 className="title-responsive font-black text-text-1 border-b-2 border-b-text-2">DAVID VASSEUR</h1>
			<h2 className="mt-2 subtitle-responsive font-black text-text-1"><FlipWords words={words} />DEVELOPPER</h2>
        </div>
    )
}

export default HomeTitle;