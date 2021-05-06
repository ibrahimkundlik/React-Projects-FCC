import React from "react";
import stripeLogo from "./images/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo-cont">
				<img src={stripeLogo} alt="Stripe Logo" />
			</div>
			<ul className="page-links">
				<li className="link">Products</li>
				<li className="link">Developers</li>
				<li className="link">Company</li>
			</ul>
			<button className="sign-in">Sign In</button>
			<button className="nav-menu">
				<AiOutlineMenu />
			</button>
		</div>
	);
};

export default Navbar;
