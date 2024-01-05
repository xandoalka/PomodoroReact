/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        'primary' : '#b85600',
        'secondary' : '#08002b',
        'bg' : '#220045',
      },
    },
  },
  plugins: [],
}