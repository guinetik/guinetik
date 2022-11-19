module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
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
          primary: "#1FB2A6",

          secondary: "#D926A9",

          accent: "#6419E6",

          neutral: "#191D24",

          "base-100": "#2A303C",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
};
