module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ediboy: {
          bg: "#303030",
          primary: "#F94E69",
        },
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"], // Ensure fonts with spaces have " " surrounding it.
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
