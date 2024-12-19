/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'drop-down': 'dropDown 0.8s ease-out', 
      },
      keyframes: {
        dropDown: {
          '0%': { transform: 'translateY(100vh)'}, 
          '100%': { transform: 'translateY(0)'}, 
        },
      },
    },
  },
  plugins: [],
}