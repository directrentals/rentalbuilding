import React from "react";
import { Link } from "react-router-dom";

export const ManageUnitPage = () => {
	const [selectedTab, setSelectedTab] = React.useState("unit");
	return (
		<div className="container space-navbar">
			<div>
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item" role="presentation">
						<button
							className={"nav-link" + (selectedTab === "unit" ? " active" : "")}
							id="home-tab"
							type="button"
							role="tab"
							onClick={() => setSelectedTab("unit")}>
							Unit
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
						className={"tab-pane fade" + (selectedTab === "unit" ? " show active" : "")}
						id="home"
						role="tabpanel"
						aria-labelledby="home-tab">
						Unit
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
