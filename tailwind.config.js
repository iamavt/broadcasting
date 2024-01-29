/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#fdfdfd",
          "200": "#7f7f7f",
        },
        white: "#f8f8f8",
        "black-20": "#949494",
        "black-80": "#121",
        black: "#000",
        white1: "#fff",
        "blue-1": "#2f80ed",
        silver: "rgba(196, 196, 196, 0)",
        primary: "#0076ff",
      },
      spacing: {},
      fontFamily: {
        raleway: "Raleway",
        roboto: "Roboto",
      },
      borderRadius: {
        lg: "18px",
      },
    },
    fontSize: {
      base: "16px",
      xs: "12px",
      "5xl": "24px",
      lgi: "19px",
      "17xl": "36px",
      "10xl": "29px",
      xl: "20px",
      "5xs": "8px",
      inherit: "inherit",
    },
    screens: {
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
