// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        phonepe: "#fac718",
        phonepeDark: "#e5b000",
        textDark: "#1a1a1a",
        textGray: "#666666",
      },
    },
  },
};