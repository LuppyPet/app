import { styled } from '../../styles'

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  position: 'relative',

  label: {
    marginBottom: 8,
  },

  button: {
    backgroundColor: 'transparent',
    border: 'none',
    cursor: 'pointer',
    alignSelf: 'flex-end',
    marginTop: 4,
    textDecoration: 'underline',
    fontSize: '$sm',
  },
})

export const InputWrapper = styled('div', {
  width: '100%',
  position: 'relative',
  input: {
    borderRadius: 8,
    height: 48,
    border: '1px solid $gray300',
    fontSize: '$md',
    padding: '8px 32px 8px 8px',
    width: '100%',
  },

  svg: {
    position: 'absolute',
    right: 8,
    top: '24%',
  },
})
