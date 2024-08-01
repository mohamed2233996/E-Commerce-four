/** @type {import('tailwindcss').Config} */
export default {
  plugins: [
    require('flowbite/plugin')
  ],
  content: [
    "./node_modules/flowbite/**/*.js",
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        binkBtn: "#DB4444",
        greenBtn: "#00FF66",
        Text2: "#000000",
        Secondary:"#DB4444",

      }
    },

  },
}

