import React from "react";
import { useGlobalContext } from "./context";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartNav = () => {
	const { count } = useGlobalContext();

	return (
		<div className="cart-nav">
			<h3>useReducer Cart</h3>
			<div className="cart-icon">
				<AiOutlineShoppingCart />
				<p>{count}</p>
			</div>
		</div>
	);
};

export default CartNav;
