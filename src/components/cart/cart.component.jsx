import React from "react";
import "./cart.styles.scss";
import CartNav from "./cart-nav";
import CartCont from "./cart-cont";
import CartProvider from "./context";

const Cart = () => {
	return (
		<CartProvider>
			<div className="cart-component">
				<CartNav />
				<CartCont />
			</div>
		</CartProvider>
	);
};

export default Cart;
