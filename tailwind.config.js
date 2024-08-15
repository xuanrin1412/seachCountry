/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        header: "60px",
        container: "90%",
        containerBody: "calc(100vh - 60px)"
      },
      fontFamily: {
        'sans': ['"Nunito Sans"', ...defaultTheme.fontFamily.sans],
      },
    }
  },
  plugins: [],
}

