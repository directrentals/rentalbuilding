import React, { useEffect } from "react";
import { useBuilding } from "../store/building";
import { useHistory } from "react-router";
import { useAuth } from "../store/auth";
import "../../styles/register.scss";

export function RegisterBuildingPage() {
	const [name, setName] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [street, setStreet] = React.useState("");
	const [street2, setStreet2] = React.useState("");
	const [city, setCity] = React.useState("");
	const [state, setState] = React.useState("");
	const [zipcode, setZipcode] = React.useState("");

	const auth = useAuth();
	const building = useBuilding();
	const history = useHistory();

	React.useEffect(
		() => {
			if (building.buildingSaved) {
				history.push("/managebuilding/" + building.building.id);
			}
		},
		[building.buildingSaved]
	);

	return (
		<div className="container">
			<form className="sub-form">
				<div className="input-contain">
					<div className="circle circle-quill">
						<i className="icon-circle far fa-building fa-2x" />
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
					<h2 className="info">Register Building</h2>
					<input
						type="text"
						id="building"
						placeholder="building name"
						maxLength="100"
						value={name}
						onChange={ev => setName(ev.target.value)}
					/>

					<input
						type="text"
						placeholder="phone number"
						value={phone}
						onChange={ev => setPhone(ev.target.value)}
					/>
					<input
						value={street}
						onChange={ev => setStreet(ev.target.value)}
						type="text"
						placeholder="Street name"
					/>
					<input
						value={street2}
						onChange={ev => setStreet2(ev.target.value)}
						type="text"
						placeholder="Street2"
					/>
					<input value={city} onChange={ev => setCity(ev.target.value)} type="text" placeholder="City" />
					<input value={state} onChange={ev => setState(ev.target.value)} type="text" placeholder="State" />
					<input
						value={zipcode}
						onChange={ev => setZipcode(ev.target.value)}
						type="text"
						placeholder="Zip Code"
					/>

					<div className="allsub">
						<button
							className="submit"
							disabled={building.savingBuilding}
							onClick={() =>
								building.registerBuilding(
									name,
									phone,
									street,
									street2,
									city,
									state,
									zipcode,
									auth.authToken
								)
							}>
							Submit Building
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
			</form>

		
		</div>
	);
}
