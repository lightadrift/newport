import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,ts,jsx,tsx,mdx}"];
export const theme = {
  extend: {
    colors: {
      background_dark: "#0B0B0B",
      text_dark: "#FFFFFF",
      surface_dark_color: "#1F1F1F",
    },
    fontFamily: {
     inter: "Inter, sans-serif"
    
    },
    backgroundImage: {
      "gradient-radial": "radial-gradient(80px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.12), transparent 35%)",
    },
  },
};
export const plugins = [];
