/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      serif: ['Nunito Sans', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',
      'elements-d': 'hsl(209, 23%, 22%)',
      'bg-d': 'hsl(207, 26%, 17%)',
      'text-d': 'hsl(0, 0%, 100%)',
      'elements-l': 'hsl(0, 0%, 100%)',
      'bg-l': 'hsl(0, 0%, 98%)',
      'text-l': 'hsl(200, 15%, 8%)',
      'input-l': 'hsl(0, 0%, 52%)'
    }
  },
  plugins: [],
}
