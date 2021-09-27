import React from "react";
import "../../styles/frontpagerow.scss";

export const FrontPage = () => {
	return (
		<div className="container-row">
			<div className="section-wrapper">
				<div className="section">
					<h2>Buildings</h2>
					<p>Register your buildings.......</p>
					<div>
						<i className="far fa-building fa-5x" />
					</div>
				</div>
				<div className="section2">
					<div className="section">
						<h2>Units</h2>
						<p>Register your units.......</p>
						<div>
							<i className="fas fa-home fa-5x" />
						</div>
					</div>
					<div className="section">
						<h2>Owners</h2>
						<p>Owners can register his units and tenants......</p>
						<div>
							<img
								className="traveler-img-front"
								src={require(`/workspace/rentalbuilding/src/front/img/traveler.png`)}
							/>
						</div>
					</div>
				</div>
				<div className="section">
					<h2>Tenants</h2>
					<p>Staff can see the tenants list.......</p>
					<div>
						<img
							src="https://res.cloudinary.com/dowrygm9b/image/upload/v1573000192/icon-calculator_g9tsxn.svg"
							alt="calculator"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
