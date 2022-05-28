module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#0f0f0f",
        "primary-purple": "#772CE8",
        "secoundary-purple": "#A970FF",
        "primary-grey": "#464649",
        "secoundary-grey": "#2f2f30",
      },
      height:{
        "18": "4.3rem"
      },
      screens: {
        'xl': {'max': '1279px'},
  
        'lg': {'max': '1023px'},
  
        'md': {'max': '767px'},
  
        'sm': {'max': '639px'},
      }
    },
  },
  plugins: [],
}