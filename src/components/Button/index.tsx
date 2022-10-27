import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  color?: 'primary' | 'secondary'
  children: ReactNode
  type: 'button' | 'submit'
}

export function Button({
  color = 'primary',
  children,
}: ButtonProps): JSX.Element {
  return <ButtonContainer backgroundColor={color}>{children}</ButtonContainer>
}
