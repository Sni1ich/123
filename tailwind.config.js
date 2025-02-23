/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "360px",
      sm: "480px",
      md: "768px",
      lg: "1000px",
      xl: "1600px",
    },
    colors: {
      // Palette 1
      "palette1-1": "#ffffff",
      "palette1-2": "#af6e4f",
      "palette1-3": "#8b4518",
      "palette1-4": "#59260d",
      "palette1-5": "#59260b",
      // Palette 2
      "palette2-1": "#42413f",
      "palette2-2": "#79685b",
      "palette2-3": "#a6876c",
      "palette2-4": "#edebe8",
      "palette2-5": "#C5B0AA",
    },
    extend: {
      fontFamily: {
        mukta: ["Mukta Vaani", "sans-serif"],
        marcellus: ["Marcellus SC", "serif"],
        archivo: ["Archive", "sans-serif"],
      },
    },
  },
  plugins: [],
};
