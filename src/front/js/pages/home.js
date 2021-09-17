import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="space" />
			<div>
				<img className="frontlogo" src="https://i.ibb.co/nbtVNcG/lodgerlogo.png" />
			</div>
			<div className="frontcontent">
				<div className="frontbox">
					<h1>What we do</h1>
					<p>
						Lodger provides the easiest solution to property owners and management staff to register
						short-term tenants for access in Condominiums, HOAs, and other multi-family developments.
					</p>
				</div>

				<div className="frontbox">
					<h1>How much?</h1>
					<p>
						Contact us for a quote! If you are not satisfied after the first 30 days, we&apos;ll give you
						back 100% of your initial monthly fee.{" "}
					</p>
				</div>

				<div className="frontbox">testestestsetetestsestestsetset</div>
			</div>
		</div>
	);
};
