/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', "sans-serif"],
        tangerine: ['Tangerine', 'cursive'],
      },
    },
  },
  daisyui: {
    themes: ["lofi", "halloween"],
  },
  plugins: [require('daisyui')],
}