/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
        colors: {
          'text': '',
          'bg': '',
          'accent': '',
          'primary-btn': {
            DEFAULT: '',
            'text': ''
          },
          'secondary-btn': {
            DEFAULT: '',
            'text': ''
          }
        },
        fontFamily: {
          'body': ['', 'sans-serif'],
          'heading': ['', 'sans-serif']
        }
    },
  },
  plugins: [],
}

