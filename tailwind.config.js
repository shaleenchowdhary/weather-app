/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '10px -2px 20px 2px rgba(0, 0, 0, 0.3)',
      },
      transitionTimingFunction: {
        'show': 'cubic-bezier(1,0,1,0)',
        'hide': 'cubic-bezier(0,1,0,1)'
      },
      colors: {
        'forecast-text': '#31255A',
        'forecast-box': '#8fe0ff',
        'weather': '#2b235a'
      }
    },
  },
  plugins: [],
};