/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      beige: "#DDC3A5",
      blackbrown: "#201E20",
      tan: "#E0A96D",
      purple: "#A96DE0"
    },
    fontFamily: {
      'montserrat': ['Montserrat', 'Arial']
    }
  },
  plugins: [],
}
