/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sora: ["Sora", "sans-serif"], // '"Sora", sans-serif'
      },
      colors: {
        "brand-black": "#0B0B0B",
        "brand-purple": "#9538E2",
        "brand-gray": "#09080F",
      },
    },
  },
  plugins: [],
};
