"use client";

import { HoverBorderGradient } from "./ui/hover-border-gradient";
import Link from "next/link";
import React from "react";

export default function HoverButton() {
	return (
		<div className="flex justify-center text-center">
			<Link href={"https://ensta.edu.dz/"} target="_blank">
				<HoverBorderGradient
					containerClassName="rounded-full"
					className="bg-background text-foreground flex items-center space-x-2">
					<img src="/ensta.png" alt="" className="w-4 rounded-full" />
					<span className="text-[8px] md:text-sm lg:text-md">
						National Higher School of Advanced Technologies
					</span>
				</HoverBorderGradient>
			</Link>
		</div>
	);
}
