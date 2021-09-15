import React from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { BuildingList } from "../component/buildinglist";

export function Dashboard() {
	const auth = useAuth();

	return (
		<div>
			<h3 className="dashboard-header">Dashboard</h3>

			<div className="dashboard-links">
				<BuildingList />
				<Link to="/registerbuilding" className="btn-links">
					REGISTER BUILDING
				</Link>
				<Link to="/registerunit" className="btn-links">
					REGISTER UNIT
				</Link>
			</div>
			<div className="exitdb">
				<button className="btn btn-outline-primary" onClick={() => auth.logout()}>
					Exit
				</button>
			</div>
		</div>
	);
}
