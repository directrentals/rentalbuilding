import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import injectContext from "./store/appContext";

import { RegisterUser } from "./pages/RegisterUser";
import { LoginUser } from "./pages/LoginUser";
import { Dashboard } from "./pages/Dashboard";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { SecurePage } from "./component/SecurePage";
import { ManageBuildingPage } from "./pages/ManageBuildingPage";
import { RegisterBuildingPage } from "./pages/RegisterBuildingPage";
import { RegisterOwnerPage } from "./pages/RegisterOwnerPage";
import { RegisterTenantPage } from "./pages/RegisterTenantPage";
import { CheckinTenantPage } from "./pages/CheckinTenantPage";
import { RegisterUnitPage } from "./pages/RegisterUnitPage";
import { ManageUnitPage } from "./pages/ManageUnitPage";
// import { ContactUs } from "./pages/Contact"

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<Navbar />
				<ScrollToTop>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						{/* <Route exact path="/contact">
							<ContactUs />
						</Route> */}

						<Route exact path="/register">
							<RegisterUser />
						</Route>

						<Route exact path="/login">
							<LoginUser />
						</Route>

						<Route exact path="/dashboard">
							<SecurePage>
								<Dashboard />
							</SecurePage>
						</Route>

						<Route exact path="/registerbuilding">
							<SecurePage>
								<RegisterBuildingPage />
							</SecurePage>
						</Route>

						<Route exact path="/registerunit/:buildingId">
							<SecurePage>
								<RegisterUnitPage />
							</SecurePage>
						</Route>

						<Route exact path="/managebuilding/:id">
							<SecurePage>
								<ManageBuildingPage />
							</SecurePage>
						</Route>

						<Route exact path="/manageunit/:id">
							<SecurePage>
								<ManageUnitPage />
							</SecurePage>
						</Route>

						<Route exact path="/checkintenant/:id">
							<SecurePage>
								<CheckinTenantPage />
							</SecurePage>
						</Route>

						<Route exact path="/registertenant">
							<SecurePage>
								<RegisterTenantPage />
							</SecurePage>
						</Route>

						<Route exact path="/registerowner/:building_id">
							<RegisterOwnerPage />
						</Route>

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
