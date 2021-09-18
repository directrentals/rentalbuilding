import React from "react";
import { Link } from "react-router-dom";

export const ManageBuildingPage = () => {
	const [selectedTab, setSelectedTab] = React.useState("building");
	return (
		<div className="container">
			<div>
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item" role="presentation">
						<button
							className={"nav-link" + (selectedTab === "building" ? " active" : "")}
							id="home-tab"
							type="button"
							role="tab"
							onClick={() => setSelectedTab("building")}>
							Building
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className={"nav-link" + (selectedTab === "units" ? " active" : "")}
							id="profile-tab"
							type="button"
							role="tab"
							onClick={() => setSelectedTab("units")}>
							Units
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className={"nav-link" + (selectedTab === "tenants" ? " active" : "")}
							id="contact-tab"
							type="button"
							role="tab"
							onClick={() => setSelectedTab("tenants")}>
							Tenants
						</button>
					</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<div
						className={"tab-pane fade" + (selectedTab === "building" ? " show active" : "")}
						id="home"
						role="tabpanel"
						aria-labelledby="home-tab">
						Building
					</div>
					<div
						className={"tab-pane fade" + (selectedTab === "units" ? " show active" : "")}
						id="profile"
						role="tabpanel"
						aria-labelledby="profile-tab">
						Units
					</div>
					<div
						className={"tab-pane fade" + (selectedTab === "tenants" ? " show active" : "")}
						id="contact"
						role="tabpanel"
						aria-labelledby="contact-tab">
						Tenants
					</div>
				</div>
			</div>
		</div>
	);
};
