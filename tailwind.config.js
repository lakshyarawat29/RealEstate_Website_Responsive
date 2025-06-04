// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        sm: '0.75rem',
        base: '0.875rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        '2xl': '1.75rem',
        '3xl': '2.25rem',
      },
      colors: {
        gray: {
          dark: '#C4C4C4',
          light: '#E5E5E5',
        },
        black: {
          light: '#242527',
          dark: '#2B2B2B',
        },
      },
    },
  },
  plugins: [],
};
