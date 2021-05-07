import React, { createContext, useContext, useEffect, useReducer } from "react";
import cartData from "./data";
import reducer from "./reducer";

const CartContext = createContext();

const INITIAL_STATE = {
	loading: false,
	cart: cartData,
	count: 0,
	price: 0,
};

const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

	const clearCart = () => {
		dispatch({ type: "CLEAR_CART" });
	};

	const removeItem = (id) => {
		dispatch({ type: "REMOVE_ITEM", payload: id });
	};

	const updateCount = (id, param) => {
		dispatch({ type: "UPDATE_ITEM_COUNT", payload: { id, param } });
	};

	useEffect(() => {
		dispatch({ type: "UPDATE_PRICE_COUNT" });
	}, [state.cart]);

	return (
		<CartContext.Provider
			value={{ ...state, clearCart, removeItem, updateCount }}
		>
			{children}
		</CartContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(CartContext);
};

export default CartProvider;
