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
          'text': '#FFFFFF',
          'bg': '#0B010F',
          'accent': '#DE88F9',
          'primary-btn': {
            DEFAULT: '#D88C31',
            'text': '#000000'
          },
          'secondary-btn': {
            DEFAULT: '#020024',
            'text': '#FFFFFF'
          }
        },
        fontFamily: {
          'body': ['Noto Sans', 'sans-serif'],
          'heading': ['Bebas Neue', 'sans-serif']
        }
    },
  },
  plugins: [],
}

