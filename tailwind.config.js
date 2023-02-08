/ @type {import('tailwindcss').Config} */
module.exports = {
  content: [".//*.{html,js}"],
  theme: {
    fontSize:{
      '5xl': '5.052rem',
      base: '1rem',
      xl: '1.25rem',
       '2xl':'50px',
       '1xl':'20px',
       '0xl':'1.95rem',
       '10xl':'32px',
    },
    extend: {
      colors: {
        'regal-blue': '#404eed',
        'vio':'#5865f2',
        'hover':'#8ea1e1',
        'not-quite':'#23272a',
        'brand':'#5865f2',
      },
    },
  },
  plugins: [],
}