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
        'primary': '#314955',
        'secondary': '#ed4747'
      },
      backgroundImage: {
        'home-background': "url('/src/assets/home-background.jpg')",
      }
    },
  },
  plugins: [],
}
