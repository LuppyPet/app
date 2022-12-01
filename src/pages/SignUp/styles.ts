import { styled } from '../../styles'

export const SignUpContainer = styled('main', {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& > div': {
    flexDirection: 'column',
    alignItems: 'center',

    width: '100%',
    height: '100%',

    padding: '5rem 10rem',
  },

  '@bp0': {
    '& > div': {
      padding: '2.5rem 5rem',
    },
  },
  '@bp1': {
    '& > div': {
      padding: '1.25rem 2.5rem',
    },
  },
  '@bp2': {
    height: 'calc(100vh - 80px)',
  },
})

export const SignUpLeftSide = styled('div', {
  display: 'flex',

  justifyContent: 'center',
  gap: 48,
  backgroundColor: '$primary',
  borderTopRightRadius: 64,
  borderBottomRightRadius: 64,
  boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',

  img: {
    width: '100%',
    maxWidth: 400,
  },

  div: {
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
    color: '$white',
    alignItems: 'center',

    h1: {
      fontSize: '$2xl',
      textAlign: 'center',
    },
    p: {
      fontSize: '$xl',
      textAlign: 'center',
    },
  },

  '@bp2': {
    display: 'none',
  },
})

export const SignUpRightSide = styled('div', {
  display: 'flex',

  justifyContent: 'space-between',

  gap: 32,

  '& > div': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    maxWidth: 400,
  },
  img: {
    marginBottom: 32,
    maxWidth: 180,
  },
  h1: {
    marginBottom: 32,

    'strong:first-child': {
      color: '$primary',
    },

    'strong:last-child': {
      color: '$secondary',
    },
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    width: '100%',
  },

  p: {
    fontSize: '$md',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    button: {
      color: '$primary',
      backgroundColor: 'transparent',
      border: 'none',
      textDecoration: 'underline',
      cursor: 'pointer',

      fontSize: '$md',
      fontWeight: 'bold',

      marginLeft: 4,
    },
  },

  '@bp2': {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',

    '& > div': {
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
})
