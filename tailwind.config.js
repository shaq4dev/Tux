/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'around': '1px 1px 20px rgba(0,0,0,0.2)'
      }
    },
  },
  plugins: [],
}