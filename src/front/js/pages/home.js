import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<div className="space" />
			<div className="frontsummary">
				<p>
					Aqui va el About. Le das click en el navbar y te mueve aca. The easiest solution to register
					vacation rentals in Condominiums, HOAs and any other multi-family development to integrate with
					management and access control system.
				</p>
			</div>
			<div className="smallspace" />
			<div className="frontsummary">
				Aqui va el pricing. Click en navbar y te mueve aca.Initial charge of integration with access control,
				plus monthly or yearly fee. Please contact us for a quote.
			</div>

			<div className="smallspace" />
			<div className="frontsummary">
				Aqui va el contact. Click en navbar y te manda para aca. You can e-mail us at info@anemail.com or
				filling out the form below. TAbla de bootsrap.
			</div>
			<div>tabla de contacto etc etc etc etc</div>
		</div>
	);
};
