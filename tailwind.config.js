/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pure-white': '#fff',
        'dark-blue': '#314955',
        'primary': '#161e21',
        'secondary': '#223732'
      },
      backgroundImage: {
        'home-background': "url('/src/assets/home-background.jpg')",
      }
    },
  },
  plugins: [],
}
