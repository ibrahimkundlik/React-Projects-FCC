import React, { createContext, useContext } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	return <AppContext.Provider value="HELLO">{children}</AppContext.Provider>;
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export default AppProvider;
