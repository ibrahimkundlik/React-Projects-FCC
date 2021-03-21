import React from "react";
import "./homepage.styles.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="home-page">
			<ul className="react-components">
				<li>
					<Link to="/reminder">Reminder</Link>
				</li>
				<li>
					<Link to="/tours">Tours</Link>
				</li>
				<li>
					<Link to="/reviews">Reviews</Link>
				</li>
				<li>
					<Link to="/accordion">Accordion</Link>
				</li>
			</ul>
		</div>
	);
};

export default HomePage;
