import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../store/auth";

export function RegisterUnitPage() {
	const [owner, setOwner] = React.useState("");
	const [building, setBuilding] = React.useState("");
	const [number, setNumber] = React.useState("");

	const history = useHistory();
	const auth = useAuth();

	React.useEffect(
		() => {
			if (auth.authToken) {
				history.push("/registerunit");
			}
		},
		[auth.authToken]
	);


	return (
		<div className="container">
			<h3>Register Unit</h3>

			<div className="form-floating mb-3">
				<label>Owner</label>
				<input
					value={owner}
					onChange={ev => setOwner(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="Owner name"
				/>
			</div>
			<div className="form-floating">
				<label>Building</label>
				<input
					value={building}
					onChange={ev => setBuilding(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="Building name"
				/>
			</div>

			<div className="form-floating">
				<label>Unit number</label>
				<input
					value={number}
					onChange={ev => setNumber(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="Unit number"
				/>
			</div>

			<button className="btn btn-primary mt-3" onClick={() => registerUnit(owner, building, number)}>
				Register Unit
			</button>
		</div>
	);
}
