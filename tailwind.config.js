module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        "primary-purple": "#9147FF",
        "secoundary-purple": "#A970FF",
        "primary-grey": "#18181B",
        "secoundary-grey": "#1F1F23",
      },
      height:{
        "18": "4.3rem"
      },
      fontFamily:{
        default: ["Inter", "sans-serif"]
      },
      screens: {
        'xl': {'max': '1279px'},
  
        'lg': {'max': '1023px'},
  
        'md': {'max': '767px'},
  
        'sm': {'max': '450px'},
      },
      gridTemplateColumns: {
        'sidebarMain': 'min-content 1fr',
        'cards': 'repeat(auto-fit, minmax(260px, 1fr))'
      }
    },
  },
  plugins: [
  ],
}