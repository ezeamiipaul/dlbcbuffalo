/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Julius Sans One", "sans-serif"],   // clean thin headings
        impact: ["Oswald", "sans-serif"],             // bold headings / menu
        body: ["EB Garamond", "serif"],               // paragraphs
        body2: ["Cormorant Garamond", "serif"],       // alternative body
        jost: ["Jost", "sans-serif"],                 // optional modern sans
      },

    },
  },
  plugins: [],
};
