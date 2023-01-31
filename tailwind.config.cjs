/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "index.html",
    "./src/**/*.{html,tsx,js}"],
  theme: {
    extend: {
      fontFamily:{
        principal: `'Ubuntu', sans-serif;`,
      }
    },
  },
  plugins: [],
}