/* Font setup */
const baseFontSize = 20

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
      'base': baseFontSize
    },
    fontFamily: {
      'head': 'public sans, sans-serif',
      'sub': 'merriweather, serif',
      'body': 'paul-grotesk, sans-serif',
      'mono': 'lab-mono, monospace',
      'geo': 'jost, public sans, sans-serif'
    },
    spacing: {
      'none': 0,
      ...space(4, 8, 120)
    }
  },
  variants: {},
  plugins: [],
}
