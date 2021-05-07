import React from "react";
import stripeLogo from "./images/logo.svg";
import { AiOutlineMenu } from "react-icons/ai";
import { useGlobalContext } from "./context";

const Navbar = () => {
	const {
		openSidebar,
		openSubmenu,
		closeSubmenu,
		updateHoverInfo,
	} = useGlobalContext();

	const handleChange = (e) => {
		const text = e.target.innerText;
		const elem = e.target.getBoundingClientRect();
		const bodyTop = document.body.getBoundingClientRect().top;

		const top = elem.bottom - bodyTop;
		const left = elem.left;

		updateHoverInfo(text, { top, left });
		openSubmenu();
	};

	const checkHover = (e) => {
		if (e.target.className !== "link") closeSubmenu();
	};

	return (
		<div className="navbar" onMouseOver={checkHover}>
			<div className="logo-cont">
				<img src={stripeLogo} alt="Stripe Logo" />
			</div>
			<ul className="page-links">
				<li className="link" onMouseOver={handleChange}>
					Products
				</li>
				<li className="link" onMouseOver={handleChange}>
					Developers
				</li>
				<li className="link" onMouseOver={handleChange}>
					Company
				</li>
			</ul>
			<button className="sign-in">Sign In</button>
			<button className="nav-menu" onClick={openSidebar}>
				<AiOutlineMenu />
			</button>
		</div>
	);
};

export default Navbar;
