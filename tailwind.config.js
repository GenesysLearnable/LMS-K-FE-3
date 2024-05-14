/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
          quicksand:['Quicksand', 'sans-serif'],
          bubble:['Bubblegum Sans']
      },
      colors:{
        primary:'#ffd966',
        secondary:'#130E5D',
      }
    },
  },
  plugins: [],
}  