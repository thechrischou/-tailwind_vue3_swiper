const colors = require('tailwindcss/colors')


module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          "50": '#FFF8F8',
          "100": '#FFE7E6',
          "200": '#FFA5A5',
          "300": '#FF727D',
          "400": '#FF5664',
          "500": '#FF595A',
          "600": '#FF3A3C',
          "700": '#E53244',
          "800": '#D92F40',
          "900": '#CC2D3D'
        },
        secondary: {
          "50": '#DFF5F5',
          "100": '#85FFF8',
          "200": '#47FAEF',
          "300": '#34EBE5',
          "400": '#21DBD5',
          "500": '#10CFC9',
          "600": '#34ABA7',
          "700": '#218885',
          "800": '#017374',
          "900": '#005457'
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
