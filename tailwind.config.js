/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class', // Enables manual dark/light toggle via a class
  theme: {
    extend: {
      colors: {
        primary: '#2563eb', // blue-600
        secondary: '#f59e0b', // amber-500
      },
    },
  },
  plugins: [],
}
