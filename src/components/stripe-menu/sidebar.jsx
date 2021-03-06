import React from "react";
import { FaTimes } from "react-icons/fa";
import subLinks from "./data";
import { useGlobalContext } from "./context";

const Sidebar = () => {
	const { sidebar, closeSidebar } = useGlobalContext();

	return (
		<div className={`${sidebar ? "show-sidebar" : ""} sidebar`}>
			<div className="close-sidebar">
				<FaTimes onClick={closeSidebar} />
			</div>
			<ul className="sidebar-cat">
				{subLinks.map((curr, ind) => {
					return (
						<li key={ind}>
							<h3>{curr.page}</h3>
							<ul className="sidebar-cat-links">
								{curr.links.map((link, ind) => {
									return (
										<li key={ind}>
											{link.icon}
											<p>{link.label}</p>
										</li>
									);
								})}
							</ul>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Sidebar;
