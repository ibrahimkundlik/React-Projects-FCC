import React, { useState } from "react";
import "./groceryList.styles.scss";

const GroceryList = () => {
	const [state, setState] = useState({
		item: "",
		mssgModal: null,
		list: [],
	});
	const [editId, setEditId] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		const item = state.item;
		if (item === "") {
			setState({ ...state, mssgModal: "Enter a value." });
			return;
		}
		if (editId !== null) {
			const newList = [...state.list];
			newList[editId] = item;
			setState({
				...state,
				item: "",
				mssgModal: "Item updated.",
				list: newList,
			});
		} else {
			setState({
				...state,
				item: "",
				mssgModal: "Item added to the list.",
				list: [...state.list, item],
			});
		}
	};

	const editItem = (item, id) => {
		setState({
			...state,
			item,
		});
		setEditId(id);
		document.querySelector("#item-input").focus();
	};

	const deleteItem = (id) => {
		const newList = state.list.filter((item, ind) => ind !== id);
		setState({
			...state,
			mssgModal: "Item removed from the list.",
			list: newList,
		});
	};

	return (
		<div className="grocery-cont">
			<h1>Grocery List</h1>
			<div className="bg-cont">
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						placeholder="e.g. eggs"
						id="item-input"
						value={state.item}
						onChange={(e) => setState({ ...state, item: e.target.value })}
					/>
					<button>Submit</button>
				</form>
				<p className={`mssg-modal ${state.mssgModal ? "show-modal" : ""}`}>
					{state.mssgModal}
				</p>
				<ul className="list-cont">
					{state.list.map((item, id) => {
						return (
							<li key={id} className="item">
								<p>
									{item}{" "}
									<span className="edit" onClick={() => editItem(item, id)}>
										&#9998;
									</span>{" "}
									<span className="delete" onClick={() => deleteItem(id)}>
										&#x2612;
									</span>
								</p>
							</li>
						);
					})}
				</ul>
				{state.list.length > 0 && (
					<button
						className="clear-items"
						onClick={() =>
							setState({
								...state,
								item: "",
								mssgModal: "Entire list is cleared.",
								list: [],
							})
						}
					>
						Clear Items
					</button>
				)}
			</div>
		</div>
	);
};

export default GroceryList;
