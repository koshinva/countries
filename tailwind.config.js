/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        'elements-d': 'hsl(209, 23%, 22%)',
        'bg-d': 'hsl(207, 26%, 17%)',
        'text-d': 'hsl(0, 0%, 100%)',
        'elements-l': 'hsl(0, 0%, 100%)',
        'bg-l': 'hsl(0, 0%, 98%)',
        'text-l': 'hsl(200, 15%, 8%)',
        'input-l': 'hsl(0, 0%, 52%)',
      },
      gridTemplateRows: {
        '5-min-content': 'repeat(5, min-content)',
      },
    },
    fontFamily: {
      serif: ['Nunito Sans', 'sans-serif'],
    },
  },
  plugins: [],
};
