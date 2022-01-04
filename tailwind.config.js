module.exports = {
  purge: {
    content: ["./public/**/*.html", "./src/**/*.vue"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        gunmetal: '#012A35ff'
      },
      lineClamp: {
        7: '7',
        8: '8',
        9: '9',
        10: '10',
      }
    },
  },
  variants: {
    extend: {
      transform: ['hover', 'focus','group-hover'],
    },
    lineClamp: ['responsive', 'hover'],
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
}
