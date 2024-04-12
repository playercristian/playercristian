/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				fade: 'fadeOut 1.5s ease-in-out',
			},
			keyframes: theme => ({
				fadeOut: {
					'0%': { opacity: 0 },
					'100%': { opacity: 1 },
				},
			}),
		},
	  },
	plugins: [],
}
