import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgGoogle: "rgb(59 130 246 / 11%)",
        greenLight: "#1c9b59",
        greenBold: "#165b47",
      },
      fontFamily: {
        cursive: "cursive",
      },
    },
  },
  plugins: [daisyui],
};
