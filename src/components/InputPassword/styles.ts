import { styled } from '../../styles'

export const InputPasswordContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',

  '.password-buttons-wrapper': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    button: {
      backgroundColor: 'transparent',
      border: 'none',
      cursor: 'pointer',
      alignSelf: 'flex-end',
      marginTop: 4,
      textDecoration: 'underline',
      fontSize: '$sm',
      color: '$primary',
      fontWeight: 'bold',
    },
  },
})
