import React, { useEffect } from "react";
import { useBuilding } from "../store/building";
import { useHistory } from "react-router";
import { useAuth } from "../store/auth";

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
			<h3>Register Building</h3>
			<div className="form-floating">
				<label>Name</label>
				<input
					value={name}
					onChange={ev => setName(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="Building name"
				/>
			</div>

			<div className="form-floating">
				<label>Phone</label>
				<input
					value={phone}
					onChange={ev => setPhone(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="Phone number"
				/>
			</div>
			<div className="form-floating">
				<label>Street</label>
				<input
					value={street}
					onChange={ev => setStreet(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="Street name"
				/>
			</div>

			<div className="form-floating">
				<label>Street2</label>
				<input
					value={street2}
					onChange={ev => setStreet2(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="Street2"
				/>
			</div>

			<div className="form-floating">
				<label>City</label>
				<input
					value={city}
					onChange={ev => setCity(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="City"
				/>
			</div>

			<div className="form-floating">
				<label>State</label>
				<input
					value={state}
					onChange={ev => setState(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="State"
				/>
			</div>
			<div className="form-floating">
				<label>Zip Code</label>
				<input
					value={zipcode}
					onChange={ev => setZipcode(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="Zip Code"
				/>
			</div>

			<button
				className="btn btn-primary mt-3"
				disabled={building.savingBuilding}
				onClick={() =>
					building.registerBuilding(name, phone, street, street2, city, state, zipcode, auth.authToken)
				}>
				Register Building
			</button>
		</div>
	);
}
