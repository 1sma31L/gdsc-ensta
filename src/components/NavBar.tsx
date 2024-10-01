import { FiMenu } from "react-icons/fi";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const navItems = [
	{
		name: "Home",
		href: "/",
		color: "hover:bg-gdsc-blue",
	},
	{
		name: "Events",
		href: "/",
		color: "hover:bg-gdsc-green",
	},
	{
		name: "Projects",
		href: "/",
		color: "hover:bg-gdsc-yellow",
	},
	{
		name: "Team",
		href: "/",
		color: "hover:bg-gdsc-red",
	},
	{
		name: "Contact",
		href: "/",
		color: "hover:bg-gdsc-blue",
	},
];
function NavBar() {
	return (
		<header className="w-full border-b sticky top-0 px-2">
			<nav className="container mx-auto p-2 flex justify-between items-center font-geistSans min-h-[8vh] ">
				<div className="flex lg:gap-4 gap-2 items-center ">
					<img src="/gdsc_logo.svg" alt="" className="w-6 lg:w-14" />
					<div className="flex flex-col justify-center items-start">
						<h1 className="hidden sm:block text-[0.5rem] lg:text-lg text-zinc-800 m-0 p-0">
							Google Developers Students Club
						</h1>
						<h2 className="hidden sm:block text-xs lg:text-md text-zinc-600 m-0 p-0">
							National Higher School Of Advanced Technlogies
						</h2>
					</div>
				</div>
				<div className="hidden xl:block ">
					<div className="flex gap-5 items-center">
						{navItems.map((item) => (
							<Link
								href={item.href}
								key={item.name}
								className={`${item.color} hover:text-white px-2 py-1 rounded-lg text-zinc-500  transition-all duration-300`}>
								{item.name}
							</Link>
						))}
						<Link
							href="/"
							className=" transition-all duration-300 px-2 py-1 bg-gdsc-green rounded-lg text-white">
							Join Us
						</Link>
					</div>
				</div>
				<FiMenu className="xl:hidden" />
			</nav>
		</header>
	);
}

export default NavBar;
