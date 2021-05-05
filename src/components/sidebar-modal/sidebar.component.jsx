import React from "react";
import { useGlobalContext } from "./context";
import {
	TiTimes,
	TiFolderAdd,
	TiGift,
	TiLinkOutline,
	TiMessages,
} from "react-icons/ti";

const Sidebar = () => {
	const { sidebar, closeSidebar } = useGlobalContext();

	return (
		<div className={`${sidebar ? "show-sidebar" : ""} sidebar`}>
			<div className="heading">
				<h2>Sidebar</h2>
				<TiTimes onClick={closeSidebar} />
			</div>
			<ul>
				<li>
					<TiFolderAdd />
					<p>Home</p>
				</li>
				<li>
					<TiGift />
					<p>About</p>
				</li>
				<li>
					<TiLinkOutline />
					<p>Info</p>
				</li>
				<li>
					<TiMessages />
					<p>Projects</p>
				</li>
			</ul>
		</div>
	);
};

export default Sidebar;
