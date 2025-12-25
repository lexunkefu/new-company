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
        primary: '#0066ff',
        primaryDark: '#0052d4',
        primaryLight: '#3385ff',
        secondary: '#1a1a1a',
        secondaryLight: '#333333',
        accent: '#00c853',
        accentDark: '#00b248',
        accentLight: '#33d375',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}