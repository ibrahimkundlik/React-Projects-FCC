import React from "react";
import "./stripe-menu.styles.scss";
import Navbar from "./navbar";
import Hero from "./hero";
import Submenu from "./submenu";
import Sidebar from "./sidebar";
import AppProvider from "./context";

const StripeMenu = () => {
	return (
		<AppProvider>
			<div className="stripe-menu">
				<div className="stripe-menu-container">
					<Navbar />
					<Hero />
					<Sidebar />
					<Submenu />
				</div>
			</div>
		</AppProvider>
	);
};

export default StripeMenu;
