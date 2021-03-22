import React, { useEffect, useState } from "react";
import "./tabs.styles.scss";
import { BiChevronsRight } from "react-icons/bi";

const Tabs = () => {
	const [loading, setLoading] = useState(true);
	const [exp, setExp] = useState([]);
	const [value, setValue] = useState(0);

	const fetchData = async () => {
		try {
			const response = await fetch("https://course-api.com/react-tabs-project");
			const respData = await response.json();
			setExp(respData);
			setLoading(false);
		} catch (err) {
			document.querySelector(".loading").innerText =
				"Couldn't load the resource. \n NetworkError when attempting to fetch resource.";
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	const handleChange = (id) => {
		setValue(exp.findIndex((each) => each.id === id));
	};

	if (loading) {
		return <h3 className="loading">Loading...</h3>;
	}

	const { company, dates, duties, title } = exp[value];

	return (
		<div className="main-tabs-cont">
			<h1 className="main-header">Experience</h1>
			<div className="underline"></div>
			<div className="exp-cont">
				<nav className="lists">
					{exp.map((each, ind) => (
						<p
							className={`company-name${ind === value ? " active" : ""}`}
							key={each.id}
							onClick={() => handleChange(each.id)}
						>
							{each.company}
						</p>
					))}
				</nav>
				<section className="company">
					<h1 className="company-title">{title}</h1>
					<p className="company-name">{company}</p>
					<p className="company-date">{dates}</p>
					{duties.map((duty, id) => (
						<div key={id} className="company-duty">
							<BiChevronsRight className="bullet" />
							<p>{duty}</p>
						</div>
					))}
				</section>
			</div>
		</div>
	);
};

export default Tabs;
