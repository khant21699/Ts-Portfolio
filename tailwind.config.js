/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#282c33",
        primary: "#c778dd",
        secondary: "#abb2bf",
      },
      screens: {
        mb: "900px",
      },
      fontFamily: {
        firaCode: ["Fira Code", "monospace"],
      },
      content: {
        dots: "url('./assets/Dots.png')",
        graphic: "url('./assets/BG.png')",
        Rectangle: "url('./assets/Rectangle.png')",
      },
    },
  },
  plugins: [],
};
