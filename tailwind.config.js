/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 0 20px 10px rgba(0, 0, 0, 0.25)",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "serif"],
      },
      colors: {
        primary: "#38bdf8",
        secondary: "#434343",
        ternary: "#d4d4d4",
        title: "#666666",
      },
    },
  },
  plugins: [],
};
