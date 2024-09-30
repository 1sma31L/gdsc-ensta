import { FiMenu } from "react-icons/fi";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const navItems = [
	{
		name: "Home",
		href: "/",
	},
	{
		name: "Events",
		href: "/",
	},
	{
		name: "Projects",
		href: "/",
	},
	{
		name: "Team",
		href: "/",
	},
	{
		name: "Contact",
		href: "/",
	},
];
function NavBar() {
	return (
		<header className="w-full border-b sticky top-0 px-2 bg-zinc-50">
			<nav className="container mx-auto p-2 flex justify-between items-center font-geistMono min-h-[8vh] ">
				<div className="flex lg:gap-4 gap-2 items-center">
					<img src="/gdsc_logo.svg" alt="" className="w-6 lg:w-12" />
					<h1 className="hidden sm:block text-xs md:text-sm lg:text-lg">
						<span className="font-bold text-red-500">G</span>oogle{" "}
						<span className="font-bold text-blue-500">D</span>evelopers{" "}
						<span className="font-bold text-green-500">S</span>tudents{" "}
						<span className="font-bold text-yellow-500">C</span>lub |{" "}
						<span className="">ENSTA</span>
					</h1>
					<h1 className="sm:hidden text-sm md:text-sm lg:text-lg">
						<span className="font-bold text-red-500">G</span>
						<span className="font-bold text-blue-500">D</span>
						<span className="font-bold text-green-500">S</span>
						<span className="font-bold text-yellow-500">C</span> ENSTA
					</h1>
				</div>
				<div className="hidden xl:block">
					<div className="flex gap-5 items-center">
						{navItems.map((item) => (
							<Link
								href={item.href}
								key={item.name}
								className="hover:underline text-zinc-500 hover:text-zinc-950 transition-all duration-300">
								{item.name}
							</Link>
						))}
						<Link
							href="/"
							className="hover:bg-blue-700 transition-all duration-300 px-2 py-1 bg-blue-500 rounded-md text-white">
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
