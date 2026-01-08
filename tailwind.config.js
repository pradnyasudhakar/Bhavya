/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        newsreader: ["var(--font-newsreader)"],
        manrope: ["var(--font-manrope)"],
      },
    },
  },
  plugins: [],
};
