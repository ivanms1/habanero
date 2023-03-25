const config = require('config/tailwind')

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...config,
  theme: {
    ...config.theme,
    extend: {
      ...config.theme.extend,
      fontFamily: {
        'montserrat': ["'Montserrat'", 'sans-serif'],
      }
    }
  }
}
