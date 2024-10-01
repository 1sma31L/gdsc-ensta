import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				"gdsc-blue": "var(--gdsc-blue)",
				"gdsc-green": "var(--gdsc-green)",
				"gdsc-yellow": "var(--gdsc-yellow)",
				"gdsc-red": "var(--gdsc-red)",
			},
			fontFamily: {
				geistSans: ["var(--font-geist-sans)", "sans-serif"],
				geistMono: ["var(--font-geist-mono)", "monospace"],
				unbounded: ["var(--font-unbounded)", "cursive"],
			},
		},
	},
	plugins: [],
};
export default config;
