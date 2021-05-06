import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [sidebar, setSidebar] = useState(false);
	const [submenu, setSubmenu] = useState(false);
	const [hoverInfo, setHoverInfo] = useState(null);

	const openSidebar = () => {
		setSidebar(true);
	};
	const closeSidebar = () => {
		setSidebar(false);
	};

	const openSubmenu = () => {
		setSubmenu(true);
	};
	const closeSubmenu = () => {
		setSubmenu(false);
	};

	const updateHoverInfo = (text, dims) => {
		setHoverInfo({ text, dims });
	};

	return (
		<AppContext.Provider
			value={{
				sidebar,
				openSidebar,
				closeSidebar,
				submenu,
				openSubmenu,
				closeSubmenu,
				hoverInfo,
				updateHoverInfo,
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
