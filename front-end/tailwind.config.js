/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-ligth': '#E5F0DB',
        'green-dark': '#639339',
      },
      fontFamily: {
        nunito: "'Nunito Sans', 'sans serif'",
      },
    },
  },
  plugins: [],
};
