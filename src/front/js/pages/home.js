import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import { FrontPageCardsRow } from "../component/FrontPageCardsRow";
import { ContactUs } from "../pages/Contact";
import { Footer } from "../component/footer";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="body">
			<div>
				<img className="frontlogo" src="https://i.ibb.co/28qQfDD/lodgerlogo2.png" />
			</div>
			<div className="fullcontent">
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
							Contact us for a quote! If you are not satisfied after the first 30 days, we&apos;ll give
							you back 100% of your initial monthly fee.{" "}
						</p>
					</div>
				</div>
				{/* <div>
				<FrontPageCardsRow />
			</div> */}
				<ContactUs />
			</div>
			<Footer />
		</div>
	);
};
