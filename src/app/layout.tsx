import "./globals.css";

import type { Metadata } from "next";
import NavBarCenter from "@/components/NavBar";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({
	subsets: ["latin"], // or add 'latin-ext' if needed
	weight: ["400", "700"], // Specify the font weights you want
});
const geistSans = localFont({
	src: "./fonts/GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900",
});
const geistMono = localFont({
	src: "./fonts/GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900",
});
const unbounded = localFont({
	src: "./fonts/Unbounded.ttf",
	variable: "--font-unbounded",
	weight: "100 900",
});
export const metadata: Metadata = {
	title: "Google Developers Students Club - ENSTA",
	description: "Scientific and technical club of ENSTA Dergana",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="">
			<body
				className={`${geistSans.variable} ${poppins.className} ${geistMono.variable} ${unbounded.variable} antialiased h-[2000px]`}>
				<NavBarCenter />
				{children}
			</body>
		</html>
	);
}
