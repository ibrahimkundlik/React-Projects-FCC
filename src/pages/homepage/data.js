import React from "react";
import {
	MdAlarmOn,
	MdRateReview,
	MdRestaurantMenu,
	MdShoppingCart,
} from "react-icons/md";
import { GiDetour } from "react-icons/gi";
import { BsPlusCircleFill } from "react-icons/bs";
import { TiTabsOutline } from "react-icons/ti";
import { BiSlider, BiDirections } from "react-icons/bi";
import { BsLayoutSidebarInset } from "react-icons/bs";
import { IoColorPaletteSharp } from "react-icons/io5";
import { VscChecklist } from "react-icons/vsc";
import { FaCcStripe } from "react-icons/fa";

const pageData = [
	{
		page: "Cart",
		icon: <MdShoppingCart />,
	},
	{
		page: "Stripe Menu",
		icon: <FaCcStripe />,
	},
	{
		page: "Sidebar Modal",
		icon: <BsLayoutSidebarInset />,
	},
	{
		page: "Navbar",
		icon: <BiDirections />,
	},
	{
		page: "Grocery List",
		icon: <VscChecklist />,
	},
	{
		page: "Color Generator",
		icon: <IoColorPaletteSharp />,
	},
	{
		page: "Slider",
		icon: <BiSlider />,
	},
	{
		page: "Tabs",
		icon: <TiTabsOutline />,
	},
	{
		page: "Menu",
		icon: <MdRestaurantMenu />,
	},
	{
		page: "Accordion",
		icon: <BsPlusCircleFill />,
	},
	{
		page: "Reviews",
		icon: <MdRateReview />,
	},
	{
		page: "Tours",
		icon: <GiDetour />,
	},
	{
		page: "Reminder",
		icon: <MdAlarmOn />,
	},
];

export default pageData;
