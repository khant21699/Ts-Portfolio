/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#282c33",
        primary: "#86E3F8",
        secondary: "#abb2bf",
        bg: "#021526",
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
