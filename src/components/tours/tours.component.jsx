import React, { useEffect, useState } from "react";
import "./tours.styles.scss";
import Tour from "./tour.component";

const Tours = () => {
	const [tours, setTours] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("https://course-api.com/react-tours-project")
			.then((response) => response.json())
			.then((tourData) => {
				setTours(tourData);
				setLoading(false);
			})
			.catch((err) => {
				document.querySelector(".loading").innerText =
					"Couldn't load the resource. \n NetworkError when attempting to fetch resource.";
			});
	}, []);

	const handleDelete = (id) => {
		setTours(tours.filter((tour) => tour.id !== id));
	};

	return (
		<div className="tours-cont">
			<h1>Our Tours</h1>
			<div className="underline"></div>
			<div className="tour-list">
				{loading ? (
					<p className="loading">Loading...</p>
				) : tours.length === 0 ? (
					<div>
						<p className="empty-tour">No more tours left !!!</p>
						<button onClick={() => window.location.reload()}>Refresh</button>
					</div>
				) : (
					tours.map((tour) => (
						<Tour key={tour.id} tour={tour} handleDelete={handleDelete} />
					))
				)}
			</div>
		</div>
	);
};

export default Tours;
