import React from "react";
import { useGlobalContext } from "./context";
import { TiTimes } from "react-icons/ti";

const Modal = () => {
	const data = useGlobalContext();

	return (
		<div className="modal-cont">
			<button>SHOW MODAL</button>
			<div className="modal">
				<TiTimes />
				<h2>Modal Content</h2>
			</div>
		</div>
	);
};

export default Modal;
