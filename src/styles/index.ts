import { createStitches } from '@stitches/react'

export const {
  config,
  createTheme,
  styled,
  globalCss,
  getCssText,
  theme,
  keyframes,
  css,
} = createStitches({
  theme: {
    colors: {
      primary: '#F56076',
      secondary: '#23B6E7',
      background: '#FAFAFA',
      white: '#FFFFFF',

      gray100: '#ECEDEE',
      gray300: '#D3D4D9',
      gray500: '#808080',
      gray800: '#6A6A6A',
      gray900: '#333333',
    },
    fontSizes: {
      sm: '0.75rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.5rem',
      '2xl': '2.5rem',
      '3xl': '3.5rem',
    },
  },
  media: {
    bp0: '(max-width: 1366px)',
    bp1: '(max-width: 1024px)',
    bp2: '(max-width: 768px)',
    bp3: '(max-width: 500px)',
  },
})
