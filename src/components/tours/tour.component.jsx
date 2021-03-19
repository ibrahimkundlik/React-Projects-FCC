import React, { useState } from "react";
import "./tour.styles.scss";

const Tour = ({ tour, handleDelete }) => {
	const { id, name, image, price, info } = tour;
	const [hideText, setHideText] = useState(true);
	const toggleHideText = () => {
		setHideText(!hideText);
	};

	return (
		<div className="tour-cont">
			<div
				className="tour-image"
				style={{ backgroundImage: `url(${image})` }}
			></div>
			<div className="tour-desc">
				<h3 className="tour-name">{name}</h3>
				<p className="tour-price">${price}</p>
				<p className="tour-info">
					{hideText ? `${info.substring(0, 200)} ...` : info}
					<span className="hide-text" onClick={toggleHideText}>
						{hideText ? ` Read More` : ` Show Less`}
					</span>
				</p>
				<button onClick={() => handleDelete(id)}>Not Interested</button>
			</div>
		</div>
	);
};

export default Tour;
