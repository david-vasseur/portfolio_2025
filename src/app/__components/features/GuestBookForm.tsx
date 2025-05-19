import { useAppForm } from '@/lib/form'
import { formOptions } from '@tanstack/react-form'
import React from 'react'

function GuestBookForm() {

    interface IMessage {
        name: string
        email: string
        rate: string
        message: string
    }
    
    const defaultMessage: IMessage = { name: '', email: '', rate: '1', message: '' }

    const formOpts = formOptions({
    defaultValues: defaultMessage,
    })

    const form = useAppForm({
        ...formOpts,
        onSubmit: async ({ value }: { value: IMessage }) => {
        console.log(value)
        },
    })

    const fetchedStars = [
        { value: "1", label: "★" },
        { value: "2", label: "★★" },
        { value: "3", label: "★★★" },
        { value: "4", label: "★★★★" },
        { value: "5", label: "★★★★★" }
    ]
    

    return (
        <>
            <form
                className="flex flex-col justify-evenly overflow-hidden relative w-[50%] items-center"
                onSubmit={(e) => {
                e.preventDefault()
                e.stopPropagation()
                form.handleSubmit()
                }}
            >
                <form.AppField
                    
                    name="name"
                    children={(field) => (
                        <field.Input placeholder="Your Name" type="text" />
                    )}
                />
                <form.AppField
                    
                    name="email"
                    children={(field) => (
                        <field.Input placeholder="Your Email" type="email" />
                    )}
                />
                <form.AppField
                    
                    name="rate"
                    children={(field) => (
                        <field.Select options={fetchedStars} />
                    )}
                />
                <form.AppForm>
                    <form.Button label="Submit" />
                </form.AppForm>
            </form>
            <div className='hidden form-right w-[40%] h-full bg-transparent relative md:flex flex-col justify-center items-end'>
                <div className='text-start p-8 text-[var(--text1)] w-2/3 -translate-y-[30%] translate-x-[-20%] xl:translate-x-[-10%] 2xl:translate-x-[0]'>
                    <h2 className="text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-12 translate-x-[-25%] 2xl:translate-x-[-15%] acc4">LEAVE ME A <strong className='shad text-[var(--text2)] text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl'>MESSAGE</strong></h2>
                    <p className='font-bold'>I will get back to you very soon</p>
                </div>
            </div> 
        </>
    )
}

export default GuestBookForm;