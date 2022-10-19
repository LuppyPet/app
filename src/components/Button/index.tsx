import React, { MouseEvent, ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface IButtonProps {
  isDisabled?: boolean
  type?: 'button' | 'submit'
  children: ReactNode
  onClick?: (event: MouseEvent<HTMLElement>) => void
  isPink: boolean
}

export const Button: React.FC<IButtonProps> = ({
  isDisabled = false,
  type = 'button',
  children,
  onClick,
  isPink,
}): JSX.Element => (
  <ButtonContainer
    onClick={(event) => (onClick ? onClick(event) : null)}
    type={type}
    isDisabled={isDisabled}
    isPink={isPink}
  >
    {children}
  </ButtonContainer>
)
