import React from "react";
import { FaCreditCard, FaBook, FaBriefcase } from "react-icons/fa";

const subLinks = [
	{
		page: "products",
		links: [
			{ label: "payment", icon: <FaCreditCard />, url: "/products" },
			{ label: "terminal", icon: <FaCreditCard />, url: "/products" },
			{ label: "connect", icon: <FaCreditCard />, url: "/products" },
		],
	},
	{
		page: "developers",
		links: [
			{ label: "plugins", icon: <FaBook />, url: "/products" },
			{ label: "libraries", icon: <FaBook />, url: "/products" },
			{ label: "help", icon: <FaBook />, url: "/products" },
			{ label: "billing", icon: <FaBook />, url: "/products" },
		],
	},
	{
		page: "company",
		links: [
			{ label: "about", icon: <FaBriefcase />, url: "/products" },
			{ label: "customers", icon: <FaBriefcase />, url: "/products" },
		],
	},
];

export default subLinks;
