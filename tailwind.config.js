/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#20393C",
        green: "#3EC880",
        red: "#DE9089",
        black: "#383737",
        light: "#424040",
      },
      container: {
        center: true,
        padding: "1rem",
      },
      backgroundImage: {
        popularDesktop: "url(../../public/images/popular_bg.png)",
        popularMobile: "url(../../public/images/popular_bg_mobile.png)",
      },
    },
  },
  plugins: [],
};
