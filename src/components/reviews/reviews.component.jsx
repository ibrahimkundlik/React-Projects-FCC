import React, { useState } from "react";
import "./reviews.styles.scss";
import reviews from "./data.js";
import {
	FaQuoteRight,
	FaArrowCircleLeft,
	FaArrowCircleRight,
} from "react-icons/fa";

const Reviews = () => {
	const [index, setIndex] = useState(0);
	const { name, job, image, text } = reviews[index];

	const checkIndex = (ind) => {
		if (ind < 0) return reviews.length - 1;
		else if (ind >= reviews.length) return 0;
		else return ind;
	};

	const handleControl = (val) => {
		if (val) {
			const ind = index + val;
			setIndex(checkIndex(ind));
		} else {
			let newInd = Math.floor(Math.random() * reviews.length);
			if (newInd === index) {
				setIndex(checkIndex(newInd + 1));
			} else {
				setIndex(checkIndex(newInd));
			}
		}
	};

	return (
		<div className="main-cont">
			<h1>our reviews</h1>
			<div className="underline"></div>
			<div className="review-cont">
				<div className="profile-img">
					<img src={image} alt={name} />
					<div className="quote-icon">
						<FaQuoteRight />
					</div>
				</div>
				<h3 className="profile-name">{name}</h3>
				<p className="profile-post">{job}</p>
				<p className="profile-review">{text}</p>
				<div className="controls">
					<div className="prev" onClick={() => handleControl(-1)}>
						<FaArrowCircleLeft />
					</div>
					<div className="next" onClick={() => handleControl(1)}>
						<FaArrowCircleRight />
					</div>
				</div>
				<button className="surprise" onClick={() => handleControl()}>
					Surprise Me
				</button>
			</div>
		</div>
	);
};

export default Reviews;
