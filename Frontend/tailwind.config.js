/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      'surpia-sans': ['"surpia sans"', 'sans-serif'],
      'apercu': ['"apercu"', 'sans-serif'],
      'bold': ['"apercu"','"plus jakarta"','"gotham"', 'sans-serif'],

    },
  },
  variants: {},
  plugins: [],
};
