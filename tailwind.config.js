/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        display: ["Playfair Display", "ui-serif", "Georgia", "serif"],
        body: ["Inter", "system-ui", "sans-serif"],
        editorial: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      colors: {
        corn: {
          bg: "#FAFAFA",
          ink: "#09090B",
          inkSoft: "#3F3F46",
          muted: "#E8ECF0",
          border: "#E4E4E7",
          accent: "#EC4899",
        },
      },
      animation: {
        float: "float 20s ease-in-out infinite",
        "float-slow": "float-slow 25s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
