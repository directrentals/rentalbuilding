import React from "react";
import { Link } from "react-router-dom";

export const ManageBuildingPage = () => {
	return (
		<div>
			<div>Manage Building</div>
			<Link to="/registerunit" className="btn-links">
				REGISTER UNIT
			</Link>
			<Link to="/registertenant" className="btn-links">
				REGISTER TENANT
			</Link>
		</div>
	);
};
