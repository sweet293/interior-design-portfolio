/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans:["Poppins", "sans-serif"],
        cursive:["Poppins", "cursive"],
        inter: ["Inter", "sans-serif"],
        merriweather: ["Merriweather", "serif"],
      },
      colors:{
        primary: "#a81e05",
        secondary: "#4a1e1b",
        brandDark: "#0b0b0d",
        brandBlue: "#125795",
        purple: {
          200: "#d6b3ff",
          700: "#6b00b3",
        },
        red: {
          200: "#ffc0cb",
          700: "#b30000",
        }
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      keyframes: {
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        slideUp: 'slideUp 1s ease-out',
      },
      boxShadow:{
        neon: "0 0 15px theme('colors.purple.200'), 0 0 50px theme('colors.red.700')"
      }
    },
  },
  plugins: [],
}

