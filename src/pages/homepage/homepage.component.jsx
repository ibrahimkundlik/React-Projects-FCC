import React from "react";
import "./homepage.styles.scss";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="home-page">
			<h1>
				<FaReact className="react-logo" />
				React Web Components
			</h1>
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
				<li>
					<Link to="/menu">Menu</Link>
				</li>
				<li>
					<Link to="/tabs">Tabs</Link>
				</li>
				<li>
					<Link to="/slider">Slider</Link>
				</li>
				<li>
					<Link to="/colorgenerator">Color Generator</Link>
				</li>
			</ul>
		</div>
	);
};

export default HomePage;
