/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pookie: {
          white: '#ffffff',
          black: '#0a0a0a',
          blue: '#0066ff',
          'blue-dark': '#0044cc',
          'blue-light': '#e8f0ff',
          gray: '#f5f5f5',
          'gray-dark': '#e5e5e5',
          text: '#0a0a0a',
          'text-muted': '#666666',
          'text-light': '#999999',
          border: '#e5e5e5',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['SF Pro Display', 'SF Pro Text', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xs': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'display-sm': ['3.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-md': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
        'display-lg': ['5.5rem', { lineHeight: '0.95', letterSpacing: '-0.04em' }],
        'display-xl': ['7rem', { lineHeight: '0.9', letterSpacing: '-0.05em' }],
        'body-xs': ['0.875rem', { lineHeight: '1.6' }],
        'body-sm': ['1rem', { lineHeight: '1.7' }],
        'body-md': ['1.125rem', { lineHeight: '1.8' }],
      },
      spacing: {
        'section': '120px',
        'section-sm': '80px',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'scale-in': 'scaleIn 0.8s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      }
    },
  },
  plugins: [],
}