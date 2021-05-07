import React from "react";
import CartItem from "./cart-item";
import { useGlobalContext } from "./context";

const CartCont = () => {
	const { cart, price } = useGlobalContext();

	return (
		<div className="cart-cont">
			<h3>Your Bag</h3>
			<ul>
				{cart.map((cartItem) => (
					<CartItem cartItem={cartItem} key={cartItem.id} />
				))}
			</ul>
			<div className="total-price">
				<p>Total Price :</p>
				<p>{price}</p>
			</div>
			<button>Clear Cart</button>
		</div>
	);
};

export default CartCont;
