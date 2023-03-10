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
				customRed: "#CE2A3A",
			},
			fontFamily: {
				body: ["Merriweather"],
			},
			backgroundImage: {
				nav: "url('https://res.cloudinary.com/drhj3sc2o/image/upload/v1678302770/BG_vfqqll.jpg')",
				bn: "url('https://res.cloudinary.com/drhj3sc2o/image/upload/v1678398336/bn_cb3w5x.jpg')",
				opacity: " rgba(5, 7, 12, 0.4)",
			},
		},
	},
	plugins: [],
};
