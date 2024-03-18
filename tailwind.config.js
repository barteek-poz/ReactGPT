/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "rgba(10, 25, 110, 1)",
        cream: "rgba(244, 244, 244, 1)",
        blur: "rgba(0,0,0,.5)",
      },
      keyframes: {
        slideIn: {
          "0%": { width: "0%" },
          "50%": { width: "50%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        slideIn: "slideIn .2s linear ",
      },
    },
  },
  plugins: [],
};
