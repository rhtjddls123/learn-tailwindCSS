/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        clifford: "#da373d"
      }
    },
    container: {
      center: true,
      padding: "2rem"
    }
  },
  plugins: []
};
