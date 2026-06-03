/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: '#5b57e8',
        secondary: '#1a1838',
        accent: '#818cf8',
      },
      borderColor: {
        primary: '#818cf8',
      },
    },
    fontFamily:{
      'devloper-font':'Sriracha'
    }
  },
  plugins: [],
}

