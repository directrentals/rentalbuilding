import React from "react";
import { Link } from "react-router-dom";
import { useQueryData } from "../store/data";

export const UnitList = () => {
	const units = useQueryData("/api/unit");
	if (units.loading || !units.data) {
		return <div>loading</div>;
	}
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Number</th>
					<th scope="col">Building</th>
					<th scope="col">Manager</th>
				</tr>
			</thead>
			<tbody>
				{units.data.map((unit, index) => {
					return (
						<tr key={index}>
							<td>
								<Link to={"/manageunit/" + unit.id}>{unit.number}</Link>
							</td>
							<td>{unit.building.name}</td>
							<td>{unit.building.manager.email}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
