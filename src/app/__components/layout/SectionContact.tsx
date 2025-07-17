"use client"
import GuestBookForm from "../features/GuestBookForm";
import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { IconType } from "react-icons";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import ContactIcons from "../features/ContactIcons";
import { FaSyncAlt } from "react-icons/fa";


export default function Page({ isMobile }: { isMobile: boolean | undefined }) {

	type FetchedIconsProps = {
		id: number,
		name?: string,
		href?: string,
		content: IconType[]
	}

	const [isReturn, setIsReturn] = useState(false);
	console.log(isReturn);
	

	const fetchedContacts: FetchedIconsProps[] = [
		{
			id: 0,
			href: "https://www.linkedin.com/in/david-vasseur-724439306/",
			content: [FaLinkedin]
		},
		{
			id: 1,
			href: "https://github.com/david-vasseur",
			content: [FaGithub]
		},
		{
			id: 2,
			href: "https://instagram.com/david.vasseur",
			content: [FaInstagram]
		},
		{
			id: 3,
			href: "https://www.facebook.com/david.vasseur",
			content: [FaFacebook]
		}
	];

	return (
		<>
			{!isMobile && 
			<div className="h-[100%] grid grid-rows-[10svh_auto]">
				<div></div>
				<div className="w-[100vw] flex justify-center items-center">

					<div className="min-h-screen">
					{/* Hero Section */}
					<section className="text-white">
						<div className="mx-auto px-4 sm:px-6 lg:px-8">
							<div className="text-center">
								<h2 className="xl:text-5xl 2xl:text-6xl text-text-2 font-bold mb-6 leading-tight">Get In Touch</h2>
							</div>
						</div>
					</section>

					{/* Main Content */}
					<section className="py-20 md:py-10 w-[90vw]">
						<div className="mx-auto px-4 sm:px-6 lg:px-2">
						<div className="flex gap-16">
							
							{/* Contact Form */}
							<div className="form-container rounded-3xl shadow-gray-700 shadow-lg p-2 sm:p-8 lg:p-12 ">
								<GuestBookForm />
							</div>

							{/* Contact Information & Map */}
							<div className="hidden sm:block relative space-y-8 w-[20vw]">
								{isReturn === false ? (
									<div className="absolute flex flex-col justify-between h-[100%] w-[100%] rounded-3xl shadow-gray-700 shadow-lg p-8">
										<h2 className="text-3xl font-bold text-text-1 mb-8">Contact Information</h2>
									
										<div className="space-y-6">
											<div className="flex items-start gap-4">
												<div className="bg-accent-2 p-3 rounded-2xl shadow-sm shadow-gray-800 cursor-pointer group hover:-translate-y-1 hover:-translate-x-[.2rem] transition-all duration-200 hover:shadow-md">
													<Mail className="w-8 h-8 text-text-1" />
												</div>
												<div>
													<h3 className="font-semibold text-text-1 mb-1">Email</h3>
													<p className="text-text-2">david.vasseur@oclock.school</p>
													<p className="text-sm text-gray-500 mt-1">I typically respond within 24 hours</p>
												</div>
											</div>
										
										<div className="flex items-start gap-4">
											<div className="bg-accent-2 p-3 rounded-2xl shadow-sm shadow-gray-800 cursor-pointer group hover:-translate-y-1 hover:-translate-x-[.2rem] transition-all duration-200 hover:shadow-md">
												<Phone className="w-8 h-8 text-text-1" />
											</div>
											<div>
												<h3 className="font-semibold text-text-1 mb-1">Phone</h3>
												<p className="text-text-2">+33 659127367</p>
												<p className="text-sm text-gray-500 mt-1">Available Mon-Fri, 8 AM - 7 PM EST</p>
											</div>
										</div>
										
										<div className="flex items-start gap-4">
											<div className="bg-accent-2 p-3 rounded-2xl shadow-sm shadow-gray-800 cursor-pointer group hover:-translate-y-1 hover:-translate-x-[.2rem] transition-all duration-200 hover:shadow-md">
												<MapPin className="w-8 h-8 text-text-1 group-hover:text-red-500 transition-all duration-400" onClick={() => setIsReturn(!isReturn)} />
											</div>
											<div>
												<h3 className="font-semibold text-text-1 mb-1">Location</h3>
												<p className="text-text-2">Estezargues, Fr</p>
												<p className="text-sm text-gray-500 mt-1">Open to remote and on-sites</p>
											</div>
										</div>
									</div>

									{/* Social Links */}
									<div className="mt-8 pt-8 border-t border-gray-200">
										<div className="flex gap-4">
											<div className="w-[100%] gap-5 sm:gap-10 flex justify-center items-center row-start-3 xl:row-start-2 mb-4 xl:mb-0">
												{fetchedContacts.map(contact => (
														<ContactIcons key={contact.id} href={contact.href || '#'} icons={contact.content} />
													))}
											</div>
										</div>
									</div>
								</div>
								) : (
									<div className="absolute h-[100%] w-[100%] rounded-3xl shadow-gray-700 shadow-lg">
									<div className="p-6 flex justify-between items-center">
										<h2 className="text-3xl font-bold text-text-1">Find Me</h2>
										<FaSyncAlt className="w-5 h-5 text-text-2 cursor-pointer" onClick={() => setIsReturn(!isReturn)} />
									</div>
									<div className="mx-auto my-[30%] px-6 h-[80%] ">
										<iframe
											src="https://maps.google.com/maps?q=Estezargues,%20France&z=10&output=embed"
											width="100%"
											height="60%"
											allowFullScreen
											loading="lazy"
											referrerPolicy="no-referrer-when-downgrade"
											className="rounded-2xl bg-transparent border-accent-1 border-2 shadow-lg shadow-gray-800"
										/>
									</div>
								</div>
								)}
								

								{/* Map */}
								
							</div>
						</div>
						</div>
					</section>
					</div>
				</div>
			</div>}
			{isMobile && 
				<div className="h-[100%] grid grid-rows-[10svh_75svh_1fr]">
					<div></div>
					<div className="flex flex-col justify-center items-center">
						<h2 className="xl:text-5xl 2xl:text-6xl text-text-2 font-bold mb-6 leading-tight">Get In Touch</h2>
						<div className="form-container rounded-3xl shadow-gray-700 shadow-lg p-2 sm:p-8 lg:p-12 ">
							<GuestBookForm />
						</div>
					</div>
					<div className="pb-2">
						<div className="flex gap-4">
							<div className="w-[100%] gap-5 sm:gap-10 flex justify-center items-center row-start-3 xl:row-start-2 mb-4 xl:mb-0">
								{fetchedContacts.map(contact => (
										<ContactIcons key={contact.id} href={contact.href || '#'} icons={contact.content} />
									))}
							</div>
						</div>
					</div>
				</div>
			}
		</>
	)
};
