import React from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { BuildingList } from "../component/buildinglist";
import { UnitList } from "../component/unitlist";

export function Dashboard() {
	const auth = useAuth();

	return (
		<div className="container">
			<h3 className="dashboard-header">Dashboard</h3>
			{auth.user.is_manager && (
				<div>
					<BuildingList />
					<Link to="/registerbuilding" className="btn btn-primary">
						REGISTER BUILDING
					</Link>
				</div>
			)}
			<UnitList />
			<Link to="/registerunit" className="btn btn-primary">
				REGISTER UNIT
			</Link>
		</div>
	);
}
