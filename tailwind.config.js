module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['neue-haas-grotesk-text', 'neue-haas-grotesk-display', 'ui-sans-serif', 'system-ui'],
      serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
