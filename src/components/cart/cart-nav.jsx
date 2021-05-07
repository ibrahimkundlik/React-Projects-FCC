import React from "react";
import { useGlobalContext } from "./context";

const CartNav = () => {
	const data = useGlobalContext();
	console.log(data);

	return <div className="cart-nav">CartNav</div>;
};

export default CartNav;
