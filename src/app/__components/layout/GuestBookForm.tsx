import React from 'react';
import ContactForm from '../features/form/ContactForm';

function GuestBookForm({ isMobile }: { isMobile: boolean | undefined }) {

    return (
        <>
            <div className='bord hidden md:block'></div>
            {isMobile && (
                <h2 className="text-[var(--text2)] font-black text-2xl text-center pt-[2rem]">LEAVE ME A MESSAGE</h2>
            )}
            <ContactForm isMobile={isMobile} />
            <div className='hidden form-right w-[40%] h-full bg-transparent relative md:flex flex-col justify-center items-end'>
                <div className='hidden md:block text-start p-8 text-[var(--text1)] w-2/3 xl:translate-x-[-10%] 2xl:translate-x-[0]'>
                    <h2 className="xl:text-5xl 2xl:text-6xl font-black mb-12 2xl:translate-x-[-15%] acc4">LEAVE ME A <strong className='shad text-[var(--text2)]'>MESSAGE</strong></h2>
                    <p className='font-black'>I will get back to you very soon</p>
                </div>
            </div> 
        </>
    )
}

export default GuestBookForm;