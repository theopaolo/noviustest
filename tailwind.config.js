/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      transparent: "transparent",
      novred: '#e2001a',
      white: '#fff',
      black: '#222',
      gray : {
        200: '#f7fafc',
        300: '#edf2f7',
      }
    },
    fontFamily: {
      'sans': ["Gotham", "sans-serif"],
      'mono': ["Archerbold", 'monospace'],
      'body': ["Gotham", 'sans-serif'],
    },
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
