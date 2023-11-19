/** @type {import('tailwindcss').Config} */
export default {
  content: ["inde.html","./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "serif"],
      }
    },
  },
  plugins: [],
}

