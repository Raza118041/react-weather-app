/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",


    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif'],
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular', 'monospace'],
    },
  },
  plugins: [],
}

