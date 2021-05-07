import React from "react";
import { useGlobalContext } from "./context";
import { AiOutlineShoppingCart } from "react-icons/ai";

const CartNav = () => {
	const { count, loading } = useGlobalContext();

	return (
		<div className="cart-nav">
			{loading ? (
				<h2 className="loading">Loading...</h2>
			) : (
				<>
					<h3>useReducer Cart</h3>
					<div className="cart-icon">
						<AiOutlineShoppingCart />
						<p>{count}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default CartNav;
