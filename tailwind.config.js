/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      color_bg: 'var(--color_bg)',
      color_text: 'var(--color_text)',
      primary: 'var(--primary)',
      primary_text: 'var(--primary_text)',
    },
    extend: {},
  },
  plugins: [],
}

