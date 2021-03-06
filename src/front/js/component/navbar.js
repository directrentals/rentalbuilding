import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../store/auth";

export const Navbar = () => {
	const auth = useAuth();
	const [showmenu, setShowmenu] = useState(" ");
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light nav-fixed">
			<button
				onClick={() => (showmenu == " " ? setShowmenu("show") : setShowmenu(" "))}
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarTogglerDemo03"
				aria-controls="navbarTogglerDemo03"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<a className="navbar-brand" href="#">
				<img className="navlogo" src="https://i.ibb.co/nbtVNcG/lodgerlogo.png" />
			</a>

			{!auth.authToken && (
				<div className={"collapse navbar-collapse " + showmenu} id="navbarTogglerDemo03">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0 navright">
						<li className="nav-item">
							<a className="nav-link" href="/">
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/register">
								Register
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/login">
								Log in
							</a>
						</li>
						{/* <li className="nav-item">
							<a className="nav-link" href="/contact">
								Contact
							</a>
						</li> */}
					</ul>
				</div>
			)}

			{auth.authToken && (
				<div className="collapse navbar-collapse" id="navbarTogglerDemo03">
					<ul className="navbar-nav mr-auto mt-2 mt-lg-0 navright">
						<li className="nav-item">
							<a
								className="nav-link"
								href="#"
								onClick={() => {
									auth.logout();
								}}>
								logout
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="/dashboard">
								Dashboard
							</a>
						</li>
					</ul>
				</div>
			)}
		</nav>
	);
};
