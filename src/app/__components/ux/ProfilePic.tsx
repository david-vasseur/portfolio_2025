import Image from 'next/image'
import React from 'react'

function ProfilePic() {
    return (
        <div className="rotate-[5deg] cont-pic hidden xl:block">
            <Image className="rounded-[50%] profil-pic" src={"/mail.oclock.png"} alt="profile picture" height={400} width={400} style={{ backgroundColor: 'transparent' }} />
        </div>
    )
}

export default ProfilePic