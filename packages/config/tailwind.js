/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#4640DE',
        'secondary': '#CCCCF5',
        'tertiary': '#E7F6FD',
        'accent-red': "#FF6550",
        'neutral-20': '#D6DDEB',
        'neutral-40': '#A8ADB7',
        'neutral-80': '#515B6F',
      },
    }
  },
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"
  ],
  plugins: [],
}
