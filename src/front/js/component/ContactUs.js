import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../../styles/contactus.scss";

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

	return <div />;
};
