/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

	theme: {
		extend: {
			colors: {
				black: '#222831',
				grey: '#393E46',
				yellow: '#daad33',
				cream: '#FFFBE0',
			},
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				nerko: ['Nerko One', 'cursive'],
			},
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px',
		},
	},
	plugins: [],
};
