/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        body:['Oswald','Lato',"Bebas Neue","Roboto Condensed"]
      }
    },
  },
  plugins: [],
}