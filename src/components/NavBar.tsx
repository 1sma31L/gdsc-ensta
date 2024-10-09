/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useRef, useState } from "react";

import Link from "next/link";
import { motion } from "framer-motion";
import socialMediaAccounts from "@/data/social-media";

const colors = [
	"hover:text-[#E4405F]",
	"hover:text-blue-400",
	"hover:text-blue-600",
];
const NavBarCenter = () => {
	return (
		<header className="sticky top-0 left-0 z-[1050] backdrop-blur-sm">
			<nav className="py-8 flex justify-between items-center container mx-auto font-unbounded">
				<div className="flex flex-col justify-center items-center gap-2">
					<img
						src="/gdsc.svg"
						alt=""
						className="w-20 hidden lg:block dark:invert"
					/>
					{/* <p className="text-xs">GDSC ENSTA</p> */}
				</div>
				<SlideTabs />
				<div className="hidden justify-between items-center gap-8 lg:flex 	">
					{socialMediaAccounts.map((account, index) => (
						<Link
							target="_blank"
							key={index}
							href={account.url}
							className={`${account.color} text-3xl transition-all duration-150`}>
							{account.icon}
						</Link>
					))}
				</div>
			</nav>
		</header>
	);
};

const SlideTabs = () => {
	const [position, setPosition] = useState({
		left: 0,
		width: 0,
		opacity: 0,
	});

	return (
		<ul
			onMouseLeave={() => {
				setPosition((pv) => ({
					...pv,
					opacity: 0,
				}));
			}}
			className="relative mx-auto flex w-fit rounded-full border-2 border-black dark:border-white bg-white p-1 dark:bg-black ">
			<Tab setPosition={setPosition}>Home</Tab>
			<Tab setPosition={setPosition}>Events</Tab>
			<Tab setPosition={setPosition}>Teams</Tab>
			<Tab setPosition={setPosition}>Blog</Tab>
			<Tab setPosition={setPosition}>Contact</Tab>

			<Cursor position={position} />
		</ul>
	);
};

const Tab = ({
	children,
	setPosition,
}: {
	children: React.ReactNode;
	setPosition: React.Dispatch<
		React.SetStateAction<{ left: number; width: number; opacity: number }>
	>;
}) => {
	const ref = useRef<HTMLLIElement>(null);

	return (
		<li
			ref={ref}
			onMouseEnter={() => {
				if (!ref?.current) return;

				const { width } = ref.current.getBoundingClientRect();

				setPosition({
					left: ref.current.offsetLeft,
					width,
					opacity: 1,
				});
			}}
			className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base">
			{children}
		</li>
	);
};

const Cursor = ({
	position,
}: {
	position: { left: number; width: number; opacity: number };
}) => {
	return (
		<motion.li
			animate={{
				...position,
			}}
			className="absolute z-0 h-7 rounded-full bg-black dark:bg-white md:h-12"
		/>
	);
};

export default NavBarCenter;
