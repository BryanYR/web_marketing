/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./app/**/*.{vue,js,ts}",
    "./components/**/*.{vue,js,ts}",
    "./assets/**/*.{vue,js,ts}",
    "./sections/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
    darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#132335',
          50: '#F1F4F7',
          100: '#E2E7EE',
          200: '#C6CFDB',
          300: '#9EADBF',
          400: '#6F8299',
          500: '#132335', // base
          600: '#101D2C',
          700: '#0C1622',
          800: '#09111A',
          900: '#060B11',
        }
      }
    }
  },
  plugins: []
}
