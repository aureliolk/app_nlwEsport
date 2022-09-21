/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        galaxy:"url('/bg-galaxy.png')"
      },
      fontFamily:{
        "neon-zone":["Neon Zone Regular", "ui-sans-serif", "system-ui"],
      },
      animation: {
        'up-ads': 'up-ads 1s forwards',
        'up-cards': 'up-cards 1s forwards',
      },
      keyframes: {
        "up-ads": {
         "0%":{
          transform : "translateY(0)"
         },
         "100%":{
          transform : "translateY(-160%)"
         }
        },
        "up-cards":{
          "0%":{
            transform : "translateY(0)"
           },
           "100%":{
            transform : "translateY(-2%)"
           }
        }
      }
    },
  },
  plugins: [
    require('ps-scrollbar-tailwind'),
  ],
}