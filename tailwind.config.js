/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.{html,css}'],
  theme: {
    extend: {
      colors: {
        darkgreen: '#008000',
        lightgreen: '#5CE65C',
      },

      fontFamily: {
        ubuntu: ['Ubuntu'],
        pacifico: ['Pacifico'],
      },
    },
  },
  plugins: [],
};
