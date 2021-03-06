import React from "react";
import { Link } from "react-router-dom";
import { useQueryData } from "../store/data";

export const BuildingList = () => {
	const buildings = useQueryData("/api/building");
	if (buildings.loading || !buildings.data) {
		return <div>loading</div>;
	}
	return (
		<table className="table space-navbar">
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
							<td>
								<Link to={"/managebuilding/" + building.id}>{building.name}</Link>
							</td>
							<td>{building.street}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};
