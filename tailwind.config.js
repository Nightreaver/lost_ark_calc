module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        'item': '4rem minmax(0, 1fr) 5rem 5rem 5rem 5.5rem 5rem',
        'subitem': '4rem minmax(0, 1fr) 5.5rem 5rem 5rem 5rem 5.5rem 5rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
}