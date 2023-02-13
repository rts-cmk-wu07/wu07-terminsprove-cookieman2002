/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      black: "#000000",
      white: "#FFFFFF",
      grey: "#E4E4E4",
      orange: "#F4A88E"

    },
    fontSize: {
      extrabig:"62px",
      big: "50px",
      medium:"28px",
      small:"22px"
    }, 
    fontFamily: {
      text: ["Arial"]
    },
    backgroundImage:{
      "top-image": "url('/Assets/welcome - background.jpg')",
      "bottom-image": "url('/Assets/welcome - center.jpg')"
    }
    
  },
  plugins: [],
}
