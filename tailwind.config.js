/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    colors: {
      'background-lm': '#f1f1f1',
      'background-dm': '#13131d',
      'primary-lm': '#8C0303',
      'primary-dm': '#444444',
      'secondary-lm': '#F20505',
      'secondary-dm': '#555555',
      'secondary-background': '#ffff',
      'text-lm': '#333333',
      'text-dm': '#f1f1f1',
      white: '#fff',
    },
    screens: {
      xs: '480px',
      ms: '768px',
      md: '1080px',
      lg: '1200px',
      xl: '1480px',
    },
    extend: {
      backgroundImage: {
        banner:
          'url("https://i0.wp.com/citymagazine.si/wp-content/uploads/2022/05/2023-audi-rs5-coupe-competition.jpg?fit=1920%2C1080&ssl=1")',
      },
    },
    maxWidth: {
      'f-hd': '1920px',
    },
    minWidth: {
      100: '100px',
    },
    gap: {
      50: '50px',
    },
  },
  plugins: [],
};
