import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="space" />
			<div>
				<img className="frontlogo" src="https://i.ibb.co/nbtVNcG/lodgerlogo.png" />
			</div>
			<div className="container-box">
				<div className="card border-dark mb-3 box">
					<div className="card-header">What we do</div>
					<div className="card-body text-dark">
						<p className="card-text">
							Provide the easiest solution to property owners and management staff registering vacation
							rentals in Condominiums, HOAs, and other multi-family developments.
						</p>
					</div>
				</div>

				<div className="card border-dark mb-3 box">
					<div className="card-header">Pricing</div>
					<div className="card-body text-dark">
						<p className="card-text">
							Contact us for a quote! If you are not satisfied after the first 30 days, we&apos;ll give
							you back 100% of your initial monthly fee.
						</p>
					</div>
				</div>
			</div>
			<form className="form">
				<h2 className="h2">CONTACT US</h2>
				<p type="Name:">
					<input className="input" placeholder="Write your name here.." />
				</p>
				<p type="Email:">
					<input className="input" placeholder="Let us know how to contact you back.." />
				</p>
				<p type="Message:">
					<input className="input" placeholder="What would you like to tell us.." />
				</p>
				<button className="button">Send Message</button>
				<div className="divcont">
					<span className="fa fa-phone" />
					001 1023 567
					<span className="fa fa-envelope-o" /> contact@company.com
				</div>
			</form>
		</div>
	);
};
