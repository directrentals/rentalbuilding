import React from "react";
import { useAuth } from "../store/auth";
import { Link, useParams } from "react-router-dom";
import { BuildingList } from "../component/buildinglist";
import { UnitList } from "../component/unitlist";
import { OwnerTenantList } from "../component/OwnerTenantList";
import PropTypes from "prop-types";
import { TenantList } from "../component/tenantlist";

export function Dashboard() {
	const auth = useAuth();
	const params = useParams();

	return (
		<div className="container space-navbar">
			<h3 className="dashboard-header">Dashboard</h3>
			{auth.user.is_manager && (
				<div>
					<h1>Building List</h1>
					<BuildingList />
					<Link to="/registerbuilding" className="btn btn-primary">
						REGISTER BUILDING
					</Link>
				</div>
			)}
			<br /> <br />
			{!auth.user.is_manager && (
				<div>
					<h1>Units</h1>
					<UnitList />
					<Link to="/registerunit/" className="btn btn-primary">
						REGISTER UNIT
					</Link>{" "}
					<br /> <br />
					<h1>Tenants</h1>
					<OwnerTenantList />
					<Link to="/registertenant" className="btn btn-primary">
						REGISTER TENANT
					</Link>
				</div>
			)}
		</div>
	);
}
