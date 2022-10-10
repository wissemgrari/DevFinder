/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      mobile: '320px',
      tablet: '480px',
      desktop: '768px',
    },
    fontWeight: {
      regular: '400',
      bold: '700',
    },
    extend: {
      colors: {
        darkBlue: '#141d2f',
        lightBlue: '#1e2a47',
        primary: '#0079ff',
        light: '#f6f8ff',
        primaryLight: '#4b6a9b',
      },
    },
  },
  plugins: [],
};
