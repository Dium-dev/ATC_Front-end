/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx}',
  ],
    safelist: [
    // 'xs:min-w-[calc(100%/1)]',
    'xs:min-w-[calc(100%/3)]',
    'xs:min-w-[calc(100%/5)]',
    'ms:min-w-[calc(100%/3)]',
    'ms:min-w-[calc(100%/4)]',
    'ms:min-w-[calc(100%/5)]',
    'md:min-w-[calc(100%/4)]',
    'md:min-w-[calc(100%/5)]',
    'lg:min-w-[calc(100%/5)]',
    {
        // pattern: /xl:min-w-[calc(100%/(1|2|3|4|5))]/,
        // pattern: /lg:min-w-[calc(100%/(1|2|3|4|5))]/,
        // pattern: /md:min-w-[calc(100%/(1|2|3|4|5))]/,
        // pattern: /ms:min-w-[calc(100%/(1|2|3|4|5))]/,
        // pattern: /xs:min-w-[calc(100%/(1|2|3|4|5))]/,
        pattern: /min-w-./,
        variants: ['xl', 'lg', 'md', 'ms', 'xs']
    }
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
      'input-bg': '#FFF2F7',
      white: '#fff',
    },
    screens: {
      xs: '480px',
      ms: '768px',
      md: '1080px',
      lg: '1200px',
      xl: '1480px',
      xxl: '1899px',
      xxxl: '1920px'
    },
    extend: {
      backgroundImage: {
        banner:
          'url("https://i0.wp.com/citymagazine.si/wp-content/uploads/2022/05/2023-audi-rs5-coupe-competition.jpg?fit=1920%2C1080&ssl=1")',
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
  },
};
