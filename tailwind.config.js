/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#14b8a6",
				logo: "#0091cf",
				secondary: "#ef4444",
				primary2: "#06b6d4",
				white: "#f0fdfa",
			},
			fontFamily: {
				body: ["Merriweather"],
			},
		},
	},
	plugins: [],
};
