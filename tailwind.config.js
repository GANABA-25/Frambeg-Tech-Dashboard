/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      scrollbar: ["hover"],
      fontFamily: {
        inter: ["inter", "serif"],
      },
    },
  },
  plugins: [],
};
