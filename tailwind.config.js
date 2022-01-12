module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily:{
      roboto:['Mochiy Pop P One', 'sans-serif']
    },
    extend: {
      backgroundColor:{
      'oldBrowser':'#2c3e50'
      },
      backgroundImage:{
      'gradientSafariChrome':"-webkit-linear-gradient(to bottom, #2c3e50, #fd746c)",
      'gradient':'linear-gradient(to bottom, #2c3e50, #fd746c)'
      },
    },
  },
  plugins: [],
}
