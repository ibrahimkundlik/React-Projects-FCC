import React from "react";
import { useGlobalContext } from "./context";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
	const data = useGlobalContext();

	return (
		<div className="navbar">
			<BiMenu />
			<h2>Navbar</h2>
		</div>
	);
};

export default Navbar;
