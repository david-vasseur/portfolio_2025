"use client"

import { useForm } from '@tanstack/react-form'
import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'
import { FiPhone } from 'react-icons/fi'
import PopUp from './PopUp'

export default function Page() {
	const [pop, setPop] = useState(false)

	const form = useForm({
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
		onSubmit: async ({ value }) => {
			if (value) setPop(true)
			console.log(value)
		},
	})

	return (
		<div className="">
				<h1 className="abbb1 text-2xl lg:text-4xl text-[#FFC9FF] text-justify lg:text-left p-1 -translate-x-10">
					I&apos;m open to any exciting opportunities and would love to connect.
				</h1>
				<h2 className="text-3xl lg:text-5xl text-[#F7F] text-justify lg:text-left p-1 translate-x-10 font-bold shad">
					Feel free to reach out to me here!
				</h2>

				<section className="flex flex-col lg:flex-row gap-5 justify-evenly items-center w-full 2xl:mt-12">
					<div className="flex flex-row lg:flex-col gap-6">
						<div className="group">
							<FaLinkedin className="text-[4rem] text-[#FFC9FF] neon-icons accc1" />
						</div>
						<div className="group">
							<FaGithub className="text-[4rem] text-[#FFC9FF] neon-icons accc2" />
						</div>
						<div className="group">
							<FiPhone className="text-[4rem] text-[#FFC9FF] neon-icons accc3" />
						</div>
					</div>

					<span className="h-full bg-[#5F606A] w-[4px]"></span>

					<div className="form-container w-[90vw] md:w-[80vw] xl:w-[55vw] aspect-square md:aspect-[1.76] border-2 border-[#6C006F] rounded-2xl shadow-2xl flex overflow-hidden relative acc">
						<div className="bord hidden md:block"></div>

						<div className="form-left w-[60%] flex items-center justify-evenly">
							<form
								onSubmit={(e) => {
									e.preventDefault()
									form.handleSubmit()
								}}
								className="contact-form w-full h-[80%] flex flex-col gap-5 justify-center items-center text-[#FFC9FF]"
							>
								<form.Field
									name="name"
									children={(field) => (
										<div className="input-container relative w-[80%]">
											{!field.state.value && (
												<label className="absolute left-2 top-5 -translate-y-[50%]">
													Your Name
												</label>
											)}
											<input
												className="input-class border-b-2 border-b-[#820085] w-full bg-[rgba(0,0,0,0.1)] p-2 shadow-xl"
												value={field.state.value}
												onChange={(e) =>
													field.handleChange(e.target.value)
												}
												onBlur={field.handleBlur}
												type="text"
											/>
										</div>
									)}
								/>
								<form.Field
									name="email"
									children={(field) => (
										<div className="input-container relative w-[80%]">
											{!field.state.value && (
												<label className="absolute left-2 top-5 -translate-y-[50%]">
													Your Email
												</label>
											)}
											<input
												className="input-class border-b-2 border-b-[#820085] w-full bg-[rgba(0,0,0,0.1)] p-2 shadow-xl"
												value={field.state.value}
												onChange={(e) =>
													field.handleChange(e.target.value)
												}
												onBlur={field.handleBlur}
												type="email"
											/>
										</div>
									)}
								/>
								<form.Field
									name="message"
									children={(field) => (
										<div className="input-container1 relative w-[80%] mt-6">
											{!field.state.value && (
												<label className="absolute left-2 top-5 -translate-y-[50%]">
													Your message
												</label>
											)}
											<textarea
												className="input-class max-h-[20vh] h-[10vh] border-b-2 border-b-[#820085] w-full bg-[rgba(0,0,0,0.1)] p-2 shadow-xl"
												value={field.state.value}
												onChange={(e) =>
													field.handleChange(e.target.value)
												}
												onBlur={field.handleBlur}
											/>
										</div>
									)}
								/>

								<button
									type="submit"
									className="neon-icons-button font-bold text-[#FFC9FF] text-xl bg-[#7E0081] py-2 px-4 rounded-2xl mt-4 border-2 border-[#6C006F] shad shadow-xl"
								>
									Send
								</button>
							</form>
						</div>

						<div className="hidden form-right w-[40%] h-full bg-transparent relative md:flex flex-col justify-center items-end">
							<div className="text-start p-8 text-[#FFC9FF] w-2/3 -translate-y-[30%] translate-x-[-20%] xl:translate-x-[-10%] 2xl:translate-x-[0]">
								<h2 className="text-lg md:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-12 translate-x-[-25%] 2xl:translate-x-[-15%] acc4">
									LEAVE ME A{' '}
									<strong className="shad text-[#F7F] text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl">
										MESSAGE
									</strong>
								</h2>
								<p className="font-bold">I will get back to you very soon</p>
							</div>
						</div>
					</div>
				</section>

				{pop && (
					<PopUp title="Thanks !!" message="Your message has been sent" onClose={() => setPop(false)} />
				)}
		</div>
	)
}
