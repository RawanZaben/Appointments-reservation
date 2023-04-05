/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      primary: '#d2eaee',
      white: '#fff',
      blue: {
        500: '#43475b',
        600:'#74a7c2',
        700:'#BAD3E0',
      },
      green: {
        500: '#00cc00',
      },
      pink:'#D47782'
    },
    extend: {
      fontFamily: {
        'myFont': [],
      },
    },
  },
  plugins: [],
}
