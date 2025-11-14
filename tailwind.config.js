module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './scenarios/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media',
  theme: {
    extend: {
      boxShadow: {
        light: '0px 2px 6px 2px rgba(0, 0, 0, 0.075)',
      },
      colors: {
        accent: {
          DEFAULT: '#005248',
          dark: '#00423a',
          darker: '#00100e',
          light: '#33756d',
          lighter: '#ccdcda',
        },
        primary: {
          DEFAULT: '#feb813',
          dark: '#7f5c0a',
          darker: '#191202',
          light: '#ffdc89',
          lighter: '#fff8e7',
        },
        secondary: {
          DEFAULT: '#a88a5b',
          dark: '#54452e',
          darker: '#110e09',
          light: '#d4c5ad',
          lighter: '#f6f3ef',
        },
      },
      fontFamily: {
        cursivex: "'Cursivex', serif",
      },
      minHeight: {
        'screen-wo-navbar': 'calc(100vh - 5rem)',
        'screen-wo-navbar-sm': 'calc(100vh - 4rem)',
      },
      transitionProperty: {
        height: 'height',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
