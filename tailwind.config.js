/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        'red-650': '#e2001a',
      },
    },
    fontFamily: {
      'sans': ["Gotham", "sans-serif"],
      'mono': ["Archerbold", 'monospace'],
      'body': ["Gotham", 'sans-serif'],
    },
    // container: {
    //   center: true,
    //   padding: {
    //     DEFAULT: '1rem',
    //     sm: '2rem',
    //     lg: '4rem',
    //     xl: '5rem',
    //     '2xl': '6rem',
    //   },
    // },
  },
  corePlugins: {
    container: false
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1400px',
          },
        }
      })
    }
  ]
}
