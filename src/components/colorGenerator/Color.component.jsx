import React, { useEffect, useState } from "react";

const Color = ({ color }) => {
	const [red, green, blue] = color.rgb;
	const [copied, setCopied] = useState(false);

	const componentToHex = (c) => {
		var hex = c.toString(16);
		return hex.length === 1 ? "0" + hex : hex;
	};

	const rgbToHex = (r, g, b) => {
		return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
	};

	const textColor = () => {
		if (color.type === "tint") {
			return "black";
		}
		if (color.type === "base") {
			return `rgb(${255 - red}, ${255 - green}, ${255 - blue})`;
		}
		if (color.type === "shade") {
			return "white";
		}
	};

	useEffect(() => {
		const timeout = setTimeout(() => {
			setCopied(false);
		}, 3000);
		return () => clearTimeout(timeout);
	}, [copied]);

	return (
		<li
			className="color"
			style={{
				backgroundColor: `rgb(${red}, ${green}, ${blue})`,
				color: `${textColor()}`,
			}}
			onClick={() => {
				if (!navigator.clipboard) return;
				navigator.clipboard.writeText(rgbToHex(red, green, blue));
				setCopied(true);
			}}
		>
			<p>{color.weight}%</p>
			<p>
				<strong>{rgbToHex(red, green, blue)}</strong>
			</p>
			{copied && <p>Copied</p>}
		</li>
	);
};

export default Color;
