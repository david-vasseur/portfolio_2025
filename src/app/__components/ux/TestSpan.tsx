import { div } from 'motion/react-client';
import React from 'react';

type SpanProps = {
    text: string
}

function TestSpan() {
    return (
        <div className='test-span-contener inline-flex flex-col'>
            <span className="test-span font-black text-text-1 p-0">Get Started</span>
            <span className="test-span font-black text-text-1 p-0">Download CV</span>
        </div>
        
    )
}

export default TestSpan