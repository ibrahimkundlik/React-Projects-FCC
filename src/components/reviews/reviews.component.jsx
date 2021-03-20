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
					<div className="prev">
						<FaArrowCircleLeft />
					</div>
					<div className="next">
						<FaArrowCircleRight />
					</div>
				</div>
				<button className="surprise">Surprise Me</button>
			</div>
		</div>
	);
};

export default Reviews;
