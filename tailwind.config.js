/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      colors: {
        secondary: {
          DEFAULT: colors.blue[500],
          hover: colors.amber[500],
          border: colors.amber[500],
          text: colors.amber[500],
          ["darkhover"]: colors.amber[500]
        }

      },
      backgroundImage: {
        'hero': "url('./Images/bground.jpg)",
      }


    },
  },
  plugins: [],
};
