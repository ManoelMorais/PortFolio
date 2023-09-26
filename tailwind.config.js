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
        'yello-text': '#FCFF4B',
      },
      fontFamily: {
        'robot': ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

