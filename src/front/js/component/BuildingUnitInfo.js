import React from "react";
import { Link } from "react-router-dom";
import { useQueryData } from "../store/data";
import PropTypes from "prop-types";

export const BuildingUnitInfo = ({ id }) => {
	const building = useQueryData("/api/buildinginfo/" + id);
	if (building.loading || !building.data) {
		return <div>loading</div>;
	}
	return <div>{building.data.name}</div>;
};
BuildingUnitInfo.propTypes = {
	id: PropTypes.string
};
