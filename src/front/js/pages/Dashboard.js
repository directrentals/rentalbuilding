import React from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { BuildingList } from "../component/buildinglist";
import { UnitList } from "../component/unitlist";
import { TenantList } from "../component/tenantlist";

export function Dashboard() {
	const auth = useAuth();

	return (
		<div className="container">
			<h3 className="dashboard-header">Dashboard</h3>

			<BuildingList />
			<Link to="/registerbuilding" className="btn btn-primary">
				REGISTER BUILDING
			</Link>
			<UnitList />
			<Link to="/registerunit" className="btn btn-primary">
				REGISTER UNIT
			</Link>

			<TenantList />
			<Link to="/registerunit" className="btn btn-primary">
				TENANT LIST
			</Link>
		</div>
	);
}
