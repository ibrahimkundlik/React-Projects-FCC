import React from "react";
import "./stripe-menu.styles.scss";
import Navbar from "./navbar";
import Hero from "./hero";
import Submenu from "./submenu";
import Sidebar from "./sidebar";

const StripeMenu = () => {
	return (
		<div className="stripe-menu">
			<div className="stripe-menu-container">
				<Navbar />
				<Hero />
				<Sidebar />
				<Submenu />
			</div>
		</div>
	);
};

export default StripeMenu;
