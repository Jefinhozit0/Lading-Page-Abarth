/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Definida em src/config/site.ts (brandColor) e aplicada em main.tsx
        brand: 'rgb(var(--brand) / <alpha-value>)',
        ink: {
          950: '#0b0b0d',
          900: '#111114',
          800: '#18181c',
          700: '#232329',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Barlow Condensed"', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        site: '1200px',
      },
    },
  },
  plugins: [],
};
