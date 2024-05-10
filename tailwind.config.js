/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        bubble: ["Bubblegum sans", "sans-serif"],
      },
      colors: {
        primary: "#130E5D",
        secondary: "#ffd966",
      },
    },
  },
  plugins: [],
};
