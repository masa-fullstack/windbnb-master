module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        xxs: '10px',
        xxxs: '8px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
