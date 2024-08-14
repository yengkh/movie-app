/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bodyBackgroundColor: "#030637",
        textColor: "#f8eded",
        containerBackgroundColor: "#17153B",
        activePaginationPage: "#1A4870",
      },
    },
  },
  plugins: [],
};
