const config = require('tailwind-config')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{js,ts,jsx,tsx}",
  ],
  ...config
}
