/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "orange": 'hsl(26, 100%, 55%)',
        "pale-orange": 'hsl(25, 100%, 94%)',
        "dark-blue": "hsl(220, 13%, 13%)",
        "dark-grayish-blue": "hsl(219, 9%, 45%)",
        "blue": "hsl(220, 14%, 75%)",
        "light-blue": "hsl(223, 64%, 98%)"
      },
      fontFamily: {
        'kumbh': ["Kumbh Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

