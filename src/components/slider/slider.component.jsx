import React, { useEffect, useState } from "react";
import "./slider.styles.scss";
import people from "./data";
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = () => {
	const [value, setValue] = useState(0);

	useEffect(() => {
		const maxLength = people.length - 1;
		if (value < 0) {
			setValue(maxLength);
		} else if (value > maxLength) {
			setValue(0);
		}
	}, [value]);

	return (
		<div className="slider-cont">
			<h1>
				<span className="slash">/ </span> Reviews
			</h1>
			<div className="reviews-cont">
				{people.map((person, ind) => {
					const { id, image, name, title, quote } = person;
					let position = "next-slide";
					if (ind === value) {
						position = "active-slide";
					} else if (
						ind === value - 1 ||
						(value === 0 && ind === people.length - 1)
					) {
						position = "last-slide";
					}
					return (
						<article className={`review ${position}`} key={id}>
							<img src={image} alt={name} className="image-cont" />
							<h2 className="name">{name}</h2>
							<p className="title">{title}</p>
							<p className="quote">{quote}</p>
							<FaQuoteRight className="quote-icon" />
						</article>
					);
				})}
				<button className="prev" onClick={() => setValue(value - 1)}>
					<FaChevronLeft />
				</button>
				<button className="next" onClick={() => setValue(value + 1)}>
					<FaChevronRight />
				</button>
			</div>
		</div>
	);
};

export default Slider;
