import React from "react";
import { Link } from "react-router-dom";
import { useQueryData } from "../store/data";

export const TenantList = () => {
	const tenants = useQueryData("/api/tenant");
	if (tenants.loading || !tenants.data) {
		return <div>loading</div>;
	}
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Unit Id</th>
					{/* <th scope="col">Unit</th> */}
					<th scope="col">Name</th>
					<th scope="col">Check-In</th>
					<th scope="col">Check-Out</th>
				</tr>
			</thead>
			<tbody>
				{tenants.data.map((tenant, index) => {
					return (
						<tr key={index}>
							<td>
								<Link to={"/managetenant/" + tenant.id}>{tenant.unit.id}</Link>
							</td>
							{/* <td>{tenant.unit}</td> */}
							<td>{tenant.name}</td>
							<td>{tenant.check_in}</td>
							<td>{tenant.check_out}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
