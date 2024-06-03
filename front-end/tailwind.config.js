/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'green-ligth': '#E5F0DB',
        'green-dark': '#639339',
        'base-gray': '#333638',
        'base-gray-100': '#1B1D1E',
        'base-gray-500': '#DDDEDF',
      },
      fontFamily: {
        nunito: "'Nunito Sans', 'sans serif'",
      },
    },
  },
  plugins: [],
};
