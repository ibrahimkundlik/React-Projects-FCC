import React, { useRef, useEffect, useState } from "react";
import subLinks from "./data";
import { useGlobalContext } from "./context";

const Submenu = () => {
	const submenuRef = useRef(null);
	const [menuData, setMenuData] = useState(null);
	const { submenu, hoverInfo } = useGlobalContext();

	useEffect(() => {
		if (hoverInfo) {
			const {
				text,
				dims: { left, top },
			} = hoverInfo;
			if (hoverInfo.dims) {
				submenuRef.current.style.left = left;
				submenuRef.current.style.top = top;
			}
			const data = subLinks.find((curr) => curr.page === text.toLowerCase());
			setMenuData(data);
		}
	}, [hoverInfo]);

	return (
		<div
			className={`${submenu ? "show-submenu" : ""} submenu`}
			ref={submenuRef}
		>
			{!menuData ? null : (
				<>
					<h4>{hoverInfo.text}</h4>
					<ul>
						{menuData.links.map((link, ind) => {
							return (
								<li key={ind}>
									{link.icon}
									<p>{link.label[0].toUpperCase() + link.label.substring(1)}</p>
								</li>
							);
						})}
					</ul>
				</>
			)}
		</div>
	);
};

export default Submenu;
