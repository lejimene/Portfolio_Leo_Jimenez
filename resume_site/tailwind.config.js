/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Include all your JS/JSX files
  ],
  theme: {
    extend: {
      fontFamily: {
        dongle: ["Dongle", "sans-serif"],
      },
    },
  },
  plugins: [],
};
