const config = require('config/tailwind')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{js,ts,jsx,tsx}",
  ],
  ...config
}
