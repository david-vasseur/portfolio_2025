import React from 'react'

function PopUp({ title, message, onClose } :{ title: string, message: string, onClose: () => void }) {
  return (
    <div className='pop-container'>
        <div className='pop-card'>
            <h2 className='pop-title text-[var(--text2)] text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl font-bold mt-10'>{title}</h2>
            <p className='pop-message'>{message}</p>
            <button className='w-[15%] h-[12%] bg-[var(--accent1)] -z-1 rounded-2xl neon-icons font-bold text-xl text-[var(--text1)] mb-10' onClick={() => onClose()}>Close</button>
        </div>
    </div>
  )
}

export default PopUp;