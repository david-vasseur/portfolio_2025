import Link from 'next/link';
import React from 'react';
import { IconType } from 'react-icons';

function ContactIcons({ icons, href }: { icons: IconType[], href: string }) {
    return (
        <div className="flex sm:flex-col gap-4">
            {icons.map((Icon: IconType , index) => (
                <div key={index} className="group">
                    <Link href={href} target="_blank" rel="noopener noreferrer">
                        <Icon className="text-[4rem] text-[var(--text1)] neon-icons" />
                    </Link>
                    <Icon className="text-[4rem] reflect-icons transition-all duration-[.5s] ease-in-out group-hover:scale-[1.05] group-hover:text-[var(--text2)]" />
                </div>
            ))}
        </div>
    )
}

export default ContactIcons;