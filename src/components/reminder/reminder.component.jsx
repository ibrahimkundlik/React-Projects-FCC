import React, { useState } from "react";
import { DATA } from "./reminder.data";
import "./reminder.styles.scss";

const Reminder = () => {
	const [bCount, setBCount] = useState(DATA.length);
	const [bdays, setBdays] = useState(DATA);

	const handleClear = () => {
		setBdays([]);
		setBCount(0);
	};

	const handleCheck = (id) => {
		const filtered = bdays.filter((each) => each.id !== id);
		setBdays(filtered);
		setBCount(filtered.length);
	};

	return (
		<div className="reminder-cont">
			<h2>{bCount} birthdays today</h2>
			{bdays.map(({ id, name, age, image }) => {
				return (
					<article key={id} className="profile">
						<div className="img-cont">
							<div
								className="profile-img"
								style={{
									backgroundImage: `url(${image})`,
								}}
							></div>
						</div>
						<div className="profile-info">
							<p>{name}</p>
							<p>{age}</p>
						</div>
						<div className="profile-check" onClick={() => handleCheck(id)}>
							<p>✔️</p>
						</div>
					</article>
				);
			})}
			<button onClick={handleClear}>Clear All</button>
		</div>
	);
};

export default Reminder;
