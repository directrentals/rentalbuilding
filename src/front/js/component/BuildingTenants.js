import React from "react";
import { Link } from "react-router-dom";
import { useQueryData } from "../store/data";
import PropTypes from "prop-types";

export const BuildingTenants = ({ id }) => {
	const tenants = useQueryData("/api/buildingtenants/" + id);
	if (tenants.loading || !tenants.data) {
		return <div>loading</div>;
	}
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th>Tenant Name</th>
						<th>Unit</th>
						<th>Check In</th>
						<th>Check Out</th>
						<th>Pax</th>
						<th>Fob</th>
						<th>Status</th>
					</tr>
				</thead>
				<tbody>
					{tenants.data.map((tenant, index) => {
						return (
							<tr key={index}>
								<td>{tenant.name}</td>
								<td>{tenant.unit.number}</td>
								<td>{tenant.check_in}</td>
								<td>{tenant.check_out}</td>
								<td>{tenant.pax}</td>
								<td>{tenant.fob}</td>
								<td>{tenant.status}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
BuildingTenants.propTypes = {
	id: PropTypes.string
};
