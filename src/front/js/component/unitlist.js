import React from "react";
import { Link, useParams } from "react-router-dom";
import { useQueryData } from "../store/data";

export const UnitList = () => {
	const params = useParams();
	const buildings = useQueryData("/api/building");
	if (buildings.loading || !buildings.data) {
		return <div>loading</div>;
	}
	return (
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Name</th>
					<th scope="col">Address</th>
				</tr>
			</thead>
			<tbody>
				{buildings.data.map((building, index) => {
					return (
						<tr key={index}>
							<td>{building.name}</td>
							<td>{building.street}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
