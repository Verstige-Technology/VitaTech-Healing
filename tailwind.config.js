/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#00ffaa',
          gold: '#d4af37',
          dark: '#0a0a1a',
        },
      },
    },
  },
  plugins: [],
}