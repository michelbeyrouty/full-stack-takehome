/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        appLogoScale: {
          '0%': { transform: 'scale(0.5)' },
          '100%': { transform: 'translateX(1.5)' },
        },
      },
      animation: {
        'appLogoScale': 'appLogoScale infinite alternate 2s ease-in-out',
      },
      colors: {
        blue: "#1887fc",
      },
    },
  },
  plugins: [],
}

