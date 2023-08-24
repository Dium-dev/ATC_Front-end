/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      "primary-lm": "#8C0303",
      "secondary-lm": "#F20505",
      "background-lm": "#222222",
      "text-lm": "#333333",
      "primary-dm": "#444444",
      "secondary-dm": "#555555",
      "background-dm": "#666666",
      "text-dm": "#f1f1f1",
      "secondary-background": "#D6D6D6",
    },
    screen: {
      xs: "480px",
      ms: "768px",
      md: "990px",
      lg: "1200px",
      xl: "1920px",
    },
    extend: {},
  },
  plugins: [],
};
