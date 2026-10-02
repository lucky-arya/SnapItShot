/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#0D0D0C',
          surface: '#141412',
          card: '#1A1917',
          'card-hover': '#23221F',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-strong': 'rgba(255, 255, 255, 0.16)',
        },
        cream: {
          DEFAULT: '#F4F0E8',
          light: '#F8F4EC',
          dark: '#E9E2D6',
        },
        charcoal: {
          DEFAULT: '#171614',
          light: '#242220',
          dark: '#0D0D0C',
        },
        muted: {
          DEFAULT: '#706B62',
          light: '#9E988E',
          dark: '#524E47',
        },
        lumiere: {
          border: '#B8AC9B',
          'border-light': '#E6DED1',
          accent: '#C9A888',
          'accent-dark': '#A78465',
        }
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'Manrope', 'system-ui', 'sans-serif'],
        signature: ['"Caveat"', 'cursive'],
      },
      maxWidth: {
        site: '1440px',
      },
      letterSpacing: {
        editorial: '0.15em',
        wide: '0.2em',
        widest: '0.25em',
      },
      transitionDuration: {
        editorial: '400ms',
        slow: '700ms',
      }
    },
  },
  plugins: [],
}
