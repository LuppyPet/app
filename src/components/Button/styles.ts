import { styled } from '../../styles'

export const ButtonContainer = styled('button', {
  border: 'none',
  borderRadius: 8,
  height: 80,

  fontSize: '$xl',
  color: '$white',
  cursor: 'pointer',

  variants: {
    backgroundColor: {
      primary: {
        backgroundColor: '$primary',
      },
      secondary: {
        backgroundColor: '$secondary',
      },
    },
  },
})
