/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/domains/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        abNavy: {
          dark: "#020c1b",
          light: "#112240",
          DEFAULT: "#0a192f",
          lightest: "#233554",

        },
        abSlate: {
          DEFAULT: "#8892b0",
          dark: "#495670",
          light: "#a8b2d1",
          lightest: "#ccd6f6",

        },
        abWhite: "#e6f1ff",
        abGreen: {
          DEFAULT: "#64ffda",
          tint: "rgba(100,255,218,0.1)"
        },
        abPink: "#f57dff",
        abBlue: "#57cbff"

      }
    },
  },
  plugins: [],
}
