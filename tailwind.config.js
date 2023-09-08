/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'regal-blue': '0px 0px 48px 10px #010C13;',
      },
    },
  },
  plugins: [],
}

