/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'principal': '#162238',
        'secundaria': '#BF9246',
        'terciario': '#f3f3f3',
      },
      textColor: {
        'extras': '#FFF9EB',
        'headingcolor': '#364461',
        'hove': '#BF9246',
      },
      dropShadow: {
        '4xl': [
          '15px 7px 5px #BF9246',
        ]
      }
    },
  },
  plugins: [],
}
