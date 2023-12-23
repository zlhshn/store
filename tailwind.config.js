/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },

      boxShadow:{
        login: '2px 5px 10px 0px rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};
