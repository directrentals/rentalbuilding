import React from "react";
import { Link } from "react-router-dom";
import { useQueryData } from "../store/data";
import PropTypes from "prop-types";

export const BuildingUnits = ({ id }) => {
	const units = useQueryData("/api/buildingunits/" + id);
	if (units.loading || !units.data) {
		return <div>loading</div>;
	}
	return (
		<div>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Number</th>
						<th scope="col">Owner</th>
					</tr>
				</thead>
				<tbody>
					{units.data.map((unit, index) => {
						return (
							<tr key={index}>
								<td>{unit.number}</td>
								<td>{unit.owner.email}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};
BuildingUnits.propTypes = {
	id: PropTypes.string
};
