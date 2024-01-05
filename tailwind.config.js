/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var','Poppins'],
      },
      colors: {
        primary: "#14a0f7",
        secondary: "#46aef0",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "3rem",
          md: "4rem",
        },
      },
    },
  },
  plugins: [],
};
