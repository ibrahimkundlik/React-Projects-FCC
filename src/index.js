import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./sass/index.scss";
//react-router
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.component";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
	<Router history={history}>
		<ScrollToTop />
		<App />
	</Router>,
	document.getElementById("root")
);
