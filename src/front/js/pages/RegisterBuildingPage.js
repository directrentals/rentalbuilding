import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../store/auth";

export function RegisterBuildingPage() {
	const [manager, setManager] = React.useState("");
	const [name, setName] = React.useState("");
	const [phone, setPhone] = React.useState("");
	const [street, setStreet] = React.useState("");
	const [street2, setStreet2] = React.useState("");
	const [city, setCity] = React.useState("");
	const [state, setState] = React.useState("");
	const [zipcode, setZipcode] = React.useState("");

	const history = useHistory();
	const auth = useAuth();

	React.useEffect(
		() => {
			if (auth.authToken) {
				history.push("/registerbuilding");
			}
		},
		[auth.authToken]
	);

	return (
		<div className="container">
			<h3>Register Building</h3>

			<div className="form-floating mb-3">
				<label>Manager</label>
				<input
					value={manager}
					onChange={ev => setManager(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="Manager name"
				/>
			</div>
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
				onClick={() => auth.registerBuilding(manager, name, phone, street, street2, city, state, zipcode)}>
				Register Building
			</button>
		</div>
	);
}
