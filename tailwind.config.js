/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkgray': '#39302B',
        'randomred': '#B95F5F',
        'lightgray': '#C5C5C5',
        'lightergray': '#FBFBFB',
        'graygray': '#6E6E6E'
      }
    },
    fontFamily: {
      sans: ['InterVariable', 'sans-serif']
    },
  },
  plugins: [],
}
