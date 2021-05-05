import React from "react";
import "./sidebar-modal.styles.scss";
import Navbar from "./navbar.component";
import Sidebar from "./sidebar.component";
import Modal from "./modal.component";

const SidebarModal = () => {
	return (
		<div className="sidebar-modal">
			<Navbar />
			<Sidebar />
			<Modal />
		</div>
	);
};

export default SidebarModal;
