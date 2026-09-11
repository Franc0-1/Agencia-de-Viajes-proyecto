/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'serif'],
      },
      colors: {
        navy: {
          50: '#EEF2F8',
          100: '#DCE5F0',
          200: '#B3C4DD',
          300: '#8AA3CA',
          400: '#5A7CAE',
          500: '#385A88',
          600: '#264269',
          700: '#182D4C',
          800: '#0F1E38',
          900: '#0A1526',
          950: '#060D19',
        },
        gold: {
          50: '#FBF8F1',
          100: '#F5EDD9',
          200: '#EBDBB3',
          300: '#DFC585',
          400: '#D0AB5C',
          500: '#BE9245',
          600: '#9C7636',
          700: '#7A5B2A',
        },
        mist: {
          50: '#F9FAFB',
          100: '#F3F5F8',
          200: '#E7EBF0',
          300: '#D6DCE5',
        },
      },
      boxShadow: {
        soft: '0 2px 8px rgba(10, 21, 38, 0.06)',
        card: '0 8px 30px rgba(10, 21, 38, 0.08)',
        elevated: '0 20px 60px -12px rgba(10, 21, 38, 0.25)',
        gold: '0 8px 24px rgba(190, 146, 69, 0.25)',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0A1526 0%, #182D4C 55%, #264269 100%)',
        'gold-gradient': 'linear-gradient(135deg, #DFC585 0%, #BE9245 100%)',
        'radial-fade': 'radial-gradient(circle at top right, rgba(190,146,69,0.12), transparent 60%)',
      },
      borderRadius: {
        xl2: '1.25rem',
        '3xl': '1.75rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
