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
        cookie: ['Cookie', 'cursive'],
      },
    },
  },
  daisyui: {
    themes: ["cupcake", "night"],
  },
  plugins: [require('daisyui')],
}