/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // ← This is crucial!
  theme: {
    extend: {},
  },
  plugins: [],
}