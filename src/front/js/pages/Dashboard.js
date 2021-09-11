import React from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";

export function Dashboard() {
	const auth = useAuth();

	return (
		<div>
			<h3>Dashboard</h3>
			<p>lista de buildings</p>
			<p>lista de units</p>
			<Link to="/registerbuilding">register building</Link>
			<Link to="/registerunit">Register Unit</Link>

			<button className="btn btn-outline-primary" onClick={() => auth.logout()}>
				Exit
			</button>
		</div>
	);
}
