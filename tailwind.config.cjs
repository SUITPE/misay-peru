/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f2f7',
          100: '#d1e5ef',
          200: '#a3cbdf',
          300: '#75b1cf',
          400: '#4797bf',
          500: '#1A5E90', // Azul corporativo principal
          600: '#154b73',
          700: '#103856',
          800: '#0b263a',
          900: '#05131d',
        },
        secondary: {
          50: '#fffcf5',
          100: '#fff9eb',
          200: '#fff3d6',
          300: '#ffedc2',
          400: '#ffe7ad',
          500: '#F7AA24', // Naranja/Dorado - rgb(247, 170, 36)
          600: '#e69a0f',
          700: '#b8780c',
          800: '#8a5a09',
          900: '#5c3c06',
        },
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}
