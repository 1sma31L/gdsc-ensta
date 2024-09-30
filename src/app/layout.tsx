import "./globals.css";

import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import localFont from "next/font/local";

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
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
