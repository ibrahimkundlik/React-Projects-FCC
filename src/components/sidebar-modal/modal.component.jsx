import React from "react";
import { useGlobalContext } from "./context";
import { TiTimes } from "react-icons/ti";

const Modal = () => {
	const { modal, openModal, closeModal } = useGlobalContext();

	return (
		<div className="modal-cont">
			<button onClick={openModal}>SHOW MODAL</button>
			<div className={`${modal ? "show-modal" : ""} modal`}>
				<TiTimes onClick={closeModal} />
				<h2>Modal Content</h2>
			</div>
		</div>
	);
};

export default Modal;
