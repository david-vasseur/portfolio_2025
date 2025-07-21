import { useAppForm } from '@/lib/form';
import { formOptions } from '@tanstack/react-form';
import React, { useState } from 'react';
import { serviceSchema, TServiceSchema } from '../../../../lib/schema';
import { sendEmail } from './ContactForm.action';
import Modal from '../Modal';

function ContactForm({ isMobile }: { isMobile: boolean | undefined }) {

    const [isModalOpen, setIsModalOpen] = useState(false);
	const [modalContent, setModalContent] = useState<React.ReactNode>(null);
    
    const defaultMessage: TServiceSchema = { name: '', email: '', message: '' }

    const formOpts = formOptions({
    defaultValues: defaultMessage,
    })

    const form = useAppForm({
        ...formOpts,
        validators: {
            onChange: serviceSchema,
        },
        onSubmit: async ({ value }: { value: TServiceSchema }) => {

            const response = await sendEmail(value);

            if (!response) {
                setModalContent("An error occured");
            } else {
                setModalContent(<>
                    Your message has been sent.<br />
                    <br />
                    I&apos;ll get back to you shortly.<br />
                    <br />
                    Thank you!
                </>);
                form.reset();
            }

            setIsModalOpen(true)
        },
    })


    

    return (
        <>
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
                    <form.Button2 isMobile={isMobile} text1="Submit" text2='Your message' text3='Submit' type='button' size='base' responsive="xs" />
                </form.AppForm>
            </form>
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<p className="text-center cursor-pointer" onClick={() => setIsModalOpen(false)}>{modalContent}</p>
			</Modal>
        </>
    )
}

export default ContactForm;