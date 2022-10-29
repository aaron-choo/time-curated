module.exports = {
  content: [
    './components/**/*.vue',
    './slices/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    fontFamily: {
      sans: 'Inter,"Noto Sans SC", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif:
        '"EB Garamond", "Noto Serif SC",  ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
      heading:
        '"IM Fell English", "Noto Serif SC",  ui-serif, Georgia, Cambria, "Times New Roman", Times, serif'
    },
    extend: {
      transitionDuration: {
        DEFAULT: '300ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'ease',
      },
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio')]
}
