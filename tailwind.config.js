/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#eaeaea',
          100: '#bebebf',
          200: '#355B2B',
          300: '#727275',
          400: '#56565a',
          500: '#2c2c31',
          600: '#28282d',
          700: '#294321',
          800: '#355B2B',
          900: '#355B2B',
          950: '#121E0E',
        },
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      }
    },
  },
  plugins: [],
}
