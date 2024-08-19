const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

// Add this line to BaseLayout.astro
// <link rel="stylesheet" href="https://use.typekit.net/xkl6xit.css">

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: colors.rose,
				secondary: colors.cyan,
				neutral: colors.neutral,
			},
			fontFamily: {
				sans: ['museo-sans', ...defaultTheme.fontFamily.sans],
				heading: ['museo', ...defaultTheme.fontFamily.sans],
			},
			fontWeight: {
				'100': 100,
				'300': 300,
				'500': 500,
				'700': 700,
				'900': 900
			},
			typography: {
				quoteless: {
					css: {
						'blockquote p:first-of-type::before': { content: 'none' },
						'blockquote p:first-of-type::after': { content: 'none' },
					}
				}
			}
		},
	},
	plugins: [require('@tailwindcss/typography')],
	darkMode: 'class',
};