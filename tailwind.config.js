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
        'secondary': '#223732',
        'trans-black': 'rgba(0,0,0,0.3)',
        'contact-green': '#218f48',
      },
      backgroundImage: {
        'home-background': "url('/src/assets/home-background.jpg')",
      }
    },
  },
  plugins: [],
}
