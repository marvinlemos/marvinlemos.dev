module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['"Titillium Web"']
    },
    extend: {
      colors: {
        orange: '#F05E7B'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
