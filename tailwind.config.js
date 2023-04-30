/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					light: '#00FFB3',
					medium: '#20CE9A',
					dark: '#28AA83'
				}
			}
		}
	},
	plugins: []
};
