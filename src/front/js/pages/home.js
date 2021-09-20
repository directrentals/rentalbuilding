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
					<h1>How much?</h1>
					<p>
						Contact us for a quote! If you are not satisfied after the first 30 days, we&apos;ll give you
						back 100% of your initial monthly fee.{" "}
					</p>
				</div>

				<div className="frontbox contact">
					<h1>Contact us!</h1>

					<div>
						<br />
						<textarea rows="1" cols="30">
							Full name
						</textarea>{" "}
						<br />
						<br />
						<textarea rows="1" cols="30">
							E-mail
						</textarea>
						<br />
						<br />
						<textarea rows="4" cols="30">
							How can we help you?
						</textarea>
						<br />
						<br />
						<input type="submit" value="Submit" className="submit" /> <br /> <br />
						<p>Or e-mail us directly at info@lodger.com</p>
					</div>
				</div>
			</div>
			<div className="morespace" />
		</div>
	);
};
