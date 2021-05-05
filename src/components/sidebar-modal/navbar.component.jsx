import React from "react";
import { useGlobalContext } from "./context";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
	const { openSidebar } = useGlobalContext();

	return (
		<div className="navbar">
			<BiMenu onClick={openSidebar} />
			<h2>Navbar</h2>
		</div>
	);
};

export default Navbar;
