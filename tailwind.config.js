/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blob-blue-light": "#93c5fd", // optional if used in CSS
        "blob-blue-dark": "#3b82f6", // optional if used in CSS
        background: "#FFF8F0", // still useful for background color
      },
      borderRadius: {
        circle: "9999px", // keep if you use rounded-full or circle class
      },
    },
  },
  plugins: [],
};
