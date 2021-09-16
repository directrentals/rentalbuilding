import React from "react";
import { Link } from "react-router-dom";

export const ManageBuildingPage = () => {
	return (
		<div>
			<div>
				<ul className="nav nav-tabs" id="myTab" role="tablist">
					<li className="nav-item" role="presentation">
						<button
							className="nav-link active"
							id="home-tab"
							data-bs-toggle="tab"
							data-bs-target="#home"
							type="button"
							role="tab"
							aria-controls="home"
							aria-selected="true">
							User info
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className="nav-link"
							id="profile-tab"
							data-bs-toggle="tab"
							data-bs-target="#profile"
							type="button"
							role="tab"
							aria-controls="profile"
							aria-selected="false">
							Register Unit
						</button>
					</li>
					<li className="nav-item" role="presentation">
						<button
							className="nav-link"
							id="contact-tab"
							data-bs-toggle="tab"
							data-bs-target="#contact"
							type="button"
							role="tab"
							aria-controls="contact"
							aria-selected="false">
							Register Tenant
						</button>
					</li>
				</ul>
				<div className="tab-content" id="myTabContent">
					<div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
						...
					</div>
					<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
						...
					</div>
					<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
						...
					</div>
				</div>
			</div>
		</div>
	);
};
