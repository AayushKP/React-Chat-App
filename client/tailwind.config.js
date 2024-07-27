/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient-1":
          "linear-gradient(to right, #6C3F3F 10%, #9F5C5C 46%, #D27A7A 92%)",
        "custom-gradient-2":
          "linear-gradient(to right, #C0F4F1 0%, #4EB5AE 57%, #3CA598 100%)",
        "custom-gradient-3":
          "linear-gradient(to right, #F7E7E7 0%, #E7BA91 34%, #5F8171 82%)",
      },
      fontFamily: {
        jolly: ['"Jolly Lodger"', "cursive"],
        iceland: ['"Iceland"', "sans-serif"],
        judson: ['"Judson"', "serif"],
      },
    },
  },
  plugins: [],
};
