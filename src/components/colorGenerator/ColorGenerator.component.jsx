import React, { useState } from "react";
import Color from "./Color.component";
import "./ColorGenerator.styles.scss";
import Values from "values.js";

const ColorGenerator = () => {
	const [color, setColor] = useState("");
	const [error, setError] = useState(false);
	const [colorList, setColorList] = useState(new Values("#51bfdd").all(10));

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			const colors = new Values(color).all(10);
			setColorList(colors);
			setColor("");
			setError(false);
			e.target.children[0].blur();
		} catch (error) {
			setError(true);
		}
	};

	return (
		<div className="colorGenerator">
			<div className="navbar">
				<h1>Color Generator</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={color}
						placeholder="#51bfdd OR yellow"
						onChange={(e) => {
							setColor(e.target.value);
						}}
						className={`color-input ${error ? "color-error" : ""}`}
					/>
					{error && <p className="error-icon">&#x2716;</p>}
					<button>Submit</button>
				</form>
			</div>
			<ul className="color-list">
				{colorList.map((color, id) => (
					<Color color={color} key={id} />
				))}
			</ul>
		</div>
	);
};

export default ColorGenerator;
