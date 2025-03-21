/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-bg": "#111111",
        "darker-bg": "#0a0a0a",
        sidebar: "#1a1a1a",
        "sidebar-light": "#f5f5f5",
        primary: "#1a73e8",
        secondary: "#dc2626",
        "text-dark": "#ffffff",
        "text-light": "#333333",
        "card-bg": "rgba(26, 26, 26, 0.8)",
        "card-bg-light": "rgba(255, 255, 255, 0.8)",
        "item-hover": "#2d2d2d",
        "item-hover-light": "#e5e5e5",
        "border-dark": "#2d2d2d",
        "border-light": "#e5e5e5",
      },
    },
  },
  plugins: [],
};
