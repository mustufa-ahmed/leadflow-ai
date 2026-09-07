/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae0fd',
          300: '#7cc7fc',
          400: '#38adf8',
          500: '#0e94e6',
          600: '#0276c5',
          700: '#035ea1',
          800: '#075085',
          900: '#0c436e',
          950: '#082a48',
        },
        slate: {
          850: '#111c2e',
          900: '#0f172a',
          950: '#090d16',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.2s ease-in-out',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 10px rgba(14, 148, 230, 0.2)' },
          '100%': { boxShadow: '0 0 25px rgba(14, 148, 230, 0.6)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
