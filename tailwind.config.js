module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      colors: {
        "dark-blue": "#020405",
        "light-black": "#0C1117",
        "light-gray": "#B3BFCD",
        blue: "#3A3C59",
        "light-blue": "#0C1117",
      },
      height: {
        500: "540px",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-100px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(10)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 1.5s ease-out",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
