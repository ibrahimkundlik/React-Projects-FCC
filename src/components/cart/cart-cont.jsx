import React from "react";
import CartItem from "./cart-item";
import { useGlobalContext } from "./context";

const CartCont = () => {
	const { cart, price, clearCart } = useGlobalContext();

	if (cart.length === 0) {
		return (
			<div className="cart-cont">
				<h3>Your Bag</h3>
				<p className="empty-cart">There are no items in bag.</p>
			</div>
		);
	}

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
				<h4>$ {price}</h4>
			</div>
			<button className="clear-cart" onClick={clearCart}>
				Clear Cart
			</button>
		</div>
	);
};

export default CartCont;
