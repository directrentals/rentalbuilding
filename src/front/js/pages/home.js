import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="body">
			<div>
				<img className="frontlogo" src="https://i.ibb.co/28qQfDD/lodgerlogo2.png" />
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
					<h1>Pricing</h1>
					<p>
						Contact us for a quote! If you are not satisfied after the first 30 days, we&apos;ll give you
						back 100% of your initial monthly fee.{" "}
					</p>
				</div>
			</div>
			{/* <div className="contactdiv">
				<div className="contactbox">
					<h1>Contact us!</h1>

					<div>
						<br />
						<input type="text" placeholder="Enter name" size="56" className="inputs" />
						<br />
						<br />
						<input type="text" placeholder="Enter E-Mail" size="56" className="inputs" />
						<br />
						<br />
						<input type="text" placeholder="How can we help you" className="comment-box" />
						<br />
						<br />
						<input type="submit" value="Submit" className="submit" /> <br /> <br />
						<p>Or e-mail us directly at info@lodger.com</p>
					</div>
				</div>
			</div> */}
			{/* <div className="morespace" /> */}
		</div>
	);
};
