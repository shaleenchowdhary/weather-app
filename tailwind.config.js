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
    },
  },
  plugins: [],
};