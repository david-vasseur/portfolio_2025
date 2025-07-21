"use server";

import nodemailer from "nodemailer";
import { TServiceSchema } from '../../../../lib/schema';

export async function sendEmail(value: TServiceSchema) {
	const nom = value.name;
	const email = value.email;
	const message = value.message;

	const transporter = nodemailer.createTransport({
		host: 'smtp.gmail.com',
		port: 465,
		secure: true,
		auth: {
			user: process.env.EMAIL_USER!,
			pass: process.env.EMAIL_PASSWORD!,
		},
	});

	const mailOptions = {
		from: `"www.david-vasseur.fr" <${process.env.EMAIL_USER}>`,
		to: 'p5y4@laposte.net',
		subject: 'Demande de contact',
		text: `
			Nom: ${nom}
			E-mail: ${email}
			Message: ${message}
					`,
					html: `
			<h1 style="color: pink; font-weight: bold">Nouvelle demande de contact</h1>
			<h2 style="color: green; font-weight: bold">${nom} a fait une demande de contact</h2>
			<h2 style="color: blue; font-weight: bold">Vous pouvez le joindre via:</h2>
			<ul style="list-style: none; font-size: 20px">
				<li style="font-weight: bold">nom : ${nom}</li>
				<li style="font-weight: bold">email: ${email}</li>
			</ul>
			<h2 style="color: orange; font-weight: bold">Message:</h2>
			<p style="font-size: 20px">${message}</p>
		`
	};

	try {
		await transporter.sendMail(mailOptions);
		return { success: true };
	} catch (error) {
		console.error('Erreur email:', error);
		return { success: false };
	}
}
