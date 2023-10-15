/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1A1A1D',
        'second': {
          50: '#66FCF1',
          100: '#45A29E'
        },
      },
      spacing: {
        '100': '500px',
      }
    },
  },
  plugins: [require("flowbite")],
};
