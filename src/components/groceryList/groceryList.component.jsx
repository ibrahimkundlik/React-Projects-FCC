import React, { useEffect, useState } from "react";
import "./groceryList.styles.scss";

const GroceryList = () => {
	const [item, setItem] = useState("");
	const [list, setList] = useState(
		JSON.parse(localStorage.getItem("list")) || []
	);
	const [mssgModal, setMssgModal] = useState({ mssg: "", type: "success" });
	const [editId, setEditId] = useState(null);

	useEffect(() => {
		let timeout = setTimeout(() => {
			setMssgModal({ mssg: "", type: "success" });
		}, 3000);
		return () => {
			clearTimeout(timeout);
		};
	}, [list]);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (item === "") {
			setMssgModal({ mssg: "Enter a value.", type: "error" });
			return;
		}
		if (editId !== null) {
			const newList = [...list];
			newList[editId] = item;
			setMssgModal({ mssg: "Item updated.", type: "success" });
			document.querySelector("#item-input").blur();
			setItem("");
			setList(newList);
			updateLocalStorage(newList);
		} else {
			const newList = [...list, item];
			setMssgModal({ mssg: "Item added to the list.", type: "success" });
			setItem("");
			setList(newList);
			updateLocalStorage(newList);
		}
	};

	const editItem = (item, id) => {
		setItem(item);
		setEditId(id);
		document.querySelector("#item-input").focus();
	};

	const deleteItem = (id) => {
		const newList = list.filter((item, ind) => ind !== id);
		setList(newList);
		setMssgModal({ mssg: "Item removed from the list.", type: "success" });
		updateLocalStorage(newList);
	};

	const updateLocalStorage = (newList) => {
		localStorage.setItem("list", JSON.stringify(newList));
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
						value={item}
						onChange={(e) => setItem(e.target.value)}
					/>
					<button>Submit</button>
				</form>
				<p
					className={`mssg-modal ${mssgModal.mssg ? "show-modal" : ""} ${
						mssgModal.type
					}`}
				>
					{mssgModal.mssg}
				</p>
				<ul className="list-cont">
					{list.map((item, id) => {
						return (
							<li key={id} className="item">
								<span className="item-text">{item}</span>
								<span className="edit" onClick={() => editItem(item, id)}>
									&#9998;
								</span>
								<span className="delete" onClick={() => deleteItem(id)}>
									&#x2612;
								</span>
							</li>
						);
					})}
				</ul>
				{list.length > 0 && (
					<button
						className="clear-items"
						onClick={() => {
							setItem("");
							setList([]);
							setMssgModal({ mssg: "Entire list is cleared.", type: "error" });
							updateLocalStorage([]);
						}}
					>
						Clear Items
					</button>
				)}
			</div>
		</div>
	);
};

export default GroceryList;
