/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				dmSans: ["DM Sans", "sans-serif"],
				outfit: ["Outfit Variable", "sans-serif"],
			},
		},
	},
	plugins: [
		require('prettier-plugin-tailwindcss'),
	],
}
