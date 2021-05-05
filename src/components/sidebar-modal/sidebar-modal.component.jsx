import React from "react";
import "./sidebar-modal.styles.scss";
import Navbar from "./navbar.component";
import Sidebar from "./sidebar.component";
import Modal from "./modal.component";
import AppProvider from "./context";

const SidebarModal = () => {
	return (
		<AppProvider>
			<div className="sidebar-modal">
				<Navbar />
				<Sidebar />
				<Modal />
			</div>
		</AppProvider>
	);
};

export default SidebarModal;
