/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        // res_header: { max: "486px" },
        // res_nav: {max:"1026px"},
        // res_banner: {max:"500px"}
      },
      colors: {
        bg_header: "#E2E2E2",
        bg_banner: "#333333",
      },
      fontFamily: {
        fonts: ["Georgia", "Times New Roman", "Times", "serif"],
      },
    },
  },
  plugins: [],
};
