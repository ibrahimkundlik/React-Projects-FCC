const reducer = (state, action) => {
	switch (action.type) {
		case "CLEAR_CART":
			return {
				...state,
				cart: [],
			};
		case "REMOVE_ITEM":
			return {
				...state,
				cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
			};
		case "UPDATE_ITEM_COUNT":
			const updatedCart = state.cart
				.map((cartItem) => {
					if (cartItem.id === action.payload.id) {
						return {
							...cartItem,
							amount: cartItem.amount + action.payload.param,
						};
					}
					return cartItem;
				})
				.filter((cartItem) => cartItem.amount !== 0);

			return {
				...state,
				cart: updatedCart,
			};
		case "UPDATE_PRICE_COUNT":
			const { newPrice, newCount } = state.cart.reduce(
				(param, cartItem) => {
					param.newCount += cartItem.amount;
					param.newPrice += cartItem.amount * cartItem.price;
					return param;
				},
				{ newPrice: 0, newCount: 0 }
			);

			return {
				...state,
				count: newCount,
				price: newPrice.toFixed(2),
			};
		case "FETCH_SUCCESS":
			return {
				...state,
				loading: false,
				cart: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
