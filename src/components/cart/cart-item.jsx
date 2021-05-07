import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useGlobalContext } from "./context";

const CartItem = ({ cartItem: { id, title, price, img, amount } }) => {
	const { removeItem, updateCount } = useGlobalContext();

	return (
		<li className="cart-item">
			<div className="item-image">
				<img src={img} alt={title} />
			</div>
			<div className="item-info">
				<h4 className="item-title">{title}</h4>
				<p className="item-price">$ {price}</p>
				<p className="item-remove" onClick={() => removeItem(id)}>
					Remove
				</p>
			</div>
			<div className="item-count">
				<IoIosArrowUp onClick={() => updateCount(id, 1)} />
				<p>{amount}</p>
				<IoIosArrowDown onClick={() => updateCount(id, -1)} />
			</div>
		</li>
	);
};

export default CartItem;
