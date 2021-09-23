import React from "react";
import { Link } from "react-router-dom";
import { useQueryData } from "../store/data";
import PropTypes from "prop-types";

export const BuildingInfo = ({ id }) => {
	const building = useQueryData("/api/buildinginfo/" + id);
	if (building.loading || !building.data) {
		return <div>loading</div>;
	}
	return (
		<div>
			<div>Name: {building.data.name}</div>
			<div>Phone: {building.data.phone}</div>
			<div>Address: {building.data.street}</div>
			<div>Address: {building.data.street2}</div>
			<div>City: {building.data.city}</div>
			<div>State: {building.data.state}</div>
			<div>Zip Code: {building.data.zipcode}</div>
			<div />
			<code>
				https://lodger.com/registerowner/
				{id}
			</code>
		</div>
	);
};
BuildingInfo.propTypes = {
	id: PropTypes.string
};
