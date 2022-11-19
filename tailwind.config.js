module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui"), require('@tailwindcss/typography')],
  daisyui: {
    themes: [
      "synthwave",
      "valentine",
      "cyberpunk",
      "night",
      "winter",
      "halloween",
      {
        guinetik: {
          primary: "#4699BD",
          "primary-focus": "#325A73",
          secondary: "#D92B6B",
          "secondary-focus": "#991F4B",
          accent: "#2DA63F",
          "accent-focus": "#34BF49",
          neutral: "#096969",
          "base-100": "#141C26",
          "base-200": "#1D2733",
          "base-300": "#182633",
          info: "#26CED1",
          success: "#72F7A1",
          warning: "#FCE84C",
          error: "#C2403E",
        },
      },
    ],
  }
};
