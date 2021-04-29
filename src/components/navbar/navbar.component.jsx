import React from "react";
import {
	TiThMenu,
	TiSocialTwitter,
	TiSocialFacebook,
	TiSocialLinkedin,
	TiSocialYoutube,
} from "react-icons/ti";

const Navbar = () => {
	return (
		<div className="navbar-cont">
			<div className="header-cont">
				<h2>Navbar</h2>
				<button>
					<TiThMenu />
				</button>
			</div>
			<ul className="page-links">
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
			<ul className="social-links">
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
