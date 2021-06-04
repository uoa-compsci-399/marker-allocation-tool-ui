const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: '300px',
      '3xl': '1600px',
      ...defaultTheme.screens,
    },
    extend: {},
    fontFamily: {
      sans: ['neue-haas-grotesk-text', 'neue-haas-grotesk-display', 'ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
