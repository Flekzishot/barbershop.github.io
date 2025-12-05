/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#D4AF37',
          black: '#0B0B0C',
          white: '#FFFFFF'
        }
      }
    }
  },
  plugins: []
}
