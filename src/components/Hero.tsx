/* eslint-disable @next/next/no-img-element */
import { BackgroundLines } from "@/components/ui/background-lines";
import HoverButton from "@/components/HoverButton";
import Link from "next/link";
import React from "react";

export default function Hero() {
	return (
		<BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
			<div className="relative z-[100]">
				{/* <img src="/gdsc_logo.svg" alt="" className="w-20 mx-auto" /> */}
				<HoverButton />
				<h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-zinc-300 dark:to-white text-2xl md:text-4xl lg:text-7xl font-unbounded py-2 md:py-10 relative z-20 font-bold tracking-tight">
					Google Developer Student Clubs
				</h2>
				<p className="max-w-xl mx-auto text-sm md:text-lg text-center text-zinc-400">
					At <strong className="text-gdsc-red">GDSC ENSTA</strong>, we ignite
					passion for <strong className="text-gdsc-green">Technology</strong>{" "}
					and foster collaboration among students.{" "}
					<Link href={"/"} className="hover:underline text-gdsc-blue font-bold">
						Join us
					</Link>{" "}
					as we transform ideas into impactful solutions and shape the{" "}
					<strong className="text-gdsc-yellow">Future</strong> together!
				</p>
			</div>
		</BackgroundLines>
	);
}
