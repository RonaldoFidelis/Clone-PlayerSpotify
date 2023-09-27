/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "background":"#000000",
        "aside":"#121212",
        "main":"#121212",
        "footer":"#000000",
        "bg-card":"#282828",
        "font":"#777777"
      }
    },
  },
  plugins: []
}
