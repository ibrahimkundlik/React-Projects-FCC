import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CartItem = ({ cartItem: { id, title, price, img, amount } }) => {
	return (
		<li className="cart-item">
			<div className="item-image">
				<img src={img} alt={title} />
			</div>
			<div className="item-info">
				<h4 className="item-title">{title}</h4>
				<p className="item-price">{price}</p>
				<p className="item-remove">Remove</p>
			</div>
			<div className="item-count">
				<IoIosArrowUp />
				<p>{amount}</p>
				<IoIosArrowDown />
			</div>
		</li>
	);
};

export default CartItem;
