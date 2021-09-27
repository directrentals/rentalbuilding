import React from "react";
import emailjs from "emailjs-com";

export const ContactUs = () => {
	function sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm("service_vg88n8b", "template_fhrii5l", form.current, "user_xEbved8R2ctCBnhDEdffV").then(
			result => {
				console.log(result.text);
			},
			error => {
				console.log(error.text);
			}
		);
		e.target.reset();
	}
	return (
		<div>
			<div className="container">
				<div onSubmit={sendEmail}>
					<div className="row pt-5 mx-auto">
						<div className="col-8 form-group mx-auto">
							<label>Subject</label>
							<input type="text" className="form-control" name="subject" placeholder="Subject" />
							<label>Name</label>
							<input type="text" className="form-control" name="name" placeholder="Your Name" />
							<label>Email</label>
							<input type="email" className="form-control" name="email" placeholder="E-mail address" />
							<label>Message</label>
							<textarea
								className="form-control"
								id=""
								cols="30"
								rows="8"
								placeholder="Your message"
								name="message"
							/>
							<input type="submit" value="Send" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
