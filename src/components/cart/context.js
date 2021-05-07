import React, { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";

const CartContext = createContext();

const INITIAL_STATE = {
	loading: true,
	cart: [],
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

	const fetchData = async () => {
		const response = await fetch(
			"https://course-api.com/react-useReducer-cart-project"
		);
		const data = await response.json();
		dispatch({ type: "FETCH_SUCCESS", payload: data });
	};

	useEffect(() => {
		fetchData();
	}, []);

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
