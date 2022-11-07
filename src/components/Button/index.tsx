import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  color?: 'primary' | 'secondary'
  children: ReactNode
  type: 'button' | 'submit'
  onClick?: () => void
  isDisabled?: boolean
}

export function Button({
  color = 'primary',
  children,
  type,
  onClick,
  isDisabled = false,
}: ButtonProps): JSX.Element {
  return (
    <ButtonContainer
      backgroundColor={color}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </ButtonContainer>
  )
}
