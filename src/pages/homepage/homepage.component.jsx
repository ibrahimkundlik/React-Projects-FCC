import React from "react";
import "./homepage.styles.scss";
import { FaReact } from "react-icons/fa";
import { Link } from "react-router-dom";
import pageData from "./data";

const HomePage = () => {
	return (
		<div className="home-page">
			<h1>
				<FaReact className="react-logo" />
				React Components
			</h1>
			<ul className="react-components">
				{pageData.map((curr, ind) => {
					const linkURL = curr.page.toLowerCase().split(" ").join("");
					return (
						<li key={ind}>
							<Link to={`/${linkURL}`}>
								{curr.icon}
								<p>{curr.page}</p>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default HomePage;
