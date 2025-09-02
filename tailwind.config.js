/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#E1C16E', // Gold color
        beige: '#F7E7CE', // Add beige color
        dark: '#111827', // Custom dark background
        lightGold: 'rgb(173, 168, 150)',
      },
      fontFamily: {
        caramel: ['Caramel', 'cursive'], // Add the Caramel font
        greatvibes: ['Great Vibes', 'cursive'],
        playfairdisplay: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
