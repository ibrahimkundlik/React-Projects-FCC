import React, { createContext, useContext, useState } from "react";
import cartData from "./data";

const CartContext = createContext();

const INITIAL_STATE = {
	loading: false,
	cart: cartData,
	count: 0,
	price: 0,
};

const CartProvider = ({ children }) => {
	const [state, setState] = useState(INITIAL_STATE);

	return (
		<CartContext.Provider value={{ ...state }}>{children}</CartContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(CartContext);
};

export default CartProvider;
