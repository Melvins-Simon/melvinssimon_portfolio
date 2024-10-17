/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        grape: "rgba(114,35,204)",
        vine: "rgb(79,50,229)",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "back-image": "url('/src/assets/herobg.png')",
        "404-image": "url('/public/404-page.png')",
        "white-bg": "url('/public/white-bg.png')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
