import React, { useState } from "react";

const Question = ({ title, info }) => {
	const [hidden, setHidden] = useState(true);

	const toggleInfo = () => {
		setHidden(!hidden);
	};

	return (
		<article className="qa-cont">
			<div className="question">
				<p>{title}</p>
				<button onClick={toggleInfo}>{hidden ? `+` : `-`}</button>
			</div>
			{hidden ? null : <p className="answer">{info}</p>}
		</article>
	);
};

export default Question;
