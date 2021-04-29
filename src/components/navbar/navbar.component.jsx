import React, { useState } from "react";
import {
	TiThMenu,
	TiSocialTwitter,
	TiSocialFacebook,
	TiSocialLinkedin,
	TiSocialYoutube,
} from "react-icons/ti";
import "./navbar.styles.scss";

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

	return (
		<div className="navbar-cont">
			<div className="header-cont">
				<h1>Navbar</h1>
				<button onClick={() => setShowMenu(!showMenu)}>
					<TiThMenu />
				</button>
			</div>
			<ul className={`${showMenu ? "page-links show-view" : "page-links"}`}>
				<li className="page-link">
					<a href="/navbar">Home</a>
				</li>
				<li className="page-link">
					<a href="/navbar">About</a>
				</li>
				<li className="page-link">
					<a href="/navbar">Projects</a>
				</li>
				<li className="page-link">
					<a href="/navbar">Info</a>
				</li>
			</ul>
			<ul className={`${showMenu ? "social-links show-view" : "social-links"}`}>
				<li className="social-link">
					<a href="/navbar">
						<TiSocialTwitter />
					</a>
				</li>
				<li className="social-link">
					<a href="/navbar">
						<TiSocialFacebook />
					</a>
				</li>
				<li className="social-link">
					<a href="/navbar">
						<TiSocialLinkedin />
					</a>
				</li>
				<li className="social-link">
					<a href="/navbar">
						<TiSocialYoutube />
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
