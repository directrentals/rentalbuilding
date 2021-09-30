import React from "react";
import { Link } from "react-router-dom";
import { useQueryData } from "../store/data";
import PropTypes from "prop-types";
import { CheckModal } from "./checkmodal";
import { CheckOutModal } from "./checkOutModal";

export const BuildingTenants = ({ id }) => {
	const tenants = useQueryData("/api/buildingtenants/" + id);
	const [checkInId, setCheckInId] = React.useState(undefined);
	const [checkOutId, setCheckOutId] = React.useState(undefined);
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
						<th> </th>
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
								<td>
									{tenant.status === "created" && (
										<button
											type="button"
											className="btn btn-success btn-sm"
											onClick={() => setCheckInId(tenant.id)}>
											Check-In
										</button>
									)}
									{tenant.status === "Checked" && (
										<button
											type="button"
											className="btn btn-danger btn-sm"
											onClick={() => setCheckOutId(tenant.id)}>
											Check-Out
										</button>
									)}
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
			<CheckModal
				id={checkInId}
				onClose={op => {
					if (op) {
						tenants.mutate(
							tenants.data.map(item => {
								if (item.id === checkInId) {
									return { ...item, ...op };
								} else {
									return item;
								}
							})
						);
					}
					setCheckInId(undefined);
				}}
			/>
			<CheckOutModal
				id={checkOutId}
				onClose={op => {
					if (op) {
						tenants.mutate(
							tenants.data.map(item => {
								if (item.id === checkOutId) {
									return { ...item, ...op };
								} else {
									return item;
								}
							})
						);
					}
					setCheckOutId(undefined);
				}}
			/>
		</div>
	);
};
BuildingTenants.propTypes = {
	id: PropTypes.string
};
