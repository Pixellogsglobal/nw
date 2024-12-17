/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1400px',
        },
      },
      fontFamily: {
        display: ['Clash Display', 'sans-serif'],
        sans: ['Satoshi', 'sans-serif'],
      },
      colors: {
        'brand-red': {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ffa3a3',
          400: '#ff7070',
          500: '#ff4d4d',
          600: '#e60000',
          700: '#cc0000',
          800: '#990000',
          900: '#800000',
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}