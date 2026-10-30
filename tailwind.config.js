/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        wordmark: ['"Libre Baskerville"', 'Georgia', 'serif'],
      },
      colors: {
        ivory: {
          50: '#FDFCFA',
          100: '#FAF8F4',
          200: '#F3EFE7',
          300: '#E8E2D5',
        },
        ink: {
          300: '#B5B2AC',
          500: '#6B6861',
          700: '#3A3834',
          900: '#161513',
        },
        gold: {
          300: '#E0C995',
          500: '#B8935A',
          700: '#8A6A3A',
        },
      },
      letterSpacing: {
        luxe: '0.28em',
      },
      keyframes: {
        kenburns: {
          from: { transform: 'scale(1.06)' },
          to: { transform: 'scale(1)' },
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(8px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        kenburns: 'kenburns 7s ease-out forwards',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
