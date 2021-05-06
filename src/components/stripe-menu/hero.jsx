import React from "react";
import heroImage from "./images/hero.svg";

const Hero = () => {
	return (
		<div className="hero">
			<div className="hero-info">
				<h1>Payments infrastructure for the internet</h1>
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
