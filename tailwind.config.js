/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        customGray: "#24244F",
        customBlue: "#2337E0",
        customDarkGray: "#18161A",
        customDarkBlue: "#000447",
        customGrayBlue: "#5C5E89",
      },
    },
  },
  plugins: [],
};
