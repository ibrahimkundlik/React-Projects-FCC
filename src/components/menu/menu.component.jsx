import React, { useState } from "react";
import "./menu.styles.scss";
import data from "./data";

const Menu = () => {
	const [menu, setMenu] = useState(data);
	const [active, setActive] = useState("all");
	const handleChange = (cat) => {
		if (cat === "all") {
			setMenu(data);
			setActive("all");
		} else {
			setMenu(data.filter((item) => item.category === cat));
			setActive(cat);
		}
	};

	return (
		<div className="menu-cont">
			<h1>Our Menu</h1>
			<div className="underline"></div>
			<ul className="nav-links">
				<li
					className={active === "all" ? `active` : ``}
					onClick={() => handleChange("all")}
				>
					All
				</li>
				<li
					className={active === "breakfast" ? `active` : ``}
					onClick={() => handleChange("breakfast")}
				>
					Breakfast
				</li>
				<li
					className={active === "lunch" ? `active` : ``}
					onClick={() => handleChange("lunch")}
				>
					Lunch
				</li>
				<li
					className={active === "shakes" ? `active` : ``}
					onClick={() => handleChange("shakes")}
				>
					Shakes
				</li>
			</ul>
			<div className="items-cont">
				{menu.map(({ id, title, price, img, desc }) => (
					<div className="item" key={id}>
						<div
							className="item-img"
							style={{
								backgroundImage: `url(${img})`,
							}}
						></div>
						<div className="title-price">
							<p className="item-title">{title}</p>
							<p className="item-price">${price}</p>
						</div>
						<p className="item-desc">{desc}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Menu;
