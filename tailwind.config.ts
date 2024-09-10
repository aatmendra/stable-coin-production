import { url } from "inspector";
import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./Components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				"spin-around":
					"spin-around calc(var(--speed) * 2) infinite linear",
				slide: "slide var(--speed) ease-in-out infinite alternate",
			},
			keyframes: {
				"spin-around": {
					"0%": {
						transform: "translateZ(0) rotate(0)",
					},
					"15%, 35%": {
						transform: "translateZ(0) rotate(90deg)",
					},
					"65%, 85%": {
						transform: "translateZ(0) rotate(270deg)",
					},
					"100%": {
						transform: "translateZ(0) rotate(360deg)",
					},
				},
				slide: {
					to: {
						transform: "translate(calc(100cqw - 100%), 0)",
					},
				},
			},
			boxShadow: {
				custom: "rgba(255, 255, 255, 0.1) 0px 54px 55px, rgba(255, 255, 255, 0.08) 0px -12px 30px, rgba(255, 255, 255, 0.08) 0px 4px 6px, rgba(255, 255, 255, 0.1) 0px 12px 13px, rgba(255, 255, 255, 0.05) 0px -3px 5px",
			},
			colors: {
				"dark-gray": "#0a0a0a",
				"green-custom": "#497d00",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				"custom-gradient":
					"linear-gradient(212deg, rgba(10,10,10,1) 0%, rgba(73,125,0,1) 99%)",
				"hero-image": "url('/public/Hero.webp')",
			},
		},
	},

	plugins: [],
};
export default config;
