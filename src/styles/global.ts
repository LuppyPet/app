import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    backgroundColor: '$background',
    color: '$gray900',
    '-webkit-font-smoothing': 'antialiased',
    'scroll-behavior': 'smooth',
  },

  'body, input, textarea, button': {
    fontFamily: 'Montserrat',
    fontWeight: '400',
  },

  '@media(max-width: 768px)': {
    html: {
      fontSize: '77.5%;',
    },
  },

  '@media(max-width: 500px)': {
    html: {
      fontSize: '62.5%;',
    },
  },
})
