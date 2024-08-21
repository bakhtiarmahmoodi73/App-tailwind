/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {

      },
      colors: {
        bg_header: "#E2E2E2",
        bg_banner: "#333333",
        bg_nav: "#404040",
      },
      fontFamily: {
        fonts: ["Georgia", "Times New Roman", "Times", "serif"],
      },
    },
  },
  plugins: [],
};
