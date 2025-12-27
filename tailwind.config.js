/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: '#A3E000',
          'lime-dark': '#7FD000',
          'lime-light': '#B8E535',
          charcoal: '#333333',
          'charcoal-light': '#4a4a4a',
          'charcoal-lighter': '#666666',
          gray: '#999999',
          'gray-light': '#cccccc',
          'gray-lighter': '#e8e8e8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-lime': 'linear-gradient(135deg, #A3E000 0%, #7FD000 100%)',
        'gradient-dark': 'linear-gradient(135deg, #333333 0%, #1a1a1a 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      transitionDelay: {
        '200': '200ms',
        '400': '400ms',
      },
    },
  },
  plugins: [],
};
