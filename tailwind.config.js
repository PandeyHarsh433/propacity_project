/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: { max: "690px" }, // Corrected placement, removed the extra 'screens' key
      },
    },
  },
  plugins: [],
};
