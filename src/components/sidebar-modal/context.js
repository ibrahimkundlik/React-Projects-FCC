import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [sidebar, setSidebar] = useState(false);
	const [modal, setModal] = useState(false);

	const openSidebar = () => {
		setSidebar(true);
	};
	const openModal = () => {
		setModal(true);
	};
	const closeSidebar = () => {
		setSidebar(false);
	};
	const closeModal = () => {
		setModal(false);
	};

	return (
		<AppContext.Provider
			value={{
				sidebar,
				modal,
				openSidebar,
				openModal,
				closeSidebar,
				closeModal,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export default AppProvider;
