import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundColor: {
				primary: '#F12C4C',
				secondary: '#262F3C',
				gray: '#343B4A',
				tab: '#1B242F',
				'selected-tab': '#0F1923',
			},
			textColor: {
				primary: '#F12C4C',
			},
			borderColor: {
				primary: '#F12C4C',
			},
		},
	},
	plugins: [],
};
export default config;
