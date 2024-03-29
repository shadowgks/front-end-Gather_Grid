/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./dist/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#4E4E50',
          100: '#1A1A1D',
        },
        'second': {
          50: '#F31559',
          100: '#B31312'
        },
      },

      spacing: {
        '100': '500px',
      },

      fontFamily: {
        Chau: ['Chau Philomene One', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      
    },
  },
  plugins: [
    require("flowbite"),
    require("flowbite-typography"),
  ],
};
