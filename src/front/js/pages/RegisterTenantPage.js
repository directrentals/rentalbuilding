import React from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../store/auth";

export function RegisterTenantPage() {
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [unit_id, setUnit_id] = React.useState("");
	const [check_in, setCheck_in] = React.useState("");
	const [check_out, setCheck_out] = React.useState("");
	const [pax, setPax] = React.useState("");
	const [pax_count, setPax_count] = React.useState("");

	const history = useHistory();
	const auth = useAuth();

	React.useEffect(
		() => {
			if (auth.authToken) {
				history.push("/registertenant");
			}
		},
		[auth.authToken]
	);

	return (
		<div className="container">
			<h3>Register Tenant</h3>

			<div className="form-floating">
				<label>Name</label>
				<input
					value={name}
					onChange={ev => setName(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="Name"
				/>
			</div>

			<div className="form-floating">
				<label>E-mail</label>
				<input
					value={email}
					onChange={ev => setEmail(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="E-mail"
				/>
			</div>
			<div className="form-floating">
				<label>Unit ID</label>
				<input
					value={unit_id}
					onChange={ev => setUnit_id(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="Unit ID"
				/>
			</div>

			<div className="form-floating">
				<label>Check In</label>
				<input
					value={check_in}
					onChange={ev => setCheck_in(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="Check-In Date"
				/>
			</div>

			<div className="form-floating">
				<label>Check Out</label>
				<input
					value={check_out}
					onChange={ev => setCheck_out(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="Check-Out Date"
				/>
			</div>

			<div className="form-floating">
				<label>Additional tenants</label>
				<input
					value={pax}
					onChange={ev => setPax(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="Additional tenants"
				/>
			</div>
			<div className="form-floating">
				<label>Passenger count</label>
				<input
					value={pax_count}
					onChange={ev => setPax_count(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="How many more tenants?"
				/>
			</div>

			<button
				className="btn btn-primary mt-3"
				onClick={() => auth.registerBuilding(name, email, unit_id, check_in, check_out, pax, pax_count)}>
				Register Tenants
			</button>
		</div>
	);
}
