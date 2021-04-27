import React from "react";
import errorImage from "./error.png";
import { Link } from "react-router-dom";

const ErrorPage = () => {
	return (
		<div style={{ textAlign: "center", width: "100%", color: "white" }}>
			<div
				style={{
					margin: "2rem auto 1rem auto",
					width: "50%",
					maxWidth: "275px",
				}}
			>
				<img src={errorImage} alt="errorImage" />
			</div>
			<h5>Something Went Wrong !!!</h5>
			<h5 style={{ margin: "1rem 0" }}>This Page Is Lost In Space !!!</h5>
			<button>
				<Link to="/">Back To Home</Link>
			</button>
		</div>
	);
};

export default ErrorPage;
