import Image from 'next/image'
import React from 'react'

function Logo({ className }: { className?: string }) {
    return (
        <div className={`${className} logo-filter rounded-[100%] border-2 border-border-1 overflow-hidden`}>
            <Image className="scale-135 rounded-full" src="/logo.jpeg" alt="logo dev" width={50} height={50} />
        </div>
    )
}

export default Logo;