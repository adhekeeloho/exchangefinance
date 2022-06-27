/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        image: "url('~@/assets/dollar2.jpg')",
      }),
    },
  },
  plugins: [],
};
