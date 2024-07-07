/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'back': 'rgb(241 241 241)',
        'btn': 'rgb(205 234 104)',
        "btnBg":'rgba(0,0,0,0)',
        'text': '#212121',
        'primary': '#004D43',
      },
      fontFamily: {
        'fond':['Founders Grotesk','Roboto','sans-serif'],
        'fond1':['Neue Montreal','Roboto','sans-serif'],
        'logo': ['NeueMontreal', 'Roboto','sans-serif'],
      },
    },
  },
  plugins: [],
}

