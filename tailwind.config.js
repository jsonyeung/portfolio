const baseFontSize = 20
const em = (obj) => {
  // spacing to em
  obj = {...obj}
  for (const k in obj) {
    if (obj.hasOwnProperty(k))
      if (typeof obj[k] === 'string') continue
      else obj[k] = `${(obj[k] / baseFontSize)}em`
  }
  return obj
}

/* Tailwind Config */
module.exports = {
  purge: [],
  theme: {
    colors: {
      'black': '#1F2423',
      'white': '#F2F2F2',
      'gray': 'rgba(255, 255, 255, 0.7)',
      'alt': '#2C2C2C',
      'acc-1': '#FAD247',
      'acc-2': '#2F41EA', 
    },

    fontFamily: {
      'head': 'public sans, sans-serif',
      'body': 'paul-grotesk, sans-serif',
      'mono': 'lab-mono, monospace',
      'geo': 'bandeins-strange, serif',
    },

    fontWeight: {
      '300': 300,
      '350': 350,
      '400': 400,
      '450': 450,
      '600': 600,
    },

    letterSpacing: {
      'tighter': '-0.01em',
      'tight': '-0.005em',
      'wide': '0.005em',
      'wider': '0.01em'
    },

    lineHeight: {
      'wide': '1.6',
      'normal': '1.4',
      'tight': '0.8',
    },

    spacing: em({
      'none': 0,
      '1': 4,
      '2': 8,
      '3': 12,
      '4': 24,
      '5': 40,
      '6': 52,
      '7': 60,
      '8': 80,
      '9': 100,
      '10': 120,
    }),

    borderRadius: {
      'none': 0,
      'default': '2px'
    },

    opacity: {
      '0': 0,
      '20': 0.2,
      '40': 0.4,
      '70': 0.7,
      '100': 1
    },
    
    screens: {
      'lg': {max: '1400px'},
      'md': {max: '1024px'},
      'sm': {max: '750px'},
    },

    extend: {
      maxWidth: {
        'read': '60ch'
      }
    }
  },

  corePlugins: { 
    fontSize: false,
    container: false
  },
  variants: {},
  plugins: [],
}
