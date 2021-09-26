import React from "react";
import emailjs from "emailjs-com";

export const ContactUs = () => {
	const form = useRef();
  
	const sendEmail = (e) => {
	  e.preventDefault();
  
	  emailjs.sendForm('gmail', 'template_fhrii5l', form.current, 'user_xEbved8R2ctCBnhDEdffV')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
		e.target.reset()
	};
  
	return (
	  <form ref={form} onSubmit={sendEmail}>
		<label>Name</label>
		<input type="text" className="form-control" name="name" placeholder="Subject" />
		<input type="text" className="form-control" name="name" placeholder="Your Name" />
		<label>Email</label>
		<input type="email" className="form-control" name="email" placeholder="E-mail address" />
		<label>Message</label>
		<textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" />
		<input type="submit" value="Send" />
	  </form>
	);
  };
