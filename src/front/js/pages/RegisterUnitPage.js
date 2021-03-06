import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { useUnit } from "../store/unit";
import { BuildingUnitInfo } from "../component/BuildingUnitInfo";
import { useQueryData, useUpdateData } from "../store/data";

export const RegisterUnitPage = () => {
	const [owner, setOwner] = React.useState("");
	const [building, setBuilding] = React.useState("");
	const [building_id, setBuilding_id] = React.useState("");
	const [number, setNumber] = React.useState("");
	const params = useParams();

	const history = useHistory();
	const unit = useUnit();
	const auth = useAuth();

	// React.useEffect(
	// 	() => {
	// 		if (auth.authToken) {
	// 			history.push("/registerunit/" + params.buildingId);
	// 		}
	// 	},
	// 	[auth.authToken]
	// );

	React.useEffect(
		() => {
			if (auth.authToken) {
				history.push("/registerunit/");
			}
		},
		[auth.authToken]
	);

	return (
		<div className="container space-navbar">
			<h3>Register Unit</h3>

			{/* <div className="form-floating mb-3">
				<label>Owner</label>
				<input
					value={owner}
					onChange={ev => setOwner(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="Owner name"
				/>
			</div>*/}
			<div className="form-floating">
				<label>Building</label>

				<div>
					<BuildingUnitInfo id={params.buildingId} />
				</div>
			</div>

			<div className="form-floating">
				<label>Unit number</label>
				<input
					value={number}
					onChange={ev => setNumber(ev.target.value)}
					type="text"
					className="form-control"
					placeholder="Unit number"
				/>
			</div>

			<button className="btn btn-primary mt-3" onClick={() => unit.registerUnit(number, auth.authToken)}>
				Register Unit
			</button>
		</div>
	);
};
