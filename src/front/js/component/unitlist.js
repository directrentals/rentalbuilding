import React from "react";
import { Link, useParams } from "react-router-dom";
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
					<th>Number</th>
					<th>Building</th>
					<th>Manager</th>
				</tr>
			</thead>
			<tbody>
				{units.data.map((unit, index) => {
					return (
						<tr key={index}>
							<td>{unit.number}</td>
							<td>{unit.building.name}</td>
							<td>{unit.building.manager.email}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
