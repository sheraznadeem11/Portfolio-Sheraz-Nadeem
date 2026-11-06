/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#111827',
        muted: '#5d6474',
        brand: '#4f5fe7',
        'brand-dark': '#3f4ec9',
        canvas: '#f3f4f9',
      },
      boxShadow: {
        card: '0 18px 35px rgba(17, 22, 38, 0.06)',
        float: '0 26px 48px rgba(31, 45, 79, 0.12)',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'sans-serif'],
      },
      maxWidth: {
        page: '1180px',
      },
    },
  },
  plugins: [],
};
