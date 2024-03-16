/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        'light-white': '#FFFDF6',
        'white': '#FFFFFF',
        'black': '#000000',
        'darker-pink': '#560F20',
        'darker-yellow': '#B08D00',
        'gold': '#D2AE6D',
      }
    },
    container: {
      center: true,
      padding: '15px',
      screens: {
        'sm': '640px',
        'md': '768px',
        'md2': '820px',
        'lg': '1024px',
        'xl': '1280px',
      }
    },
    theme: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'md2': '820px',
        'lg': '1024px',
        'xl': '1280px',
      }
    }
  },
  plugins: [],
}