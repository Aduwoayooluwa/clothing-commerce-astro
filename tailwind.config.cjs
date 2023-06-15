/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	'./src/views/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		backgroundImage: {
			'hero_pattern': "url('./src/assets/bg_texture.png')",
		}
	},
	plugins: [],
}
