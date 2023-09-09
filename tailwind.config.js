/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':'#8112FA',
        'text-color':'#0F152B',
        'paragraph-color':'#0F152B', /* opacity: 70% */
        'bg-color':'#BFBFBF',
      }
    },
  },
  plugins: [],
}
