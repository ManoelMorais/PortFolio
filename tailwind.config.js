/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azul-petroleo': '#001429',
      },
      textColor: {
        'yello-text': '#daa520',
      },
      fontFamily: {
        'robot': ['Roboto Slob', 'serif'],
      },
    },
  },
  plugins: [],
}

