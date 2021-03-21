import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import Reminder from "./components/reminder/reminder.component";
import Tours from "./components/tours/tours.component";
import Reviews from "./components/reviews/reviews.component";
import Accordion from "./components/accordion/accordion.component";
import { FaHome } from "react-icons/fa";
//react-router
import { Link, Route } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header className="header">
				<Link to="/">
					<FaHome />
				</Link>
			</header>
			<Route exact path="/" component={HomePage} />
			<Route exact path="/reminder" component={Reminder} />
			<Route exact path="/tours" component={Tours} />
			<Route exact path="/reviews" component={Reviews} />
			<Route exact path="/accordion" component={Accordion} />
		</div>
	);
}

export default App;
