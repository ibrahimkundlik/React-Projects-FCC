import React from "react";
import "./accordion.styles.scss";
import data from "./data.js";
import Question from "./question.component";

const Accordion = () => {
	return (
		<section className="accord-cont">
			<h3 className="accord-head">questions and answers about login</h3>
			<div className="accord-questions">
				{data.map(({ id, title, info }) => (
					<Question key={id} title={title} info={info} />
				))}
			</div>
		</section>
	);
};

export default Accordion;
