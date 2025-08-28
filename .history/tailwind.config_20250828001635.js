
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ['Lexend', 'sans-serif'],
      },
      colors: {
        primary: "#F7FAFC",
        textColor: "#0D171C",
        paragraphColor: "#4F7A96",
        buttonColor: "#E8EDF2"
      }
    },
  },
  plugins: [],
}