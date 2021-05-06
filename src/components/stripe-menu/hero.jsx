import React from "react";
import heroImage from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
	const { closeSubmenu } = useGlobalContext();

	return (
		<div className="hero" onMouseOver={closeSubmenu}>
			<div className="hero-info">
				<h1>
					<span>Payments</span>
					<span>infrastructure</span>
					<span>for the internet</span>
				</h1>
				<p>
					Millions of companies of all sizes—from startups to Fortune 500s—use
					Stripe’s software and APIs to accept payments, send payouts, and
					manage their businesses online.
				</p>
				<button>Start Now</button>
			</div>
			<div className="hero-image">
				<img src={heroImage} alt="Stripe Interface" />
			</div>
		</div>
	);
};

export default Hero;
