/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37', // Add gold color,
        dark: '#111827', // Custom dark background
      },
      fontFamily: {
        caramel: ['Caramel', 'cursive'], // Add the Caramel font
      },
    },
  },
  plugins: [],
};
