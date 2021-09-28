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
					<BuildingList />
					<Link to="/registerbuilding" className="btn btn-primary">
						REGISTER BUILDING
					</Link>
				</div>
			)}
			<UnitList />
			<Link to="/registerunit/" className="btn btn-primary">
				REGISTER UNIT
			</Link>

			{!auth.user.is_manager && (
				<div>
					<OwnerTenantList />
					<Link to="/registertenant" className="btn btn-primary">
						REGISTER TENANT
					</Link>
				</div>
			)}
		</div>
	);
}
