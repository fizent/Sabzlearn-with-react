/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    fontFamily : {
      "fontVazir" : "Vazir",
      "fontVazirBold" : "Vazir Bold"

    },
    extend: {
      colors: {
        "FazelColor": "#0000FF"
      }
    },
  },
  plugins: [],
}



