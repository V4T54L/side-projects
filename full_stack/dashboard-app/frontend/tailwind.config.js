/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1D4ED8",
        secondary: "#3B82F6",
        accent: "#FBBF24",
        background: "#F9FAFB",
        text: "#1F2937",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        heading: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
