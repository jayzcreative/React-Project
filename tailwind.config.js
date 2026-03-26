/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 1. Add your custom Google Fonts
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        roboto: ["'Roboto Condensed'", "sans-serif"],
      },
      // 2. Add your specific radial gradient
      backgroundImage: {
        'purple-radial': 'radial-gradient(#280a48, #20043d)',
      },
      // 3. Add your custom colors so you can use text-purple-light, etc.
      colors: {
        purple: {
          light: '#a18aba',
          dark: '#140524',
          accent: '#8964b0',
        },
      },
    },
  },
  plugins: [],
}