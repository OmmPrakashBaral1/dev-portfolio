/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0a0d14',
        surface: '#111726',
        card: 'rgba(17, 24, 39, 0.7)',
        accent: {
          DEFAULT: '#14b8a6',
          hover: '#0d9488',
          light: '#2dd4bf',
          glow: 'rgba(20, 184, 166, 0.15)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        tealGlow: '0 0 25px -5px rgba(20, 184, 166, 0.3)',
      },
    },
  },
  plugins: [],
}
