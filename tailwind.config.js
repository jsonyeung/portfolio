/* Font setup */
const baseFontSize = 16

// spacing to rem
const space = (...steps) => {
  return steps.reduce((acc, px, i) => {
    acc[i+1] = `${(px / baseFontSize)}rem`
    return acc
  }, {})
}

/* Tailwind Config */
module.exports = {
  purge: [],
  theme: {
    fontSize: {
      base: baseFontSize
    },
    spacing: {
      'none': 0,
      ...space(4, 8, 120)
    }
  },
  variants: {},
  plugins: [],
}
