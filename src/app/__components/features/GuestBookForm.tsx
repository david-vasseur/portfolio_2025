import { useAppForm } from '@/lib/form';
import { formOptions } from '@tanstack/react-form';
import React from 'react';

function GuestBookForm({ isMobile }: { isMobile: boolean | undefined }) {

    interface IMessage {
        name: string
        email: string
        message: string
    }
    
    const defaultMessage: IMessage = { name: '', email: '', message: '' }

    const formOpts = formOptions({
    defaultValues: defaultMessage,
    })

    const form = useAppForm({
        ...formOpts,
        onSubmit: async ({ value }: { value: IMessage }) => {
        console.log(value)
        },
    })


    

    return (
        <>
            <div className='bord hidden md:block'></div>
            {isMobile && (
                <h2 className="text-[var(--text2)] font-black text-2xl text-center pt-[2rem]">LEAVE ME A MESSAGE</h2>
            )}
            <form
                className={`h-[90%] contact-form ${isMobile ? "pt-0 justify-center gap-10" : "pt-[8rem] justify-end gap-12" } pb-0 3xl:pb-[4rem]  flex flex-col overflow-hidden relative w-[90%] sm:w-[50%] items-center`}
                onSubmit={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    form.handleSubmit()
                }}
            >
                <form.AppField name='name'>
                    {(field) => (
                        <field.Input cl="input-class" placeholder="Your Name" type="text" />
                    )}
                </form.AppField>
                <form.AppField name="email">
                    {(field) => (
                        <field.Input cl="input-class" placeholder="Your Email" type="email" />
                    )}
                </form.AppField>
                <form.AppField name="message">
                    {(field) => (
                        <field.TextArea placeholder="Your message" />
                    )}
                </form.AppField>
                <form.AppForm>
                    {/* <form.Button inner1="Submit" inner2="your message" arrow={false} /> */}
                    <form.Button2 isMobile={isMobile} text1="Submit" text2='Your message' text3='Submit' type='button' size='lg' responsive="lg" />
                </form.AppForm>
            </form>
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