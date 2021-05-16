module.exports = {
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        electric: '#db00ff',
        ribbon: '#0047ff',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
