/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily:{
      'myfont':['DM Serif Text', 'sans-serif'],
      'roboto_condensed':['Roboto Condensed', 'sans-serif']
    },
   
  },
  plugins: [],
}