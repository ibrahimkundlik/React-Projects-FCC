import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import Reminder from "./components/reminder/reminder.component";
import Tours from "./components/tours/tours.component";
import Reviews from "./components/reviews/reviews.component";
import Accordion from "./components/accordion/accordion.component";
import Menu from "./components/menu/menu.component";
import Tabs from "./components/tabs/tabs.component";
import Slider from "./components/slider/slider.component";
import ColorGenerator from "./components/colorGenerator/ColorGenerator.component";
import GroceryList from "./components/groceryList/groceryList.component";
import ErrorPage from "./components/errorPage/errorPage.component";
import { FaHome } from "react-icons/fa";
//react-router
import { Link, Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<header className="header">
				<Link to="/">
					<FaHome />
				</Link>
			</header>
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/reminder" component={Reminder} />
				<Route path="/tours" component={Tours} />
				<Route path="/reviews" component={Reviews} />
				<Route path="/accordion" component={Accordion} />
				<Route path="/Menu" component={Menu} />
				<Route path="/tabs" component={Tabs} />
				<Route path="/slider" component={Slider} />
				<Route path="/colorgenerator" component={ColorGenerator} />
				<Route path="/grocerylist" component={GroceryList} />
				<Route path="/*" component={ErrorPage} />
			</Switch>
		</div>
	);
}

export default App;
