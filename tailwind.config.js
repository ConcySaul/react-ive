/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          goldman: ['Goldman', 'serif'],
          orbitron: ['Orbitron', 'sans-serif']
        },
        animation: {
          'slide-in-right': 'slideInRight 2s ease-out forwards',
          'slide-in-left': 'slideInLeft 2s ease-out forwards',
        },
        keyframes:  {
          slideInRight: {
            '0%': { transform: 'translateX(60%)', opacity: 0 },
            '100%': { transform: 'translateX(0)', opacity: 1 },
          },
          slideInLeft: {
            '0%': { transform: 'translateX(-100%)', opacity: 0 },
            '100%': { transform: 'translateX(0)', opacity: 1 },
          }
        }
      },
    },
    plugins: [],
  };
  