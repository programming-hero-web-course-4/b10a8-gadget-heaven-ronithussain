/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        banner: "url('./src/assets/banner.jpg')"
      },
      colors: {
        primary: '#9538E2',
        color: '#09080F',
        gray: '#09080F99',
        btn: '#09080F',
        fontFamily: {
          sora: ['Sora', 'sans-serif'], 
        },
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
