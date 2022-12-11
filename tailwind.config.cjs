/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				lora: ["Lora", "serif"],
				openSans: ["Open Sans", "sans-serif"]
			},
			colors: {
				midnight: "#0f0f0f",
				apple: {
					green: "#61BB46",
					yellow: "#FDB827",
					orange: "#F5821F",
					red: "#E03A3E",
					purple: "#963D97",
					blue: "#009DDC"
				}
			}
		},
	},
	plugins: [],
}
