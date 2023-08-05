/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      opensans: "'Open Sans', sans-serif",
      ubuntu: "Ubuntu, san-serif",
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("prettier-plugin-tailwindcss"),
  ],
};
