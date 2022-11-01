import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  color?: 'primary' | 'secondary'
  children: ReactNode
  type: 'button' | 'submit'
  onClick?: () => void
}

export function Button({
  color = 'primary',
  children,
  type,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <ButtonContainer backgroundColor={color} type={type} onClick={onClick}>
      {children}
    </ButtonContainer>
  )
}
