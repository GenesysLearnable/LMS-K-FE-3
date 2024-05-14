/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
          quicksand:['Quicksand', 'san-serif'],
          bubble:['Bubblegum Sans', 'san-serif']
      },
      colors:{
        primary:'#ffd966',
        secondary:'#130E5D',
      }
    },
  },
  plugins: [],
}  