module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      md: { max: "767px" },
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
    },
    colors: {
      bc: "#56682c",
      primary: " #ffffff",
      secondary: "#ffffff",
      danger: "#c8dd96",
      lightGrey: "#deefb7",
    },
    boxShadow: {
      custom: "0 0 10px #F8EF12",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
