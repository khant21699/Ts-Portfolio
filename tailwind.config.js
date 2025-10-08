/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["Space Mono", "monospace"],
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
