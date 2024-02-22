/** @type {import('tailwindcss').Config} */
import "./src/app/font.css"
module.exports = {

  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,css}',
    "./src/app/font.css"
  ],
  theme: {
    extend: {
      colors: {
        "accent": "#74A7B3",
        "primary": "#33495F",
        "primary2": "#FDC776",
        "primary3": "#F7F1DE",
        "primary4": "#FFFCF3",
        "secondary": "#5281A2",
        "secondary2": "#9FA983",
        "secondary3": "#D4DDF1"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'custom-roca': ['Roca Bold, sans-serif'],
        'custom-open-sans': ["Open Sans, sans-serif"]



      },
    },
  },
  plugins: [],
}
