import React from "react";
import Reminder from "./components/reminder/reminder.component";
import Tours from "./components/tours/tours.component";
import Reviews from "./components/reviews/reviews.component";
import Accordion from "./components/accordion/accordion.component";

function App() {
	return (
		<div className="App">
			<Reminder />
			<Tours />
			<Reviews />
			<Accordion />
		</div>
	);
}

export default App;
