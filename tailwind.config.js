module.exports = {
  purge: ["./pages/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat"],
        serif: ['"Playfair Display"'],
        mono: ['"Roboto Mono"'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
