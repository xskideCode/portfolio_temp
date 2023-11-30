/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnightblue: {
          "100": "#20113c",
          "200": "#1f103b",
          "300": "#1e103c",
          "400": "#1f103a",
          "500": "#1f0f3c",
          "600": "#1e0f3b",
        },
        cornsilk: {
          "100": "#faf3d7",
          "200": "#fcf2d6",
          "300": "#fcf2d5",
          "400": "#fbf2d5",
          "500": "#faf2d5",
          "600": "#f9f2d6",
          "700": "#f9f1d3",
        },
        black: "#2d2d2d",
        deepskyblue: {
          "100": "#15a4ec",
          "200": "#15a4eb",
        },
        floralwhite: "#fafbf1",
        white: "#fff",
        steelblue: "#3398cc",
      },
      spacing: {},
      fontFamily: {
        "body-text": "Epilogue",
        "fredoka-one": "'Fredoka One'",
      },
      borderRadius: {
        "9xl": "28px",
      },
    },
    fontSize: {
      mid: "1.06rem",
      "13xl": "2rem",
      xl: "1.25rem",
      "21xl": "2.5rem",
      "8xl": "1.69rem",
      "17xl": "2.25rem",
      inherit: "inherit",
    },
    screens: {
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
