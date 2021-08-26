module.exports = {
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layout/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          darkOrange: "#ff5a1f",
          lightOrange: "#feecdc",
          borderBG: "#d2d6de",
          calendar: "#3b3b3b",
        },
      },
      width: {
        "4/48": "448px",
        "1/55": "155px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
