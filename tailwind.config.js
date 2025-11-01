/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#3b82f6",
          600: "#2563eb",
        },
      },
      boxShadow: {
        card: "0 2px 4px rgba(0,0,0,0.1)",
        "card-hover": "0 4px 8px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
};
