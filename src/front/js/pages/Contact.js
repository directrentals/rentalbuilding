import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../../styles/register.scss";

export const ContactUs = () => {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();

		emailjs.sendForm("service_g1o0bkn", "template_ts7ixro", form.current, "user_txZYeUkoDIXXGgcLFolct").then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			}
		);
	};

	return (
		<div className="margin-contact">
			<form ref={form} onSubmit={sendEmail}>
				<div className="contact-box">
					<h2 className="info">Contact Us</h2>
					<label>Name</label>
					<input className="size-input" type="text" name="user_name" />
					<label>Email</label>
					<input className="size-input" type="email" name="user_email" />
					<label>Message</label>
					<textarea className="size-input" name="message" />
					<input className="size-sendbtn" type="submit" value="Send" />
					<br />
					<p>You can also e-mail us directly at lodger-app@gmail.com! </p>
				</div>
			</form>
		</div>
	);
};
