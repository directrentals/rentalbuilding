import React from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { BuildingList } from "../component/buildinglist";

export function Dashboard() {
	const auth = useAuth();

	return (
		<div className="container">
			<h3 className="dashboard-header">Dashboard</h3>

			<BuildingList />
			<Link to="/registerbuilding" className="btn btn-primary">
				REGISTER BUILDING
			</Link>
			<Link to="/registerunit" className="btn btn-primary">
				REGISTER UNIT
			</Link>
		</div>
	);
}
