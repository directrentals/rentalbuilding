import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../store/auth";
import "../../styles/register.scss";
import { useQueryData, useUpdateData } from "../store/data";
import emailjs from "emailjs-com";

export function RegisterTenantPage() {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [unit_id, setUnit_id] = React.useState("");
	const [check_in, setCheck_in] = React.useState("");
	const [check_out, setCheck_out] = React.useState("");
	const [pax, setPax] = React.useState("");

	const history = useHistory();
	const auth = useAuth();
	const tenant = useUpdateData("/api/tenant");

	React.useEffect(
		() => {
			if (tenant.updated) {
				const templateParams = {
					name: name,
					email: email,
					subject: "Lodger access to building",
					message:
						"Hello! We are excited to have you as a tenant! Upon arrival, please pass by the Fron Desk to complete the registration process. Enjoy your stay!"
				};

				emailjs.send("service_9gyr8mr", "template_h0j8f8p", templateParams, "user_xEbved8R2ctCBnhDEdffV").then(
					function(response) {
						console.log("SUCCESS!", response.status, response.text);
						history.push("/dashboard");
					},
					function(err) {
						console.log("FAILED...", err);
					}
				);
			}
		},
		[tenant.updated]
	);

	const units = useQueryData("/api/unit");
	if (units.loading || !units.data) {
		return <div>loading</div>;
	}
	return (
		<div className="container space-navbar center">
			<div className="form sub-form regist-form">
				<div className="input-contain">
					<div className="circle circle-quill">
						<img
							className="traveler-img"
							src={require(`/workspace/rentalbuilding/src/front/img/traveler.png`)}
						/>
					</div>
					<div className="circle circle-paper quill">
						<svg
							className="paper"
							x="0"
							y="0"
							width="25.1"
							height="25.1"
							viewBox="0 0 25.1 25.1"
							enableBackground="new 0 0 25.125 25.125"
							xmlSpace="preserve">
							<path
								fill="#b1dbd3"
								d="M24 2.1C23.5 2.3 1.2 10.2 0.8 10.3c-0.4 0.1-0.5 0.5 0 0.6 0.5 0.2 5 2 5 2H5.8l3 1.2c0 0 14.2-10.4 14.4-10.6 0.2-0.1 0.4 0.1 0.3 0.3 -0.1 0.2-10.3 11.2-10.3 11.2 0 0 0 0 0 0l-0.6 0.7 0.8 0.4c0 0 6.1 3.3 6.5 3.5 0.4 0.2 0.9 0 1-0.4 0.1-0.6 3.7-16.1 3.8-16.4C24.7 2.3 24.4 2 24 2.1zM8.7 21.2c0 0.3 0.2 0.4 0.4 0.2 0.3-0.3 3.7-3.4 3.7-3.4l-4.2-2.2V21.2z"
							/>
						</svg>
					</div>
					<h2 className="info">Register Tenant</h2>

					<select
						id="building"
						className="form-select"
						value={unit_id}
						onChange={ev => setUnit_id(ev.target.value)}>
						<option selected>Select unit</option>
						{units.data.map((unit, index) => {
							return (
								<option key={index} value={unit.id}>
									{unit.number}
								</option>
							);
						})}
					</select>

					<input value={name} onChange={ev => setName(ev.target.value)} type="text" placeholder="Full Name" />

					<input
						value={email}
						onChange={ev => setEmail(ev.target.value)}
						type="text"
						placeholder="Tenant's E-mail"
					/>

					<input
						value={check_in}
						onChange={ev => setCheck_in(ev.target.value)}
						placeholder="Check-In Date"
						type="text"
						onFocus={e => {
							e.currentTarget.type = "date";
							e.currentTarget.focus();
						}}
					/>

					<input
						id="date"
						value={check_out}
						onChange={ev => setCheck_out(ev.target.value)}
						type="text"
						onFocus={e => {
							e.currentTarget.type = "date";
							e.currentTarget.focus();
						}}
						placeholder="Check-Out Date"
					/>

					<input
						value={pax}
						onChange={ev => setPax(ev.target.value)}
						type="text"
						placeholder="Additional tenants"
					/>

					<div className="allsub">
						<button
							className="submit"
							onClick={() =>
								tenant.updateData({
									name: name,
									email: email,
									unit_id: unit_id,
									check_in: check_in,
									check_out: check_out,
									pax: pax
								})
							}>
							Register Tenants
						</button>
						<div className="submit-under" />
					</div>

					<svg
						className="loader"
						x="0px"
						y="0px"
						width="55px"
						height="55px"
						viewBox="0 0 55 55"
						enableBackground="new 0 0 55 55"
						xmlSpace="preserve">
						<circle
							fill="none"
							strokeLinecap="round"
							stroke="#B29EAC"
							strokeWidth="2"
							strokeMiterlimit="10"
							cx="27.583"
							cy="27.334"
							r="26.583"
						/>
					</svg>
					<svg
						className="loader2"
						x="0px"
						y="0px"
						width="55px"
						height="55px"
						viewBox="0 0 55 55"
						enableBackground="new 0 0 55 55"
						xmlSpace="preserve">
						<circle
							fill="none"
							strokeLinecap="round"
							stroke="#B29EAC"
							strokeWidth="2"
							strokeMiterlimit="10"
							cx="27.583"
							cy="27.334"
							r="26.583"
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}
